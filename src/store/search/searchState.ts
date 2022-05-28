import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  callTypes: 0,
  workers: '',
  calls: '',
  sources: '',
  ratings: '',
  errors: '',
}

export const searchSlice = createSlice({
  name: '',
  initialState,
  reducers: {},
})

// export const {  } = searchSlice.actions;
export default searchSlice.reducer
