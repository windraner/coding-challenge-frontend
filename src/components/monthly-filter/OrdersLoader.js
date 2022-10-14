import React from 'react'
import { useSelector } from 'react-redux'

import { fetchOrders } from 'requests/orders'

export default React.memo(function OrdersLoader () {
  const selectedDate = useSelector(state => state.selectedDate)
  React.useEffect(() => {
    fetchOrders()
  }, [selectedDate])
  return null
})
