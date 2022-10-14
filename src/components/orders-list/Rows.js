import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'

export default function Rows () {
  const orders = useSelector(state => state.orders)
  return orders
    .slice(-5)
    .reverse()
    .map(({ id, date, product, volume }) => {
      return (
        <StyledWrapper
          key={id}
          className='row'
        >
          <div className='col'>
            {id}
          </div>
          <div className='col'>
            {date}
          </div>
          <div
            className='col'
            title={product}
          >
            {product}
          </div>
          <div
            className='col volume'
            title={volume}
          >
            {volume}
          </div>
        </StyledWrapper>
      )
    })
}

const StyledWrapper = styled.div`
  margin-top: 1rem;
  .col {
    font-weight: 500;
    color: ${({ theme }) => theme.colors.tableText};
    font-family: 'Montserrat', sans-serif;
    line-height: 2.5rem;
  }
  .col.volume {
    font-weight: 700;
  }
`
