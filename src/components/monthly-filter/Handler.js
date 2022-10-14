import React from 'react'
import styled, { css } from 'styled-components'

export default function Handler ({
  className = '', direction = 'left', clickHandler
}) {
  return (
    <StyledWrapper
      className={className}
      direction={direction}
      onClick={clickHandler}
    >
      <div className='arrow' />
    </StyledWrapper>
  )
}

const StyledWrapper = styled.div.attrs(({ direction }) => {
  const arrowConfig = {
    'left': css`
      transform: rotate(-45deg);
      margin-left: 0.5rem;
    `,
    'right': css`
      transform: rotate(135deg);
      margin-right: 0.5rem;
    `
  }
  return { arrowProp: arrowConfig[direction] }
})`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 5.4rem;
  height: 5.4rem;
  border: solid 1px #26262c;
  border-radius: 0.5rem;
  background: #26262c;
  transition: all 0.2s;
  cursor: pointer;
  :hover {
    border-color: ${({ theme }) => theme.colors.subText};
  }
  :active {
    border-color: ${({ theme }) => theme.colors.slider};
    .arrow {
      border-color: ${({ theme }) => theme.colors.slider};
    }
  }
  .arrow {
    width: 1.3rem;
    height: 1.3rem;
    border-top: solid 2px ${({ theme }) => theme.colors.subText};
    border-left: solid 2px ${({ theme }) => theme.colors.subText};
    ${({ arrowProp }) => arrowProp};
    transition: all 0.2s;
  }
`
