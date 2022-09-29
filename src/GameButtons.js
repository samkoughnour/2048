import React from 'react'
import StyledButton from './styled/StyledButton'

const GameButtons = (props) => {
  return (
    <StyledButton onClick={props.function}>
      {props.text}
    </StyledButton>
  )
}

export default GameButtons