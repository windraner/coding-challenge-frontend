import React from 'react'
import styled from 'styled-components'

import Labels from './Labels'
import Rows from './Rows'

export default function TopList () {
  return (
    <StyledWrapper>
      <Labels />
      <div className='separator' />
      <Rows />
    </StyledWrapper>
  )
}

const StyledWrapper = styled.div`
  width: 55%;
  padding: 2.5rem 3.5rem;
  background: #26262c;
  .separator {
    width: 100%;
    height: 2px;
    margin: 0.5rem 0 2rem;
    background: ${({ theme }) => theme.colors.subText};
  }
`
