import { useState } from 'react';
import './App.css';
import Gameboard from './Gameboard';


function App() {
  const [board, setBoard] = useState([[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]])
  const [score, setScore] = useState(0)
  const [gameAlive, setGameAlive] = useState(true)
  for(var i = 3; i>-1; i--) {
  }
  const detectCollision = (direction, placeholderBoard) =>{
    let zeroCount = 0
    for(let i = 0; i< 4; i++) {
      for(let j = 0; j< 4; j++) {
        if (placeholderBoard[i][j] === 0){
          zeroCount++
        }
      
    }}
    if(direction === 37){
      for(let i = 0; i< 4; i++) {
        let last = placeholderBoard[i][0]
        for(let j = 1; j< 4; j++) {
          if (placeholderBoard[i][j] === last) {
            setScore(score + placeholderBoard[i][j-1]*2)
            placeholderBoard[i][j-1] = placeholderBoard[i][j-1]*2
            placeholderBoard[i][j] = 0
            last = null
          } else {
            last = placeholderBoard[i][j]
          }
      }}
    } else if(direction === 39){
      for(let i = 0; i< 4; i++) {
        let last = placeholderBoard[i][3]
        for(let j = 2; j> -1; j--) {
          if (placeholderBoard[i][j] === last) {
            setScore(score + placeholderBoard[i][j+1]*2)
            placeholderBoard[i][j+1] = placeholderBoard[i][j+1]*2
            placeholderBoard[i][j] = 0

            last = null
          } else {
            last = placeholderBoard[i][j]
          }
        
      }}
    } else if(direction === 38){
      placeholderBoard = placeholderBoard[0].map((_, colIndex) => placeholderBoard.map(row => row[colIndex]));
      for(let i = 0; i< 4; i++) {
        let last = placeholderBoard[i][0]
        for(let j = 1; j< 4; j++) {
          if (placeholderBoard[i][j] === last) {
            setScore(score + placeholderBoard[i][j-1]*2)
            placeholderBoard[i][j-1] = placeholderBoard[i][j-1]*2
            placeholderBoard[i][j] = 0
            last = null
          } else {
            last = placeholderBoard[i][j]
          }
        
      }}
      placeholderBoard = placeholderBoard[0].map((_, colIndex) => placeholderBoard.map(row => row[colIndex]));
    } else if(direction === 40){
      placeholderBoard = placeholderBoard[0].map((_, colIndex) => placeholderBoard.map(row => row[colIndex]));
      for(let i = 0; i< 4; i++) {
        let last = placeholderBoard[i][3]
        for(let j = 2; j> -1; j--) {
          if (placeholderBoard[i][j] === last) {
            setScore(score + placeholderBoard[i][j+1]*2)
            placeholderBoard[i][j+1] = placeholderBoard[i][j+1]*2
            placeholderBoard[i][j] = 0
            last = null
          } else {
            last = placeholderBoard[i][j]
          }
        
      }}
      placeholderBoard = placeholderBoard[0].map((_, colIndex) => placeholderBoard.map(row => row[colIndex]));
    }
    return(placeholderBoard)
  }

  const populate = (placeholderBoard, keyCode) => {
    if (keyCode === 37 || keyCode === 38 || keyCode === 39 || keyCode === 40) {
      const getRandomInt = (max) => {
        return Math.floor(Math.random() * max);
      }
      let positions = []
      let zeroCount = 0
      for(let i = 0; i< 4; i++) {
        for(let j = 0; j< 4; j++) {
          if (placeholderBoard[i][j] === 0){
            zeroCount++
            positions.push([i,j])
          }
        
      }}
      if (zeroCount === 16) {
        let position1 = getRandomInt(16)
        let position2 = getRandomInt(16)
        while(position1 === position2){
          position2 = getRandomInt(16)
        }
        let valueChance1 = getRandomInt(10)
        let valueChance2 = getRandomInt(10)
        if(valueChance1 === 1) {
          placeholderBoard[positions[position1][0]][positions[position1][1]] = 4
        } else{
          placeholderBoard[positions[position1][0]][positions[position1][1]] = 2
        }
        if(valueChance2 === 1) {
          placeholderBoard[positions[position2][0]][positions[position2][1]] = 4
        } else{
          placeholderBoard[positions[position2][0]][positions[position2][1]] = 2
        }
      } else {
        let valueChance = getRandomInt(10)
        let choice = getRandomInt(positions.length)
        if(valueChance === 1) {
          placeholderBoard[positions[choice][0]][positions[choice][1]] = 4
        } else{
          placeholderBoard[positions[choice][0]][positions[choice][1]] = 2
        }
        
      }
      return(placeholderBoard)
    }
  }
  
  const shiftBoard = (direction, placeholderBoard) => {
    if (direction === 37) {

      for(let i = 0; i< placeholderBoard.length; i++) {
        let newRow = []
        let zeroArray = []
        for(let j = 0; j< placeholderBoard[i].length; j++) {
          if (placeholderBoard[i][j] !== 0){
            newRow.push(placeholderBoard[i][j])
          } else {
            zeroArray.push(0)
          }
        }
        placeholderBoard[i] = newRow.concat(zeroArray) 
        
      }
    } else if(direction === 39) {
      
      for(let i = 0; i< placeholderBoard.length; i++) {
        let newRow = []
        let zeroArray = []
        for(let j = 0; j< placeholderBoard.length; j++) {
          if (placeholderBoard[i][j] !== 0){
            newRow.push(placeholderBoard[i][j])
          } else {
            zeroArray.push(0)
          }
        }
        placeholderBoard[i] = zeroArray.concat(newRow)
      }
    } else if(direction === 40) {
      let output = placeholderBoard[0].map((_, colIndex) => placeholderBoard.map(row => row[colIndex]));
      for(let i = 0; i< output.length; i++) {
        let newRow = []
        let zeroArray = []
        for(let j = 0; j< output[i].length; j++) {
          if (output[i][j] !== 0){
            newRow.push(output[i][j])
          } else {
            zeroArray.push(0)
          }
        }
        output[i] = zeroArray.concat(newRow) 
      }
      placeholderBoard = output.map((_, colIndex) => output.map(row => row[colIndex]));
    } else if(direction === 38) {
      let output = placeholderBoard[0].map((_, colIndex) => placeholderBoard.map(row => row[colIndex]));
      for(let i = 0; i< output.length; i++) {
        let newRow = []
        let zeroArray = []
        for(let j = 0; j< output[i].length; j++) {
          if (output[i][j] !== 0){
            newRow.push(output[i][j])
          } else {
            zeroArray.push(0)
          }
        }
        output[i] = newRow.concat(zeroArray) 
      }
      placeholderBoard = output.map((_, colIndex) => output.map(row => row[colIndex]));
    }
    return(placeholderBoard)
  }

  const checkAlive = (placeholderBoard) => {
    let zeroCount = 0
    let collisionHappened = false 
    for(let i = 0; i< 4; i++) {
      for(let j = 0; j< 4; j++) {
        if (placeholderBoard[i][j] === 0) {
          zeroCount++
        } 
    }}
    for(let i = 0; i< 4; i++) {
      let last = placeholderBoard[i][0]
      for(let j = 1; j< 4; j++) {
        if (placeholderBoard[i][j] === last && last !== 0) {
          collisionHappened = true
        } 
        last = placeholderBoard[i][j]
    }}
    placeholderBoard = placeholderBoard[0].map((_, colIndex) => placeholderBoard.map(row => row[colIndex]));
    for(let i = 0; i< 4; i++) {
      let last = placeholderBoard[i][0]
      for(let j = 1; j< 4; j++) {
        if (placeholderBoard[i][j] === last && last !== 0) {
          collisionHappened = true
        } 
        last = placeholderBoard[i][j]
    }}
    console.log(collisionHappened)
    console.log(zeroCount)
    if(!collisionHappened && zeroCount === 0){
      setGameAlive(false)
    }

  }

  const move = (e) =>{
    if(e.keyCode === 37 || e.keyCode === 38 || e.keyCode === 39 || e.keyCode === 40){
      let placeholderBoard = board.slice(0)
      placeholderBoard = shiftBoard(e.keyCode, placeholderBoard)
      placeholderBoard = detectCollision(e.keyCode, placeholderBoard)
      placeholderBoard = shiftBoard(e.keyCode, placeholderBoard)
      placeholderBoard = populate(placeholderBoard, e.keyCode)
      checkAlive(placeholderBoard)
      setBoard(placeholderBoard)
    }
    
  }

  const restart = () =>{
    setBoard([[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]])
    setScore(0)
    setGameAlive(true)
  }



  return (
    <div className="App">
      <div>
        <Gameboard move = {move} board={board} restart= {restart} score={score} gameAlive={gameAlive}/>
      </div>
    </div>
  );
}

export default App;
