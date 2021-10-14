import { parseISO, format } from 'date-fns'
import { ru } from 'date-fns/locale'

export default function Date({ dateString }) {
  const date = parseISO(dateString)
  return <time className="text-gray-500 text-base" dateTime={dateString}>{format(date, 'd LLL, yyyy', {locale: ru})}</time>
}
