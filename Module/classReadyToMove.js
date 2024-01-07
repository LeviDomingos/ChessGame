import { ChessEmoji } from "../classChessEmoji.js";
import { Position } from "../classPiecePosition.js";

class ReadyToMove {
    constructor() {
        this.arraySavePositions =[];
        this.firstSquarePosition = 0;
        this.finalSquarePosistion = 0;
        this.emojiPlaying = new ChessEmoji();
        this.position = new Position();
    }

    fillArray = (squarePosition) => { this.arraySavePositions.push(squarePosition); }

    validateArray() {
        if(this.arraySavePositions.length === 2 && this.arraySavePositions[0] !== this.arraySavePositions[1]) {
            return true;
        }
    }
    
    movePawn(playerPieceColor, player) {
        /**here i check out if the square is empty first of all */
        this.firstSquarePosition = this.arraySavePositions[0];
        this.finalSquarePosistion = this.arraySavePositions[1];
        const squares = document.querySelectorAll("div.squares");
        this.emojiPlaying = new ChessEmoji();

        if(player === false) {
            if(this.firstSquarePosition < this.finalSquarePosistion) {
                const move = this.finalSquarePosistion - this.firstSquarePosition;
                if(move === 8) {
                    if(squares[this.finalSquarePosistion].innerHTML === "") {
                        return true;
                    }
                } else {
                    if(move === 9 | move === 7) {
                        if(this.emojiPlaying.allowToEat(squares[this.finalSquarePosistion].innerHTML.codePointAt(0), playerPieceColor)) {
                            return true;
                        }
                    }
                }
            }
        } else {
            if(this.firstSquarePosition > this.finalSquarePosistion) {
                const move = this.firstSquarePosition - this.finalSquarePosistion;
                if(move === 8) {
                    if(squares[this.finalSquarePosistion].innerHTML === "") {
                        return true;
                    }
                } else {
                    if(move === 9 | move === 7) {
                        if(this.emojiPlaying.allowToEat(squares[this.finalSquarePosistion].innerHTML.codePointAt(0), playerPieceColor)) {
                            return true;
                        }
                    }
                }
            }
        }
    }

    moveKingPiece(playerPieceColor) {
        this.emojiPlaying = new ChessEmoji();
        
        this.firstSquarePosition = this.arraySavePositions[0];
        this.finalSquarePosistion = this.arraySavePositions[1];
        const squares = document.querySelectorAll("div.squares");
        if(this.firstSquarePosition > this.finalSquarePosistion) {
            const move = this.firstSquarePosition - this.finalSquarePosistion;
            if(move === 8 | move === 9 || move === 7 |move=== 1) {
                if(squares[this.finalSquarePosistion].innerHTML === "") {
                    return true;
                } else {
                    if(this.emojiPlaying.allowToEat(squares[this.finalSquarePosistion].innerHTML.codePointAt(0), playerPieceColor)) {
                        return true;
                    }
                }
            }
        } else {
            const move = this.finalSquarePosistion - this.firstSquarePosition;
            if(move === 8 | move === 9 || move === 7 | move === 1) {
                if(squares[this.finalSquarePosistion].innerHTML === "") {
                    return true;
                } else {
                    if(this.emojiPlaying.allowToEat(squares[this.finalSquarePosistion].innerHTML.codePointAt(0), playerPieceColor)) {
                        return true;
                    }
                }
            }
        }
    }

    moveKnightPiece(playerPieceColor) {
        this.emojiPlaying = new ChessEmoji();
        this.firstSquarePosition = this.arraySavePositions[0];
        this.finalSquarePosistion = this.arraySavePositions[1];
        const squares = document.querySelectorAll("div.squares");
        if(this.firstSquarePosition > this.finalSquarePosistion) {
            const move = this.firstSquarePosition - this.finalSquarePosistion;
            if(move === 17 | move === 15 || move === 10 |move=== 6) {
                if(squares[this.finalSquarePosistion].innerHTML === "") {
                    return true;
                } else {
                    if(move === 17 | move === 15 || move === 10 |move=== 6) {
                        if(this.emojiPlaying.allowToEat(squares[this.finalSquarePosistion].innerHTML.codePointAt(0), playerPieceColor)) {
                            return true;
                        }
                    }
                }
            }
        } else {
            const move = this.finalSquarePosistion - this.firstSquarePosition;
            if(move === 17 | move === 15 || move === 10 | move === 6) {
                if(squares[this.finalSquarePosistion].innerHTML === "") {
                    return true;
                } else {
                    if(move === 17 | move === 15 || move === 10 | move === 6)  {
                        if(this.emojiPlaying.allowToEat(squares[this.finalSquarePosistion].innerHTML.codePointAt(0), playerPieceColor)) {
                            return true;
                        }
                    }
                }
            }
        }
    }

