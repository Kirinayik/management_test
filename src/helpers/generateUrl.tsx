import { getDefaultDate } from './getDefaultDate'

export const generateUrl = (filters: any) => {
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
    if (Array.isArray(filters[key])) {
      if (filters[key].length > 0) {
        concatUrl.push(`${key}=${filters[key].join(`&${key}=`)}`)
      }
    } else {
      if (key !== 'date_start' && filters[key]) {
        concatUrl.push(`${key}=${filters[key]}`)
      }
    }
  }

  return defaultUrl + concatUrl.join('&') + '&limit=25'
}
