import {
  createEntityAdapter,
  createSlice,
  PayloadAction,
} from '@reduxjs/toolkit'
import { ICall } from '../../types/types'

interface ICallState {
  total: number
  currentCall: number
}

const callsAdapter = createEntityAdapter<ICall>({
  selectId: (call) => call.id,
})

const initialState: ICallState = callsAdapter.getInitialState({
  total: 0,
  currentCall: 0,
})

export const callsSlice = createSlice({
  name: 'calls',
  initialState,
  reducers: {
    setList: (
      state,
      action: PayloadAction<{ results: ICall[]; total_rows: number }>
    ) => {
      const { results, total_rows } = action.payload

      if (results.length > 0) {
        let borderDay = results[0].date.split(' ')[0].slice(-1)

        for (let i = 0; i < results.length; i++) {
          const callDay = results[i].date.split(' ')[0].slice(-1)
          if (borderDay !== callDay) {
            borderDay = callDay
            results[i].lastDay = results[i].date.split(' ')[0]
          }
        }
      }

      // @ts-ignore
      callsAdapter.setAll(state, results)
      state.total = +total_rows
    },
    setCurrentCall: (state, action: PayloadAction<number>) => {
      state.currentCall = action.payload
    },
    updateList: (state, action: PayloadAction<ICall[]>) => {
      // @ts-ignore
      callsAdapter.addMany(state, action.payload)
    },
  },
})

export const callsSelectors = callsAdapter.getSelectors(
  // @ts-ignore
  (state) => state.calls
)
export const { setList, setCurrentCall, updateList } = callsSlice.actions
export default callsSlice.reducer
