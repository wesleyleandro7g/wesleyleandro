import { useTranslations } from 'next-intl'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { usePathname } from '@/i18n/navigation'
import { useParams } from 'next/navigation'

export function LanguageSelector() {
  const t = useTranslations('home')
  const params = useParams()
  const pathname = usePathname()

  const locale = params.locale as 'pt' | 'en' | 'es'

  function changeLocale(newLocale: string) {
    const segments = pathname.split('/').filter(Boolean)

    if (segments.length > 0 && ['en', 'es', 'pt'].includes(segments[0])) {
      segments[0] = newLocale
    } else {
      segments.unshift(newLocale)
    }

    const newPathname = '/' + segments.join('/')
    window.location.href = newPathname
  }

  return (
    <Select defaultValue={locale || 'en'} onValueChange={changeLocale}>
      <SelectTrigger className='w-fit rounded-3xl'>
        <SelectValue placeholder={t('language')} />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value='en'>EN</SelectItem>
        <SelectItem value='es'>ES</SelectItem>
        <SelectItem value='pt'>PT</SelectItem>
      </SelectContent>
    </Select>
  )
}
