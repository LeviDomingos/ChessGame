import { Pieces } from "../Module/classPieces.js";
import { Players } from "../Module/classPlayers.js";

class ChessEmoji {
    /** I use this class to compare emoji to make sure */
    constructor() {
        this.pieceEmoji = [];
        this.piecePlaying = new Pieces();
        this.player = new Players();
    }

    getEmptySpaceEatenPiece(element) {
        for(let x = 0; x < element.length; x++) {
            if(element[x].innerHTML === "") { return x; }
        }
    }

    allowToEat(name, playerPieceColor) {
        const firstSquares = document.querySelectorAll("div.squaresForBlackPieces");
        const secondSquares = document.querySelectorAll("div.squaresForWhitePieces");

        if(playerPieceColor === "white" && this.piecePlaying.getBlackPieceName(name)) {
            firstSquares[this.getEmptySpaceEatenPiece(firstSquares)].innerHTML = this.piecePlaying.displayMovingPiece(name);
            secondSquares[this.getEmptySpaceEatenPiece(firstSquares)].style.fontSize ="50px";
            this.player.getPiecePointOrValue(this.piecePlaying.getPiecePoint(name)); 
            /** this.player.addPlayersPoints();*/
            return true;
        }

        if(playerPieceColor === "black" && this.piecePlaying.getWhitePieceName(name)) {
            secondSquares[this.getEmptySpaceEatenPiece(secondSquares)].innerHTML = this.piecePlaying.displayMovingPiece(name);
            secondSquares[this.getEmptySpaceEatenPiece(secondSquares)].style.fontSize ="50px";
            this.player.getPiecePointOrValue(this.piecePlaying.getPiecePoint(name));
            /**this.player.addPlayersPoints();*/
            return true;
        }
    }

    returnPiecePlaying = (name) => this.piecePlaying.displayMovingPiece(name);

    getEmojiSelected = (emoji) => { this.pieceEmoji.push(emoji); }
}

export { ChessEmoji }