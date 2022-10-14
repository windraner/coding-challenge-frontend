import { render, screen, act } from '@testing-library/react'

import TestProviders from 'components/TestProviders'
import RefreshCounter from 'components/RefreshCounter'

test('RefreshCounter', async () => {
  jest.useFakeTimers()
  render(
    <TestProviders>
      <RefreshCounter />
    </TestProviders>
  )
  expect(screen.getByText('60')).toBeInTheDocument()
  act(() => {
    jest.advanceTimersByTime(1000);
  })
  expect(screen.getByText('59')).toBeInTheDocument()
})

