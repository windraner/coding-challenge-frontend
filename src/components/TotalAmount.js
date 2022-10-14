import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'

import calcTotalOrders from 'utils/calcTotalOrders'
import toCurrency from 'utils/toCurrency'

export default function TotalAmount () {
  const total = useSelector(state => {
    const value = calcTotalOrders(state.orders)
    return toCurrency(value)
  })
  return (
    <StyledWrapper>
      {total}
    </StyledWrapper>
  )
}

const StyledWrapper = styled.div`
  margin: 4rem 3.5rem;
  font-size: 19.2rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.mainText};
  font-family: 'Roboto', sans-serif;
`
