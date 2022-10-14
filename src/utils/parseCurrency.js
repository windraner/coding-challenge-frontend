export default function parseCurrency (currency) {
  let value = currency.split('.').join('')
  value = value.split(',').join('.')
  return Number(value.replace(/[^0-9.]/g, ''))
}
