import React from 'react'
import "../App.css";

const Square=({value, onSquareClick})=>{

  return (
    <button onClick={onSquareClick} className="squares">
      {value}
    </button>
  )
}

export default Square;
