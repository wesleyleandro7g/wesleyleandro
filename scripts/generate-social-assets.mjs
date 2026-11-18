import { Buffer } from 'node:buffer'
import { URL } from 'node:url'
import sharp from 'sharp'
import { fileURLToPath } from 'node:url'
const publicDir = fileURLToPath(new URL('../public/', import.meta.url))
const og = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630"><rect width="1200" height="630" fill="#0a0a0a"/><g font-family="sans-serif"><text x="80" y="235" font-size="28" fill="#a3a3a3" letter-spacing="2.8">SENIOR SOFTWARE ENGINEER</text><text x="80" y="329" font-size="64" font-weight="600" fill="#f5f5f5">Wesley Leandro</text><text x="80" y="402" font-size="28" fill="#a3a3a3">Full Stack &amp; AI Engineering · React · Node.js</text><text x="80" y="450" font-size="24" fill="#a3a3a3">8+ years of experience · Open to international roles</text></g></svg>`
const icon = `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32"><rect width="32" height="32" fill="#0a0a0a"/><text x="16" y="23" text-anchor="middle" font-family="sans-serif" font-size="18" font-weight="700" fill="#f5f5f5">W</text></svg>`
await sharp(Buffer.from(og)).png().toFile(`${publicDir}opengraph-image.png`)
await sharp(Buffer.from(icon)).png().toFile(`${publicDir}icon.png`)

// Each case has its own share card; the site keeps the same restrained visual system.
const { mkdir, readFile } = await import('node:fs/promises')
const content = JSON.parse(await readFile(new URL('../src/i18n/messages/en.json', import.meta.url), 'utf8'))
await mkdir(`${publicDir}social`, { recursive: true })
const escapeXml = value => value.replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;').replaceAll('"', '&quot;')
for (const [slug, study] of Object.entries(content.workPage.studies)) {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630"><rect width="1200" height="630" fill="#0a0a0a"/><path d="M80 150H1120" stroke="#333"/><g font-family="sans-serif"><text x="80" y="115" font-size="24" fill="#aaa">WESLEY LEANDRO · ENGINEERING WORK</text><text x="80" y="310" font-size="64" font-weight="600" fill="#f5f5f5">${escapeXml(study.company)}</text><text x="80" y="385" font-size="30" fill="#aaa">${escapeXml(study.domain)}</text><text x="80" y="530" font-size="22" fill="#aaa">wesleyleandro.com/en/work/${slug}</text></g></svg>`
  await sharp(Buffer.from(svg)).png().toFile(`${publicDir}social/${slug}.png`)
}
