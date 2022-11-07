/*-----------constants----------*/
// const superCombo = [
//     [0,1,2],
//     [3,4,5],
//     [6,7,8],
//     [0,3,6],
//     [1,4,7],
//     [2,5,8],
//     [0,4,8],
//     [2,4,6]
// ]

const board = document.getElementsByClassName("square");

/*----- event listeners -----*/
document.addEventListener("click", handleClick);
let squareClick = 0;
/*----- functions -----*/
//reset

//handle click
function handleClick(event) {
  if (event.target.classList.contains("square")) {
    squareClick++;
    // if (squareClick > 9){
    //     initialize()
    // } else
    if (squareClick % 2) {
      event.target.innerHTML = "O";
    } else {
      event.target.innerHTML = "X";
    }
  } else if (event.target.classList.contains("fa-solid")) {
    const boardArr = [...board];
    boardArr.forEach((square) => (square.innerHTML = ""));
    //  console.log('I should work')
  }
  console.log();
}
