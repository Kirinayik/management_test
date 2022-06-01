import { $api } from '../http'

export const callsNext = async (url: string, offset: number) => {
  try {
    const { data } = await $api.post(`${url}&offset=${offset}`)
    return data
  } catch (e) {
    console.log(e)
  }
}
