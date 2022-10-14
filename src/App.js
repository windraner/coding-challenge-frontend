import React from 'react'
import styled from 'styled-components'

import mainBg from 'assets/main-bg.png'

import { fetchTargets } from 'requests/targets'

import Title from 'components/Title'
import RefreshCounter from 'components/RefreshCounter'
import MonthlyFilter from 'components/monthly-filter'
import TotalAmount from 'components/TotalAmount'
import Slider from 'components/Slider'
import OrdersList from 'components/orders-list'
import TopList from 'components/top-list'

export default function App () {
  React.useEffect(() => {
    fetchTargets()
  }, [])
  return (
    <StyledWrapper>
      <div>
        <div className='header-wrapper'>
          <Title />
          <RefreshCounter />
        </div>
        <MonthlyFilter />
      </div>

      <TotalAmount />

      <div>
        <Slider />
        <div className='tables-wrapper'>
          <OrdersList />
          <TopList />
        </div>
      </div>
    </StyledWrapper>
  )
}

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  max-width: 1920px;
  margin: 0 auto 3.5rem;
  padding-top: 4rem;
  background: url(${mainBg}) right top no-repeat;
  background-size: 73rem 96rem;
  .header-wrapper {
    display: flex;
    justify-content: space-between;
    margin: 0 3.5rem;
  }
  .tables-wrapper {
    display: flex;
    gap: 1.5rem;
    margin-top: 6rem;
  }
`
