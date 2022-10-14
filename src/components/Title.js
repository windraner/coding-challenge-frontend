import React from 'react'
import styled from 'styled-components'

export default function Title () {
  return (
    <StyledWrapper>
      Order Dashboard
    </StyledWrapper>
  )
}

const StyledWrapper = styled.div`
  font-size: 2rem;
  font-weight: 400;
  font-family: 'Source Serif Pro', serif;
  line-height: 2.6rem;
  color: ${({ theme }) => theme.colors.subText};
`
