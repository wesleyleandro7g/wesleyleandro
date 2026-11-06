import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
import { URL } from 'node:url'
import test from 'node:test'

const messages = Object.fromEntries(['en', 'pt', 'es'].map(locale => [
  locale,
  JSON.parse(readFileSync(new URL(`../src/i18n/messages/${locale}.json`, import.meta.url), 'utf8')),
]))

function leafKeys(value, prefix = '') {
  return Object.entries(value).flatMap(([key, child]) => {
    const path = prefix ? `${prefix}.${key}` : key
    return typeof child === 'object' && child !== null ? leafKeys(child, path) : path
  }).sort()
}

test('all three locales expose the same content and no empty translated strings', () => {
  for (const [locale, content] of Object.entries(messages)) {
    assert.deepEqual(leafKeys(content), leafKeys(messages.en), locale)
    for (const key of leafKeys(content)) {
      const value = key.split('.').reduce((current, segment) => current[segment], content)
      assert.equal(typeof value, 'string', `${locale}.${key}`)
      assert.ok(value.trim().length, `${locale}.${key}`)
    }
  }
})

test('employment and project periods agree, with AZX as employer and five positions', () => {
  for (const [locale, content] of Object.entries(messages)) {
    const jobs = Object.values(content.home.experience.items)
    assert.equal(jobs.length, 5, locale)
    assert.deepEqual(jobs.slice(0, 4).map(job => job.company), ['AZX', 'James Moto Shop', 'Elint Tech', 'Desencoder'])
    const studies = content.workPage.studies
    for (const [index, slug] of ['penzack', 'james-moto-shop', 'elint', 'desencoder'].entries()) {
      assert.equal(studies[slug].period, jobs[index].period, `${locale}.${slug}`)
      assert.ok(studies[slug].responsibility && studies[slug].solution && studies[slug].impact)
    }
    assert.match(studies.penzack.role, /AZX/)
    assert.match(jobs[3].period, /2019.*2022/)
    assert.match(jobs[4].period, /2017.*2020/)
    assert.equal(content.home.about.educationPeriod, '2018–2022')
  }
  assert.deepEqual(Object.values(messages.en.home.experience.items).map(job => [job.role, job.period]), [
    ['Senior Frontend Developer', 'Mar 2024–Present'],
    ['Full Stack Developer', 'Sep 2023–Mar 2024'],
    ['Frontend Developer', 'Aug 2022–Mar 2024'],
    ['Full Stack Developer', 'Mar 2019–Aug 2022'],
    ['Freelance Full Stack Developer', 'May 2017–Apr 2020'],
  ])
})

test('verified metrics keep their context and unsupported claims are absent', () => {
  for (const [locale, content] of Object.entries(messages)) {
    const serialized = JSON.stringify(content)
    assert.doesNotMatch(serialized, /7\+|2M\+|(?:three|três|tres) (?:platform |de plataforma )?migra/i, locale)
    assert.match(content.home.hero.intro, /8\+/)
    assert.match(content.home.impact.items['item-01'].context, /Penzack.*AZX/)
    assert.match(content.home.impact.items['item-03'].context, /James Moto Shop/)
    const jobs = Object.values(content.home.experience.items)
    assert.match(jobs[4].description, /40%.*60%.*6%/)
    for (const study of Object.values(content.workPage.studies)) {
      assert.doesNotMatch(JSON.stringify(study), /40%|60%|6%/, `${locale}.${study.company}`)
    }
    assert.deepEqual(content.writingPage.articles, {}, 'unverified article URLs must not look published')
  }
})
