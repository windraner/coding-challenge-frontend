import { render, screen } from '@testing-library/react'

import TestProviders from 'components/TestProviders'
import TotalAmount from 'components/TotalAmount'

const preloadedState = {
  orders: [
    {id: '94', date: '01.10.2022', product: 'Smartwatch', volume: '600€'},
    {id: '95', date: '01.10.2022', product: 'Branded shirt', volume: '5€'},
    {id: '96', date: '01.10.2022', product: 'Something very Nice', volume: '6.000€'}
  ]
}

test('TotalAmount', () => {
  render(
    <TestProviders preloadedState={preloadedState}>
      <TotalAmount />
    </TestProviders>
  )
  const element = screen.getByText('6.605,00 €')
  expect(element).toBeInTheDocument()
})

