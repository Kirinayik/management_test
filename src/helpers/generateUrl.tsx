import { getDefaultDate } from './getDefaultDate'

export const generateUrl = (filters: {
  [x: string]: any
  in_out: string
  search: string
  'from_type[]': string
  'sources[]': string
  'errors[]': string
  date_start: number
}) => {
  const defaultUrl = 'mango/getList?'
  const concatUrl: string[] = []
  const dateStart = new Date(
    new Date().getTime() - filters.date_start * 24 * 3600 * 1000
  )
    .toISOString()
    .split('T')[0]
  const { dateEnd } = getDefaultDate()
  concatUrl.push('date_start=' + dateStart + '&date_end=' + dateEnd)

  for (const key in filters) {
    if (filters[key] && key !== 'date_start') {
      concatUrl.push(`${key}=${filters[key]}`)
    }
  }

  return defaultUrl + concatUrl.join('&') + '&limit=25'
}
