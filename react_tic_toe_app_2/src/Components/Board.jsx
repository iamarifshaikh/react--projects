import React from 'react'
import { Box } from './Box.jsx';
import "./Board.css";
export const Board = ({board,onClick}) => {
  return (
      <div className='board'>
          {board.map((value, idx) => {
           return <Box value={value} onClick={() => onClick(idx)} />
          })}
      </div>
  )
}
