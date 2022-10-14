import React from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'

import { prevMonth, nextMonth } from 'redux-store/main-slice'

import OrdersLoader from './OrdersLoader'
import DataLabel from './DataLabel'
import Handler from './Handler'

export default function MonthlyFilter () {
  const dispatch = useDispatch()

  const selectPrevMonth = React.useCallback(() => {
    dispatch(prevMonth())
  }, [dispatch])

  const selectNextMonth = React.useCallback(() => {
    dispatch(nextMonth())
  }, [dispatch])

  return (
    <>
      <OrdersLoader />
      <StyledWrapper>
        <DataLabel />
        <div className='handlers-wrapper'>
          <Handler clickHandler={selectPrevMonth} />
          <Handler
            direction='right'
            clickHandler={selectNextMonth}
          />
        </div>
      </StyledWrapper>
    </>
  )
}

const StyledWrapper = styled.div`
  display: flex;
  align-items: center;
  margin: 0 3.5rem;
  .handlers-wrapper {
    display: flex;
    gap: 1rem;
    margin-left: 3.5rem;
  }
`
