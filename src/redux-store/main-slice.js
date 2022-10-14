import { createSlice } from '@reduxjs/toolkit'
import addMonths from 'date-fns/addMonths'

const mainSlice = createSlice({
  name: 'main',
  initialState: {
    selectedDate: +(new Date()),
    targets: [],
    orders: []
  },
  reducers: {
    prevMonth: state => {
      state.selectedDate = +addMonths(state.selectedDate, -1)
    },
    nextMonth: state => {
      state.selectedDate = +addMonths(state.selectedDate, 1)
    },
    setTargets: (state, { payload }) => {
      state.targets = payload
    },
    setOrders: (state, { payload }) => {
      state.orders = payload
    }
  }
})

export const { prevMonth, nextMonth, setTargets, setOrders } = mainSlice.actions

export default mainSlice.reducer;
