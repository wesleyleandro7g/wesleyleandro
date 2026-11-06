import { Buffer } from 'node:buffer'
import { URL } from 'node:url'
import sharp from 'sharp'
import { fileURLToPath } from 'node:url'
const publicDir = fileURLToPath(new URL('../public/', import.meta.url))
const og = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630"><rect width="1200" height="630" fill="#0a0a0a"/><g font-family="sans-serif"><text x="80" y="235" font-size="28" fill="#737373" letter-spacing="2.8">SENIOR SOFTWARE ENGINEER</text><text x="80" y="329" font-size="64" font-weight="600" fill="#f5f5f5">Wesley Leandro</text><text x="80" y="402" font-size="28" fill="#a3a3a3">Scalable systems, modern SaaS products,</text><text x="80" y="438" font-size="28" fill="#a3a3a3">and AI-powered platforms.</text></g></svg>`
const icon = `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32"><rect width="32" height="32" fill="#0a0a0a"/><text x="16" y="23" text-anchor="middle" font-family="sans-serif" font-size="18" font-weight="700" fill="#f5f5f5">W</text></svg>`
await sharp(Buffer.from(og)).png().toFile(`${publicDir}opengraph-image.png`)
await sharp(Buffer.from(icon)).png().toFile(`${publicDir}icon.png`)
