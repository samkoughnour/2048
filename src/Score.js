import React from 'react'
import StyledButton from './styled/StyledButton'


function Score({score}) {
  return (
    <StyledButton style={{marginLeft: '25px'}}>
      Score:{score}
    </StyledButton>
  )
}

export default Score