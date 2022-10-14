import React from 'react'
import { useSelector } from 'react-redux'
import format from 'date-fns/format'
import styled from 'styled-components'

export default function DataLabel () {
  const selectedDate = useSelector(state => state.selectedDate)
  return (
    <StyledWrapper>
      {format(new Date(selectedDate), 'MMMM yyyy')}
    </StyledWrapper>
  )
}

const StyledWrapper = styled.div`
  min-width: 28rem;
  font-size: 3rem;
  font-weight: 700;
  font-family: 'Montserrat', sans-serif;
  color: ${({ theme }) => theme.colors.mainText};
`
