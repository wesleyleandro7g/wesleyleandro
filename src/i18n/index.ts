import en from './messages/en.json'
import es from './messages/es.json'
import pt from './messages/pt.json'

export const locales = ['en', 'es', 'pt'] as const
export type Locale = (typeof locales)[number]
const messages = { en, es, pt }

export function translate(locale: Locale, namespace = '') {
  function raw(key: string): unknown {
    const path = namespace ? `${namespace}.${key}` : key
    let value: unknown = messages[locale]
    for (const segment of path.split('.')) {
      value = value && typeof value === 'object' ? (value as Record<string, unknown>)[segment] : undefined
    }
    if (value === undefined) throw new Error(`Missing translation: ${locale}.${path}`)
    return value
  }
  return Object.assign((key: string): string => {
    const value = raw(key)
    if (typeof value !== 'string') throw new Error(`Expected text: ${locale}.${key}`)
    return value
  }, { raw })
}

export function localePath(locale: Locale, path = '') {
  return `/${locale}${path === '/' ? '' : path}`
}

// Escape text first; only the existing translation emphasis tag becomes markup.
export function richIntro(text: string) {
  return text.replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;')
    .replaceAll('&lt;important&gt;', '<strong class="text-foreground">')
    .replaceAll('&lt;/important&gt;', '</strong>')
}
