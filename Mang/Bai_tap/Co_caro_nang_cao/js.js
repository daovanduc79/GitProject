const ROW = 20;
const COLUMN = 40;
let turn = 1;
let arr = [];
let isGameOver = false;

function caroTable() {
    let result = "";
    for (let i = 1; i <= ROW; i++) {
        arr[i] = [];
        result += "<tr>";
        for (let j = 1; j <= COLUMN; j++) {
            arr[i][j] = "*";
            result += `<td id="cell-${i}${j}" onclick="clickCell(this,${i},${j})"></td>`;
        }
        result += "</tr>";
    }
    document.getElementById("showCaroTable").innerHTML = result;
}

function clickCell(cell, x, y) {
    if (cell.innerHTML === "") {
        if (turn === 1) {
            cell.innerHTML = 'X';
            checkWin(cell, x, y);
            turn = 2;
        } else {
            cell.innerHTML = "O";
            checkWin(cell, x, y);
            turn = 1;
        }
    } else
        alert("Wait your turn");
}

function checkWin(cell, x, y) {
    checkRow(cell, x, y);
    checkColumn(cell, x, y);
    checkCrossRight(cell, x, y);
    checkCrossLeft(cell, x, y);

    if (isGameOver)
        setTimeout(function () {
            alert("You win");
        }, 500);

}

function checkRow(cell, x, y) {
    let count = 1;
    let i = 1;
    while (cell.innerHTML === getCell(x, y + i)) {
        count++;
        i++;
    }
    while (cell.innerHTML === getCell(x, y - i)) {
        count++;
        i++;
    }
    console.log(count);
    gameOver(count);
}

function checkColumn(cell, x, y) {
    let count = 1;
    let i = 1;
    while (cell.innerHTML === getCell(x + i, y)) {
        count++;
        i++;
    }
    while (cell.innerHTML === getCell(x - i, y)) {
        count++;
        i++;
    }
    console.log(count);
    gameOver(count);
}

function checkCrossRight(cell, x, y) {
    let count = 1;
    let i = 1;
    while (cell.innerHTML === getCell(x + i, y + i)) {
        count++;
        i++;
    }
    while (cell.innerHTML === getCell(x - i, y - i)) {
        count++;
        i++;
    }
    console.log(count);
    gameOver(count);
}

function checkCrossLeft(cell, x, y) {
    let count = 1;
    let i = 1;
    while (cell.innerHTML === getCell(x + i, y - i)) {
        count++;
        i++;
    }
    while (cell.innerHTML === getCell(x - i, y + i)) {
        count++;
        i++;
    }
    console.log(count);
    gameOver(count);
}

function getCell(x, y) {
    return document.getElementById("cell-" + x + y).innerHTML;
}

function gameOver(count) {
    if (count >= 5)
        isGameOver = true;
    return isGameOver;
}