    moveRookOrQueenForwardAndBack(playerPieceColor) {

        this.emojiPlaying = new ChessEmoji();
        this.firstSquarePosition = this.arraySavePositions[0];
        this.finalSquarePosistion = this.arraySavePositions[1];
        const squares = document.querySelectorAll("div.squares");
        this.position = new Position();
        this.position.firstRowAndcollumn(this.firstSquarePosition);
        this.position.secondRowAndPosition(this.finalSquarePosistion);

        const move = this.position.moveForwardOrBack();
        if(move.length !== 0 ) {
            if(move.length === 1 ) {
                if(squares[this.finalSquarePosistion].innerHTML === "") {
                    return true;
                } else {
                    if(this.emojiPlaying.allowToEat(squares[this.finalSquarePosistion].innerHTML.codePointAt(0), playerPieceColor)) {
                        return true;
                    }
                }
            } else {
                if(squares[this.finalSquarePosistion].innerHTML === "") {
                    if(this.position.loopDom(squares, move)) {
                        return true;
                    }
                } else {
                    if(this.position.loopDom(squares, move)) {
                        if(this.emojiPlaying.allowToEat(squares[this.finalSquarePosistion].innerHTML.codePointAt(0), playerPieceColor)) {
                            return true;
                        }
                    }
                }
            } 
        }
    }

    moveRookOrQueenLeftAndRight(playerPieceColor) {

        this.emojiPlaying = new ChessEmoji();
        this.firstSquarePosition = this.arraySavePositions[0];
        this.finalSquarePosistion = this.arraySavePositions[1];
        const squares = document.querySelectorAll("div.squares");
        this.position = new Position();
        this.position.firstRowAndcollumn(this.firstSquarePosition);
        this.position.secondRowAndPosition(this.finalSquarePosistion);
        const move = this.position.moveLeftAndRight();

        if(move.length !== 0 ) {
            if(move.length === 1 ) {
                if(squares[this.finalSquarePosistion].innerHTML === "") {
                    return true;
                } else {
                    if(this.emojiPlaying.allowToEat(squares[this.finalSquarePosistion].innerHTML.codePointAt(0), playerPieceColor)) {
                        return true;
                    }
                }
            } else {
                if(squares[this.finalSquarePosistion].innerHTML === "") {
                    if(this.position.loopDom(squares, move)) {
                        return true;
                    }
                } else {
                    if(this.position.loopDom(squares, move)) {
                        if(this.emojiPlaying.allowToEat(squares[this.finalSquarePosistion].innerHTML.codePointAt(0), playerPieceColor)) {
                            return true;
                        }
                    }
                }
            }
        }
    }

    moveBishopAndQueenDiagonally(playerPieceColor) {
        this.emojiPlaying = new ChessEmoji();
        this.firstSquarePosition = this.arraySavePositions[0];
        this.finalSquarePosistion = this.arraySavePositions[1];
        const squares = document.querySelectorAll("div.squares");
        this.position = new Position();
        
        if(this.position.testeIfDiagonallyIsRight(this.firstSquarePosition, this.finalSquarePosistion)) {
            const move = this.position.trackMovement;
            if(squares[this.finalSquarePosistion].innerHTML === "") {
                if(this.position.loopDomDiagonally(squares, move)) {
                    return true;
                }
            } else {
                if(this.position.loopDomDiagonallyEat(squares, move)) {
                    if(this.emojiPlaying.allowToEat(squares[this.finalSquarePosistion].innerHTML.codePointAt(0), playerPieceColor)) {
                        return true;
                    }
                }
            }
        }
        else {
            if(this.position.testeIfDiagonallyIsLeft(this.firstSquarePosition, this.finalSquarePosistion)) {
                const move = this.position.trackMovement;
                if(squares[this.finalSquarePosistion].innerHTML === "") {
                    if(this.position.loopDomDiagonally(squares, move)) {
                        return true;
                    }
                } else {
                    if(this.position.loopDomDiagonallyEat(squares, move)) {
                        if(this.emojiPlaying.allowToEat(squares[this.finalSquarePosistion].innerHTML.codePointAt(0), playerPieceColor)) {
                            return true;
                        }
                    }
                }
            }
        }
    }
}

export { ReadyToMove }
