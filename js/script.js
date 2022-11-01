//variables
    const player1 = 'x'
    const player2 = 'circle'
    const winCombo=[
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ]
  const cellEl = document.querySelectorAll('[data-cell]')
  const boardEl = document.getElementById('board')
  const winEl = document.getElementById('win-msg')
  const restartBtn = document.getElementById('restart')
  const winMsgTxtEl = document.getElementById('win-msg-txt')
  let isPlayer2Turn = false


  //doin things
  startgame()
restartBtn.addEventListener('click', startgame)

function startgame(){
    isPlayer2Turn=false
    
}