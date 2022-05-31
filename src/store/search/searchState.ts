import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { getDefaultDate } from '../../helpers/getDefaultDate'

interface ISearchState {
  filters: {
    in_out: string
    search: string
    'from_type[]': string
    'sources[]': string
    'errors[]': string
    date_start: number
  }
  url: string
  offset: number
}

const initialState: ISearchState = {
  filters: {
    in_out: '',
    search: '',
    'from_type[]': '',
    'sources[]': '',
    'errors[]': '',
    date_start: 1,
  },
  url: 'mango/getList?',
  offset: 25,
}

export const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setDayStart: (state, action: PayloadAction<number>) => {
      state.filters.date_start = action.payload
    },
    generateUrl: (state) => {
      const defaultUrl = 'mango/getList?'
      const concatUrl: string[] = []
      const dateStart = new Date(
        new Date().getTime() - state.filters.date_start * 24 * 3600 * 1000
      )
        .toISOString()
        .split('T')[0]
      const { dateEnd } = getDefaultDate()
      concatUrl.push('date_start=' + dateStart + '&date_end=' + dateEnd)

      for (const key in state.filters) {
        // @ts-ignore
        if (state.filters[key] && key !== 'date_start') {
          // @ts-ignore
          concatUrl.push(`${key}=${state.filters[key]}`)
        }
      }

      state.url = defaultUrl + concatUrl.join('&') + '&limit=25'
      state.offset = 25
    },
    setFilterSelect: (
      state,
      action: PayloadAction<{ type: string; value: string }>
    ) => {
      const { type, value } = action.payload
      // @ts-ignore
      state.filters[type] = value
    },
    setSearchInput: (state, action: PayloadAction<string>) => {
      state.filters.search = action.payload
    },
    setOffset: (state) => {
      state.offset += 25
    },
  },
})

export const {
  setDayStart,
  generateUrl,
  setFilterSelect,
  setSearchInput,
  setOffset,
} = searchSlice.actions
export default searchSlice.reducer
