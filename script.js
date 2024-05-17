let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset");
let newGameBtn = document.querySelector("#newGame");

let turnO = true;
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

// Now we create a winning pattern 
let winningPattern = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];
//reset game
const resetGame=()=>{
    turnO=true;
    enableBtn();
    msgContainer.classList.add("hide");
}

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        console.log("clicked");
        if (turnO === true) {
            box.innerText = "O";
            turnO = false;
        } else {
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true;
        // Now we create a function to check the winner 
        checkWinner();
    })
});


//it idableBtn after winner was decided
const disableBtn=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
}
//it enable all the button after the reset game
const enableBtn=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}

let showWinner = (winner) => {
    msg.innerText = `Congrats, Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    //call the disablebtn
    disableBtn();
}

// This checkWinner function checks the winner
let checkWinner = () => {
    for (let pattern of winningPattern) {
        let position1Value = boxes[pattern[0]].innerText;
        let position2Value = boxes[pattern[1]].innerText;
        let position3Value = boxes[pattern[2]].innerText;
        // Check if positions are not empty and equal
        if (position1Value !== "" && position1Value === position2Value && position2Value === position3Value) {
            // Show the winner
            console.log("Winner", position1Value);
            showWinner(position1Value);
            return; // Exit the loop if a winner is found
        }
    }
}
resetBtn.addEventListener("click",resetGame);
newGameBtn.addEventListener("click",resetGame);
