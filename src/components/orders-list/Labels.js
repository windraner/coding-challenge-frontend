import React from 'react'
import styled from 'styled-components'

export default function Labels () {
  return (
    <StyledWrapper className='row'>
      <div className='col'>
        nr
      </div>
      <div className='col'>
        date
      </div>
      <div className='col'>
        product name
      </div>
      <div className='col volume'>
        order volume
      </div>
    </StyledWrapper>
  )
}

const StyledWrapper = styled.div`
  .col {
    font-weight: 400;
    color: ${({ theme }) => theme.colors.labelText};
    font-family: 'Source Serif Pro', serif;
    line-height: 2.5rem;
    text-transform: uppercase;
  }
`
