import styled, { css } from 'styled-components'

export const StyledSpinnerContainer = styled.div`
  display: none;
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background: rgba(255, 255, 255, .75);
  z-index: 1000;
  justify-content: center;
  overflow: hidden;
  align-items: center;
  ${props => props.show && css`
    display: flex;
  `}
`

export const StyledSpinner = styled.div`
  position: relative;
  top: 15%;
`
