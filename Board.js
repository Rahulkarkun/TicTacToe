const Cell = require("./Cell");

class Board {
    constructor() {
        this.cells = [
            new Cell(), new Cell(), new Cell(),
            new Cell(), new Cell(), new Cell(),
            new Cell(), new Cell(), new Cell(),
        ];
    }

    

    isCellMarked(cellNumber) {
        // console.log("Checking cell number:", cellNumber);
        // console.log("Is cell empty?", this.cells[cellNumber].isEmpty());
        return !this.cells[cellNumber].isEmpty();
      }

    getCellObj(cellNumber) {
        return this.cells[cellNumber];
    }
    analyseResult() {
        const winningCombinations = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];
        
        for (let i = 0; i < winningCombinations.length; i++) 
        {
            const [a, b, c] = winningCombinations[i];
            if (
              this.cells[a].mark === this.cells[b].mark &&
              this.cells[b].mark === this.cells[c].mark &&
              !this.cells[a].isEmpty()
            ) 
            {
              return { winnerSymbol: this.cells[a].mark, gameStatus: "Winner" };
            }
        }
        
        return { winnerSymbol: "", gameStatus: "" };

    }

    isGameDraw() {
        for (let i = 0; i <= 8; i++) {
            if (this.cells[i].isEmpty()) {
                return false;
            }
        }
        return true;
    }

    showBoard() {
        console.log(this.cells);
    }
}

module.exports = Board;