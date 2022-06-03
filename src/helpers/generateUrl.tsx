import { getDefaultDate } from './getDefaultDate'

export const generateUrl = (filters: any) => {
  const defaultUrl = 'mango/getList?'
  const concatUrl: string[] = []
  const { dateEnd } = getDefaultDate()
  concatUrl.push('date_start=' + filters.date_start + '&date_end=' + dateEnd)

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
