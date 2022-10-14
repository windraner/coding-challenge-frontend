import React from 'react'
import styled from 'styled-components'

import Labels from './Labels'
import Rows from './Rows'

export default function OrdersList () {
  return (
    <StyledWrapper>
      <Labels />
      <div className='separator' />
      <Rows />
    </StyledWrapper>
  )
}

const StyledWrapper = styled.div`
  width: 45%;
  min-height: 28rem;
  padding: 2.5rem 3.5rem;
  background: #26262c;
  .row {
    display: grid;
    grid-template-columns: 10fr 20fr 25fr 25fr;
    grid-row-gap: 1rem;
    .col {
      font-size: 2rem;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
    }
    .col.volume {
      text-align: right;
    }
  }
  .separator {
    width: 100%;
    height: 2px;
    margin: 0.5rem 0 2rem;
    background: ${({ theme }) => theme.colors.subText};
  }
`
