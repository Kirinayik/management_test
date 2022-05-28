import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface ICallState {
  list: any[]
  currentCall: number
  total: number
}

const initialState: ICallState = {
  list: [],
  currentCall: 0,
  total: 0,
}

export const callsSlice = createSlice({
  name: 'calls',
  initialState,
  reducers: {
    setList: (
      state,
      action: PayloadAction<{ results: any[]; total_rows: number }>
    ) => {
      state.list = action.payload.results
      state.total = action.payload.total_rows
    },
    setCurrentCall: (state, action: PayloadAction<number>) => {
      state.currentCall = action.payload
    },
  },
})

export const { setList, setCurrentCall } = callsSlice.actions
export default callsSlice.reducer
