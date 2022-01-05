const board = []
const boardSize = 19

for (let x = 0; x < boardSize; x++){
    board.push([])
    for (let y = 0; y < boardSize; y++){
        const cell = document.createElement("DIV")
        cell.className = "GameCell"
        cell.addEventListener("click", () => placeStone(x,y))
        board[x].push(cell)
    }
}

function createBoard(){
    for (let column of board){
        const element = document.createElement("DIV")
        element.className = "GameColumn"

        for (let cell of column){
            element.appendChild(cell)
        }
        log(document.getElementById("GameBoard"))
        document.getElementById("GameBoard").appendChild(element)
    }
    board[9][9].style.opacity = "80%"
    board[14][9].style.opacity = "80%"
    board[14][14].style.opacity = "80%"
    board[14][4].style.opacity = "80%"
    board[9][4].style.opacity = "80%"
    board[9][14].style.opacity = "80%"
    board[4][9].style.opacity = "80%"
    board[4][14].style.opacity = "80%"
    board[4][4].style.opacity = "80%"
}
createBoard()

function log(text){
    console.log(text)
}

let blackTurn = false
const whiteColour = "ghostwhite"
const blackColour = "black"
let wonBoard = false
function placeStone(x,y){
    if (board[x][y].style.backgroundColor === whiteColour || board[x][y].style.backgroundColor === blackColour){
        return
    }

    board[x][y].style.backgroundColor = blackTurn ? blackColour: whiteColour
    board[x][y].style.opacity = "100%";
    if (!wonBoard && checkWin(x,y)){
        document.getElementById("Message").innerHTML = blackTurn? "Black Winn!": "White Winn!"
        board[x][y].style.backgroundColor = "gold"
        wonBoard = true
    }else{
        document.getElementById("Message").innerHTML = !blackTurn? "It's Black's turn.": "It's White's turn."
        document.getElementById("Message").style.color = !blackTurn? blackColour: whiteColour
    }
    blackTurn = !blackTurn
}

function checkWin(origX,origY){
    log(origX + " : " + origY)
    let hor = 1
    let vert = 1
    let diagRight = 1
    let diagLeft = 1
    let x = 0
    let y = 0


    const playerColor = blackTurn? blackColour: whiteColour

    x = origX + 1
    y = origY
    let cellColor = board[x][y].style.backgroundColor
    while(playerColor === cellColor){
        hor++
        log(x + " " + y + " " + board[x][y].style.backgroundColor)
        cellColor = board[++x][y].style.backgroundColor
    }

    x = origX - 1
    y = origY
    cellColor = board[x][y].style.backgroundColor
    while(playerColor === cellColor){
        hor++
        cellColor = board[--x][y].style.backgroundColor
    }

    x = origX
    y = origY + 1
    cellColor = board[x][y].style.backgroundColor
    while(playerColor === cellColor){
        vert++
        cellColor = board[x][++y].style.backgroundColor
    }

    x = origX
    y = origY - 1
    cellColor = board[x][y].style.backgroundColor
    while(playerColor === cellColor){
        vert++
        cellColor = board[x][--y].style.backgroundColor
    }

    x = origX + 1
    y = origY + 1
    cellColor = board[x][y].style.backgroundColor
    while(playerColor === cellColor){
        diagRight++
        cellColor = board[++x][++y].style.backgroundColor
    }

    x = origX - 1
    y = origY - 1
    cellColor = board[x][y].style.backgroundColor
    while(playerColor === cellColor){
        diagRight++
        cellColor = board[--x][--y].style.backgroundColor
    }

    x = origX + 1
    y = origY - 1
    cellColor = board[x][y].style.backgroundColor
    while(playerColor === cellColor){
        diagLeft++
        cellColor = board[++x][--y].style.backgroundColor
    }

    x = origX - 1
    y = origY + 1
    cellColor = board[x][y].style.backgroundColor
    while(playerColor === cellColor){
        diagLeft++
        cellColor = board[--x][++y].style.backgroundColor
    }

    if (diagLeft >= 5 || diagRight >= 5 || hor >= 5 || vert >= 5){
        return true
    }

    return false
}

function resetBoard(){
    wonBoard = false
    for (let element of document.getElementsByClassName("GameCell")){
        element.removeAttribute("style")
        document.getElementById("Message").innerHTML = "White start!"
    }

}