import React from 'react'
import StyledButton from './styled/StyledButton'


function Score({score}) {
  return (
    <StyledButton style={{float: "left", marginLeft: '25px'}}>
      Score:{score}
    </StyledButton>
  )
}

export default Score