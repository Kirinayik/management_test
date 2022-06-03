export interface ICall {
  date: string
  person_avatar: string
  from_number: string
  record: string
  partnership_id: string
  source: string
  errors: string[]
  status: 'Не дозвонился' | 'Дозвонился'
  time: number
  to_number: string
  in_out: string
  id: number
  lastDay: string
}

export interface IMenu {
  icon: string
  is_new: boolean
  submenu?: IMenu[]
  name: string
  url: string
}

export type SearchFilter = {
  in_out: string
  search: string
  'from_type[]': string[]
  'sources[]': string[]
  'errors[]': string[]
  date_start: number
}
