import React from 'react'
import styled from 'styled-components'

export default function Labels () {
  return (
    <StyledWrapper>
      Top 5 products
    </StyledWrapper>
  )
}

const StyledWrapper = styled.div`
  font-size: 2rem;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.labelText};
  font-family: 'Source Serif Pro', serif;
  line-height: 2.5rem;
  text-transform: uppercase;
`
