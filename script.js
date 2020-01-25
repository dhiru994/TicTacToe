const X_CLASS='x';
const CIRCLE_CLASS='circle';
let circleTrun;
const board= document.getElementById('board');
const WINNING_COMBINATIONS = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
]

const cellElements=document.querySelectorAll('[data-cell]');
// takin all the emelents and putting them into query selector to cell cellElement
// when we are playing game we only have to listen
// to click once not multiple times so we give below once:true in our event lister
startGame();
function startGame(){
  cellElements.forEach(cell => {
    cell.addEventListener('click',handleClick,{once:true});
  })
  setBoardHoverClass();
}
function handleClick(e){
  const cell=e.target;
  const currentClass= circleTrun? CIRCLE_CLASS:X_CLASS;
  placeMark(cell,currentClass);
//placemark
//check for win
swapTurns();
setBoardHoverClass()
}
function placeMark(cell,currentClass){
  cell.classList.add(currentClass);

}
function swapTurns(){
  circleTrun=!circleTrun;
}

function setBoardHoverClass(){
  board.classList.remove(X_CLASS);
  board.classList.remove(CIRCLE_CLASS);
  if(circleTrun){
    board.classList.add(CIRCLE_CLASS);
  }else{
board.classList.add(X_CLASS);
  }

}
