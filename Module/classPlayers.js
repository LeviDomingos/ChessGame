import { Pieces } from "../classPieces.js";

class Players {

    constructor() {
        this.point = new Pieces();
        this.sum = 0;
        this.playerB = this.playerB;
        this.playerPieceColor = this.playerPieceColor;
    }
    /**this function get the value of the chess eaten */
    getPiecePointOrValue = (index) => this.sum = this.point.createPieceDetails["pieceValue"][index];
    
    getPieceToPlayWith = (WhatPieceColor) => WhatPieceColor; /**function that gets the color of the peiece that the player chose to play with */
    
    addUp = (a , b) =>  a+ + +b; /**add up the values of the pieces eaten */
    
    addPlayersPoints() { /**show the sum on dom */
        document.getElementById("points").innerText = this.addUp(this.sum, document.getElementById("points").innerHTML);
    }

    playerBFalseOrTrue(switchBoolean) {
        if(switchBoolean === true) {
            return this.playerB = false;
        }
        if(switchBoolean === false) {
            return this.playerB = true;
        }
    }

    playerPieces(name, playerPieceColor) {
        if(playerPieceColor ==="black" && this.point.getBlackPieceName(name)) {
            return true;
        }
        if(playerPieceColor === "white" && this.point.getWhitePieceName(name)) {
            return true;
        }
    }

    switchPlayersTurn(switchPlayer) {
        if(switchPlayer === "black") { return switchPlayer = "white"; }
        if(switchPlayer === "white") {return  switchPlayer = "black"; return }
    }
}
export  { Players }
