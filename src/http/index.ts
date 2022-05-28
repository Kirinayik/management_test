import axios from 'axios'

const baseURL = 'https://api.skilla.ru/'

export const $api = axios.create({
  baseURL,
  headers: {
    Authorization: 'Bearer testtoken',
  },
})
