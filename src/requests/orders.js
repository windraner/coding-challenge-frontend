import parse from 'date-fns/parse'
import startOfMonth from 'date-fns/startOfMonth'
import endOfMonth from 'date-fns/endOfMonth'

import store from 'redux-store'
import { setOrders } from 'redux-store/main-slice'

import request from 'utils/request'

export function fetchOrders () {
  const params = {
    valueRenderOption: 'FORMATTED_VALUE',
    ranges: 'Orders',
    majorDimension: 'ROWS',
  }
  return request({
    url: '/values:batchGet',
    params,
  })
    .then(({ data }) => {
      const values = data?.valueRanges[0]?.values
      values.shift()
      const parsedValues = values
        .map(([id, date, product, volume]) => ({ id, date, product, volume }))
        .filter(({ date }) => {
          const currentDate = +(parse(date, 'dd.MM.yyyy', new Date()))
          const selectedDate = store.getState().selectedDate
          const startDate = +startOfMonth(new Date(selectedDate))
          const endDate = +endOfMonth(new Date(selectedDate))
          if (currentDate >= startDate && currentDate <= endDate) return true
          return false
        })
      store.dispatch(setOrders(parsedValues))
    })
    .catch(err => console.log(err))
}
