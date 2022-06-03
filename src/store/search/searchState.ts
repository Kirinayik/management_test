import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { SearchFilter } from '../../types/types'
import { getDefaultDate } from '../../helpers/getDefaultDate'

interface ISearchState {
  filters: SearchFilter
  offset: number
}

const initialState: ISearchState = {
  filters: {
    in_out: '',
    search: '',
    'from_type[]': [],
    'sources[]': [],
    'errors[]': [],
    date_start: getDefaultDate().dateStart,
  },
  offset: 25,
}

export const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setDayStart: (state, action: PayloadAction<string>) => {
      state.filters.date_start = action.payload
    },
    setFilterSelect: (
      state,
      action: PayloadAction<{ type: string; value: string | string[] }>
    ) => {
      const { type, value } = action.payload
      // @ts-ignore
      state.filters[type] = value
    },
    setSearchInput: (state, action: PayloadAction<string>) => {
      state.filters.search = action.payload
    },
    setOffset: (state, action: PayloadAction<number>) => {
      state.offset += action.payload
    },
  },
})

export const {
  setDayStart,
  setFilterSelect,
  setSearchInput,
  setOffset,
} = searchSlice.actions
export default searchSlice.reducer
