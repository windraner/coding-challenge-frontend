import React from 'react'
import styled from 'styled-components'

import { fetchOrders } from 'requests/orders'

export default function RefreshCounter () {
  const intervalRef = React.useRef()
  const [countDown, setCountDown] = React.useState(60)

	React.useEffect(() => {
		intervalRef.current = setInterval(() => setCountDown(current => current - 1), 1000);
    return () => clearInterval(intervalRef.current);
	}, [])

	React.useEffect(() => {
		if (countDown <= 0) {
      setCountDown(60)
      fetchOrders()
    }
	}, [countDown])

  return (
    <StyledWrapper>
      Refresh in <span className='count'>{countDown}</span>
    </StyledWrapper>
  )
}

const StyledWrapper = styled.div`
  font-size: 2rem;
  font-weight: 400;
  font-family: 'Montserrat', sans-serif;
  color: ${({ theme }) => theme.colors.subText};
  line-height: 2.6rem;
  .count {
    font-weight: 700;
    color: ${({ theme }) => theme.colors.mainText};
  }
`
