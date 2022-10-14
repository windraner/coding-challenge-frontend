import React from 'react'
import { useSelector } from 'react-redux'
import format from 'date-fns/format'
import styled from 'styled-components'

import parseCurrency from 'utils/parseCurrency'
import calcTotalOrders from 'utils/calcTotalOrders'
import toCurrency from 'utils/toCurrency'

const targetPosition = 90

export default function Slider () {
  const currentTarget = useSelector(({ selectedDate, targets }) => {
    const { target } = targets.find(({ month }) => month === format(selectedDate, 'MM')) || {}
    if (!target) return null
    return parseCurrency(target)
  })
  const total = useSelector(state => {
    return calcTotalOrders(state.orders)
  })
  const width = React.useMemo(() => {
    if (targetPosition === null) return 0
    if (!total) return 0
    const result = ((total * targetPosition) / (currentTarget))
    if (result > 100) return 100
    return result
  }, [currentTarget, total])
  return (
    <StyledWrapper width={width}>
      <div className='line' />
      {currentTarget && (
        <div className='target'>
          <div className='target-label'>
            {toCurrency(currentTarget)}
          </div>
        </div>
      )}
    </StyledWrapper>
  )
}

const StyledWrapper = styled.div`
  position: relative;
  height: 4.8rem;
  margin: 0 3.5rem;
  background: #2f2f2f;
  .line {
    height: 100%;
    width: ${({ width }) => width}%;
    background: ${({ theme }) => theme.colors.slider};
    transition: width 0.4s;
  }
  .target {
    position: absolute;
    left: ${targetPosition}%;
    top: 50%;
    width: 0.6rem;
    height: 8rem;
    background: ${({ theme }) => theme.colors.subText};
    transform: translate(-50%, -50%);
    .target-label {
      position: absolute;
      left: 50%;
      bottom: 100%;
      font-size: 2.2rem;
      font-weight: 400;
      font-family: 'Roboto', sans-serif;
      white-space: nowrap;
      color: ${({ theme }) => theme.colors.mainText};
      transform: translate(-50%, -50%);
    }
  }
`
