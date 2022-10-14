import parseCurrency from './parseCurrency'

export default function calcTotalOrders (orders) {
  return orders.reduce((prev, { volume }) => {
    return prev + parseCurrency(volume)
  }, 0)
}
