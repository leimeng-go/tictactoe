import { useState } from "react"

export default function Board() {
  const [xIsNext,setXIsNext]= useState(true);
  const [squares,setSquares]=useState(Array(9).fill(null));
  function handleClick(i){
    if (squares[i]){
      return;
    }
    const nextSquares=squares.slice();
    // 判断输入格子的内容
    if (xIsNext){
      nextSquares[i]="X"
    }else{
      nextSquares[i]="O"
    }
    setSquares(nextSquares);
    // 翻转内容
    setXIsNext(!xIsNext);
  }
  return (
    <>
    <div className="board-row">
      <Square value={squares[0]} onSquareClick={()=>handleClick(0)}/>
      <Square value={squares[1]} onSquareClick={()=>handleClick(1)}/>
      <Square value={squares[2]} onSquareClick={()=>handleClick(2)}/>
    </div>
    <div className="board-row">
      <Square value={squares[3]} onSquareClick={()=>handleClick(3)}/>
      <Square value={squares[4]} onSquareClick={()=>handleClick(4)}/>
      <Square value={squares[5]} onSquareClick={()=>handleClick(5)}/>
    </div>
    <div className="board-row">
      <Square value={squares[6]} onSquareClick={()=>handleClick(6)}/>
      <Square value={squares[7]} onSquareClick={()=>handleClick(7)}/>
      <Square value={squares[8]} onSquareClick={()=>handleClick(8)}/>
    </div>
  </>
  )

}

function Square({value,onSquareClick}){
  // const [value,setValue]= useState(null);
  //  function handleClick(){
    //  setValue("X")
  // }
   return <button className="square" onClick={onSquareClick}>
       {value}
   </button>
}

//胜者
function calculateWinner(squares){
   const lines=[
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
   ];
   for (let i=0;i<lines.length;i++){
    
   }
}

// 定义了一个名为square的函数，JavaScript的export 关键字使此函数可以在文件之外访问。default 关键字表示它是文件中的主要函数