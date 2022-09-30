import React from 'react'
import Cell from './Cell'
import StyledWrapper from './styled/StyledWrapper'



function Gameboard({board, move}) {
  return (
    <StyledWrapper
    role="button"
    tabIndex="0"
    onKeyDown={e => move(e)}>
      <table style={{margin: "auto"}}>
        <thead>
          {board.map((item, index) =>{
            return(<tr key={index}>
              {item.map((cell,index2) =>{
                return(<th key={index+1*index2+1}><Cell value={cell}/></th>)
              })}
            </tr>)
          })}
        </thead>
      </table>
      <p>Press any arrowkey to start</p>
      <p>Click 'Start New Game' after changing dimensions</p>
    </StyledWrapper>
  )
}

export default Gameboard