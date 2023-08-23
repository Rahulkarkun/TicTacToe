const Board = require("./Board");
const Player = require("./Player");

class Game {
    constructor(board, players) {
        this.board = board;
        this.players = players;
        this.turn = 0;
        this.isGameEnded = false;
    }

    static newGame(player0Name, player1Name) {
        if (player0Name === player1Name || typeof player0Name !== "string" || typeof player1Name !== "string") {
            return [null, [null, null]];
        }

        let currentBoardGame = new Board();
        let player0 = new Player("X", player0Name);
        let player1 = new Player("O", player1Name);
        return new Game(currentBoardGame, [player0, player1]);
    }

    play(cellNumber) {
        // if (this.isGameEnded) {
        //     return "Game has ended";
        // }
        // if (cellNumber > 8 || cellNumber < 0) {
        //     return "Invalid Cell Number";
        // }
        // if (!this.board.isCellMarked(cellNumber)) {
        //     return "Cell is not Empty";
        // }
        if (this.isGameEnded) 
        {
            return { result: "Game has ended" };
        }
        if (cellNumber > 8 || cellNumber < 0) 
        {
            return { result: "Invalid Cell Number" };
        }
        if (this.board.isCellMarked(cellNumber)) 
        {
            return { result: "Cell is not Empty" };
        }

        // let currentPlayer = this.players[this.turn % 2];

        // let cellObj = this.board.getCellObj(cellNumber);
        // cellObj.markCell(currentPlayer.symbol);
        // this.turn++;

        let result = {};
        let currentPlayer = this.players[this.turn % 2];
        let cellObj = this.board.getCellObj(cellNumber);
        cellObj.markCell(currentPlayer.symbol);
        this.turn++;

        if (this.board.isGameDraw()) 
        {
            this.isGameEnded = true;
            result = { result: "It's a draw" };
        } 
        else 
        {
            result = this.board.analyseResult();
        }

        //let result = this.board.analyseResult();
        // if (result.gameStatus === "") {
        //     return "Continue Playing";
        // }

        // if (result.winnerSymbol === this.players[0].symbol) {
        //     this.isGameEnded = true;
        //     return this.players[0].name + " Is Winner";
        // }

        // if (result.winnerSymbol === this.players[1].symbol) {
        //     this.isGameEnded = true;
        //     return this.players[1].name + " Is Winner";
        // }

        // if (this.board.isGameDraw()) {
        //     this.isGameEnded = true;
        //     return "It's a draw";
        // }

        if (result.gameStatus === "") 
        {
            return { result: "Continue Playing" };
          }
          
          if (result.winnerSymbol === this.players[0].symbol) {
            this.isGameEnded = true;
            return { result: "Winner", winner: this.players[0].name };
          }
          
          if (result.winnerSymbol === this.players[1].symbol) {
            this.isGameEnded = true;
            return { result: "Winner", winner: this.players[1].name };
          }
    }
}

module.exports = Game;
