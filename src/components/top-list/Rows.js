import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'

import parseCurrency from 'utils/parseCurrency'
import calcTotalOrders from 'utils/calcTotalOrders'
import toCurrency from 'utils/toCurrency'

export default function Rows () {
  const orders = useSelector(state => state.orders)
  const parsedOrders = React.useMemo(() => {
    // sum all volume by products type
    const productsObj = orders.reduce((prev, { product, volume }) => {
      if (!prev[product]) return { ...prev, [product]: parseCurrency(volume) }
      return { ...prev, [product]: prev[product] + parseCurrency(volume) }
    }, {})
    const productsArr = Object.keys(productsObj).map(key => {
      return {
        product: key,
        volume: productsObj[key]
      }
    })
    const topProducts = productsArr
      .sort((a, b) => b.volume - a.volume)
      .slice(0, 5)
    const total = calcTotalOrders(orders)
    return topProducts.map(({ product, volume }, i) => {
      return (
        <StyledWrapper
          key={product}
          width={(volume * 100) / total}
        >
          <div
            className='col'
            titile={product}
          >
            {product}
          </div>
          <div className='col'>
            <div className='line' />
          </div>
          <div className='col volume'>
            {toCurrency(volume)}
          </div>
        </StyledWrapper>
      )
    })
  }, [orders])

  return parsedOrders
}

const StyledWrapper = styled.div`
  display: grid;
  grid-template-columns: 15fr 30fr 10fr;
  grid-row-gap: 1rem;
  margin-top: 1rem;
  .col {
    display: flex;
    align-items: center;
    font-size: 2rem;
    font-weight: 500;
    color: ${({ theme }) => theme.colors.tableText};
    font-family: 'Montserrat', sans-serif;
    line-height: 2.5rem;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    .line {
      width: ${({ width }) => width}%;
      height: 1.8rem;
      background: ${({ theme }) => theme.colors.slider};
    }
  }
  .col.volume {
    font-weight: 700;
    text-align: right;
  }
`
