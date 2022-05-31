import { configureStore } from '@reduxjs/toolkit'
import callsReducer from './calls/callsState'
import searchReducer from './search/searchState'

export const store = configureStore({
  reducer: {
    calls: callsReducer,
    search: searchReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
