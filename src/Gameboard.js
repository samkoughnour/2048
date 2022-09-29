import React from 'react'
import Cell from './Cell'
import StyledWrapper from './styled/StyledWrapper'
import GameButtons from './GameButtons'
import Score from './Score'



function Gameboard({board, move, restart, score, gameAlive}) {
  return (
    <StyledWrapper
    role="button"
    tabIndex="0"
    onKeyDown={e => move(e)}>
      {!gameAlive ? <h1>You Lost!</h1> : <h1>Nourfourtyeight</h1>}
      <Score score={score} />
      <GameButtons function={restart} text={"Restart"}/>  
      <table style={{margin: "auto"}}>
        <thead>
          <tr>
            {board[0].map((item,index) => {
              return <th key={index}><Cell value={item}/></th>
            })}
          </tr>
          <tr>
            {board[1].map((item,index) => {
              return <th key={index*2}><Cell value={item}/></th>
            })}
          </tr>
          <tr>
            {board[2].map((item,index) => {
              return <th key={index*3}><Cell value={item}/></th>
            })}
          </tr>
          <tr>
            {board[3].map((item,index) => {
              return <th key={index*4}><Cell value={item}/></th>
            })}
          </tr>
        </thead>
      </table>
      <p>Press any arrowkey to start</p>
    </StyledWrapper>
  )
}

export default Gameboard