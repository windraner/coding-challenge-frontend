import { render, screen } from '@testing-library/react'

import TestProviders from 'components/TestProviders'
import Title from 'components/Title'

test('TotalAmount', () => {
  render(
    <TestProviders>
      <Title />
    </TestProviders>
  )
  const element = screen.getByText('Order Dashboard')
  expect(element).toBeInTheDocument()
})

