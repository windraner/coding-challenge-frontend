import parse from 'date-fns/parse'
import format from 'date-fns/format'

import store from 'redux-store'
import { setTargets } from 'redux-store/main-slice'

import request from 'utils/request'

export function fetchTargets () {
  const params = {
    valueRenderOption: 'FORMATTED_VALUE',
    ranges: 'Targets',
    majorDimension: 'ROWS',
  }
  return request({
    url: '/values:batchGet',
    params,
  })
    .then(({ data }) => {
      const values = data?.valueRanges[0]?.values
      values.shift()
      const parsedValues = values.map(([month, target]) => {
        const currentDate = parse(month, 'MMMM', new Date())
        return {
          month: format(currentDate, 'MM'),
          target
        }
      })
      store.dispatch(setTargets(parsedValues))
    })
    .catch(err => console.log(err))
}
