import { $api } from '../http'
import { getDefaultDate } from './getDefaultDate'

export const callsNext = async (url: string, offset: number) => {
  const { dateStart, dateEnd } = getDefaultDate()
  try {
    const { data } = await $api.post(
      url === 'mango/getList?'
        ? `mango/getList?date_start=${dateStart}&date_end=${dateEnd}&limit=25&offset=${offset}`
        : `${url}&offset=${offset}`
    )
    return data
  } catch (e) {
    console.log(e)
  }
}
