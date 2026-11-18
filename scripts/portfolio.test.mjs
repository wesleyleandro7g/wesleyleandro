import assert from 'node:assert/strict'
import { readFileSync, existsSync, readdirSync } from 'node:fs'
import { URL } from 'node:url'
import test from 'node:test'
import { employmentFacts, projectFacts, verifiedMetrics, evidence, resumes } from '../src/utils/portfolio.ts'

const messages = Object.fromEntries(['en', 'pt', 'es'].map(locale => [locale,
  JSON.parse(readFileSync(new URL(`../src/i18n/messages/${locale}.json`, import.meta.url), 'utf8')),
]))
function leafKeys(value, prefix = '') {
  return Object.entries(value).flatMap(([key, child]) => {
    const path = prefix ? `${prefix}.${key}` : key
    return typeof child === 'object' && child !== null ? leafKeys(child, path) : path
  }).sort()
}
test('all locales expose equivalent, nonempty content for every case', () => {
  for (const [locale, content] of Object.entries(messages)) {
    assert.deepEqual(leafKeys(content), leafKeys(messages.en), locale)
    for (const key of leafKeys(content)) {
      const value = key.split('.').reduce((current, segment) => current[segment], content)
      assert.equal(typeof value, 'string', `${locale}.${key}`)
      assert.ok(value.trim().length, `${locale}.${key}`)
    }
    assert.deepEqual(Object.keys(content.workPage.studies).sort(), Object.keys(projectFacts).sort())
  }
})
test('canonical career facts preserve corrected dates and overlapping independent work', () => {
  assert.deepEqual(employmentFacts.map(job => [job.role, job.start, job.end]), [
    ['Senior Frontend Developer', '2024-03', '2026-11'],
    ['Tech Lead (Full Stack)', '2023-09', '2024-03'],
    ['Frontend Developer', '2022-08', '2023-09'],
    ['Full Stack Developer', '2019-03', '2022-08'],
    ['Full Stack Developer', '2017-05', '2020-04'],
  ])
  assert.equal(projectFacts['tactia-ai'].status, 'proof-of-concept')
  assert.equal(projectFacts['tactia-build'].status, 'design')
  assert.equal(projectFacts['facil-crm'].status, 'not-disclosed')
  assert.deepEqual(Object.keys(projectFacts).filter(slug => projectFacts[slug].featured), ['penzack', 'facil-crm', 'james-moto-shop'])
})
test('claims have internal sources and unverified figures stay out of public copy', () => {
  assert.deepEqual(Object.values(verifiedMetrics), ['8+', '1M+', '1,000+', '3'])
  for (const metric of Object.keys(verifiedMetrics)) assert.ok(evidence.find(item => item.claim === metric && item.verified && item.source))
  for (const content of Object.values(messages)) {
    assert.doesNotMatch(JSON.stringify(content), /7\+|2M\+|40%|60%|6%/)
    assert.match(content.home.hero.intro, /8\+/)
    assert.match(content.home.impact.items['item-02'].context, /Penzack.*AZX/)
    assert.match(content.home.impact.items['item-04'].context, /James Moto Shop/)
    assert.deepEqual(content.writingPage.articles, {})
  }
  for (const resume of resumes) if (resume.href) assert.ok(existsSync(new URL(`../public${resume.href}`, import.meta.url)))
})

// Build first: test output behavior, including all existing routes and internal anchors.
const dist = new URL('../dist/', import.meta.url)
function htmlFiles(dir) {
  return readdirSync(dir, { withFileTypes: true }).flatMap(entry => {
    const url = new URL(entry.name + (entry.isDirectory() ? '/' : ''), dir)
    return entry.isDirectory() ? htmlFiles(url) : entry.name.endsWith('.html') ? [url] : []
  })
}
test('all localized routes have canonical, language alternatives, one H1 and case status', () => {
  for (const locale of Object.keys(messages)) {
    for (const path of ['', '/work', '/writing', '/resume', ...Object.keys(projectFacts).map(slug => `/work/${slug}`)]) {
      const html = readFileSync(new URL(`.${`/${locale}${path}`}/index.html`, dist), 'utf8')
      assert.equal((html.match(/<h1\b/g) ?? []).length, 1, `${locale}${path}`)
      assert.ok(html.includes(`href="https://wesleyleandro.com/${locale}${path}"`))
      for (const lang of ['en', 'pt', 'es', 'x-default']) assert.ok(html.includes(`hreflang="${lang}"`))
      assert.doesNotMatch(html, /href="\/resume\.pdf"|Missing translation/)
      if (path.startsWith('/work/')) {
        const slug = path.split('/').at(-1)
        assert.ok(html.includes(messages[locale].workPage.status[projectFacts[slug].status]))
        assert.ok(html.includes(`/social/${slug}.png`))
      }
    }
  }
})
test('generated internal links, assets and anchors resolve', () => {
  for (const file of htmlFiles(dist)) {
    const html = readFileSync(file, 'utf8')
    for (const [, href] of html.matchAll(/(?:href|src)="([^"\s]+)"/g)) {
      if (!href.startsWith('/') && !href.startsWith('#')) continue
      const [pathname, fragment] = href.split('#')
      const cleanPath = pathname.split('?')[0]
      let target = cleanPath ? new URL(`.${cleanPath}`, dist) : file
      if (cleanPath && !/\.[a-z\d]+$/i.test(cleanPath)) target = new URL(`.${cleanPath.replace(/\/$/, '')}/index.html`, dist)
      assert.ok(existsSync(target), `${file.pathname}: ${href}`)
      if (fragment) assert.ok(readFileSync(target, 'utf8').includes(`id="${fragment}"`), `${file.pathname}: ${href}`)
    }
  }
})
