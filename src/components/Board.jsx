import React from 'react'
import Square from "./Square.jsx";
import {useState} from "react";
import calculateWinner from '../utils/calculateWinner.js';
import '../App.css';

const Board=()=> {

   const [squares,setSquares]=useState(Array(9).fill(null))
   const[isX,setX]=useState(true);
   let status;

   const winner=calculateWinner(squares);

   if(winner==='X'){
      status=`Winner is : ${'X'}`;
   }else if(winner==='O'){
      status=`Winner is : ${'O'}`;
   }else if(!squares.includes(null)){
      status="Draw";
   }else{
       status=`Now :${isX ? 'X': 'O'}`;
   }
   

   const handleClick=(indx)=>{

    if(winner){
      return;
    }

    const tempSquare=[...squares];
    if(isX===true){
       tempSquare[indx]='X';
       setX(false);
    }else{
      tempSquare[indx]='O';
      setX(true);
    }
    setSquares(tempSquare);

   }

   const handleReset=()=>{
    setSquares(Array(9).fill(null));
    setX(true);
   }

  return (
    <>
   

    <h1 className='header'>Tik Tak Toe</h1>
    
    <div className="board">
      <div>
        {status}
      </div>

    <div>
      <Square value={squares[0]} onSquareClick={()=>handleClick(0)}/>
      <Square value={squares[1]} onSquareClick={()=>handleClick(1)}/>
      <Square value={squares[2]} onSquareClick={()=>handleClick(2)}/>
    </div>

      <div>
      <Square value={squares[3]} onSquareClick={()=>handleClick(3)}/>
      <Square value={squares[4]} onSquareClick={()=>handleClick(4)}/>
      <Square value={squares[5]} onSquareClick={()=>handleClick(5)}/>
    </div>

      <div>
      <Square value={squares[6]} onSquareClick={()=>handleClick(6)}/>
      <Square value={squares[7]} onSquareClick={()=>handleClick(7)}/>
      <Square value={squares[8]} onSquareClick={()=>handleClick(8)}/>
    </div>
    </div>

    <div className='resetBtn'>
      <button onClick={handleReset}>
        Reset
      </button>
    </div>
     </>
  )
}

export default Board;
