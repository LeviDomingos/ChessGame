
import { ShowEatenPieceOnSideBoard } from "../Module/classShowEatenPieceOnSideBoard.js";
import { ReadyToMove } from "../Module/classReadyToMove.js";
import { ChessEmoji } from "../Module/classChessEmoji.js";
import { Players } from "../Module/classPlayers.js";
import { ChessBoardGame } from "../Module/classChessBoardGame.js";
import { Pieces } from "../Module/classPieces.js";
import { Position } from "../Module/classPiecePosition.js";

const startPlaying = new ReadyToMove();
const emoji = new ChessEmoji();
const player = new Players();
const chessBoard = new ChessBoardGame();
const elementEatenPieces = new ShowEatenPieceOnSideBoard(); 
const info = document.querySelector("h4");
const pieces = new Pieces();
const pos = new Position();
window.onload = () => {

    buildChessBoard();
    /**document.querySelector("button").addEventListener("click", buildChessBoard);**/
    /**document.querySelector(".load-pieces").addEventListener("click", loadUpPieces);**/
    document.getElementById("whitePiece").addEventListener("click", getPieceSelectedByPlayer, false);
    document.getElementById("blackPiece").addEventListener("click", getPieceSelectedByPlayer, false);

    function buildChessBoard() {

        if(chessBoard.findIfThereIsClass("game", "chess-board") && chessBoard.findIfThereIsClass("firstPiece", "chessForLostPieces") &&
            chessBoard.findIfThereIsClass("secondPiece", "chessForLostPieces")) {
            chessBoard.buildBoard("game", "squares", 8, 8);
            const squares = document.querySelectorAll("div.squares");
            chessBoard.colorSquareBoard(squares, "white", 0);
            document.querySelectorAll(".squares").forEach(cell => cell.addEventListener("click", displayInfo));
        }
    }

    function timeToPlay(cellIndex, cellValue) {
        const squares = document.querySelectorAll("div.squares");

        if(startPlaying.arraySavePositions.length === 0) {
            startPlaying.fillArray(cellIndex);
            chessBoard.saveColorBackground = cellValue.style.backgroundColor;
            squares[cellIndex].style.backgroundColor = "yellow";
            emoji.getEmojiSelected(cellValue.innerHTML.codePointAt(0));
        }
        else {
            startPlaying.fillArray(cellIndex);
            //pos.moveDiagonally(startPlaying.arraySavePositions[0], startPlaying.arraySavePositions[1]);
            if(player.playerPieces(emoji.pieceEmoji[0], player.playerPieceColor)) {
                if(emoji.pieceEmoji[0] === emoji.piecePlaying.createPieceDetails.blackEmoji[0] | emoji.pieceEmoji[0] === emoji.piecePlaying.createPieceDetails.whiteEmoji[0]) {
                    if(startPlaying.movePawn(player.playerPieceColor, player.playerB)) {
                        squares[startPlaying.arraySavePositions[0]].innerHTML = "";
                        squares[startPlaying.arraySavePositions[0]].style.backgroundColor = chessBoard.saveColorBackground;
                        squares[startPlaying.arraySavePositions[1]].innerHTML = emoji.returnPiecePlaying(emoji.pieceEmoji[0]);
                        player.playerPieceColor = player.switchPlayersTurn(player.playerPieceColor);
                        info.innerText = player.playerPieceColor + " Pieces' turn";
                        player.playerB = player.playerBFalseOrTrue(player.playerB);
                        emoji.pieceEmoji = [];
                        startPlaying.arraySavePositions = [];
                    }
                    else {
                        squares[startPlaying.arraySavePositions[0]].style.backgroundColor = chessBoard.saveColorBackground;
                        startPlaying.arraySavePositions = [];
                        emoji.pieceEmoji = [];
                        info.innerText = player.playerPieceColor + " Wrong move";
                    }
                }  
                if(emoji.pieceEmoji[0] === emoji.piecePlaying.createPieceDetails.blackEmoji[1] | emoji.pieceEmoji[0] === emoji.piecePlaying.createPieceDetails.whiteEmoji[1]) {
                    if(startPlaying.moveKnightPiece(player.playerPieceColor)) {
                        squares[startPlaying.arraySavePositions[0]].innerHTML = "";
                        squares[startPlaying.arraySavePositions[0]].style.backgroundColor = chessBoard.saveColorBackground;
                        squares[startPlaying.arraySavePositions[1]].innerHTML = emoji.returnPiecePlaying(emoji.pieceEmoji[0]);
                        player.playerPieceColor = player.switchPlayersTurn(player.playerPieceColor);
                        info.innerText = player.playerPieceColor + " Pieces' turn";
                        player.playerB = player.playerBFalseOrTrue(player.playerB);
                        startPlaying.arraySavePositions = [];
                        emoji.pieceEmoji = [];
                    } else {
                        squares[startPlaying.arraySavePositions[0]].style.backgroundColor = chessBoard.saveColorBackground;
                        startPlaying.arraySavePositions = [];
                        emoji.pieceEmoji = [];
                        info.innerText = player.playerPieceColor + " Wrong move";
                    }
                }

                if(emoji.pieceEmoji[0] === emoji.piecePlaying.createPieceDetails.blackEmoji[4] | emoji.pieceEmoji[0] === emoji.piecePlaying.createPieceDetails.whiteEmoji[4]) {
                    if(startPlaying.moveKingPiece(player.playerPieceColor)) {
                        squares[startPlaying.arraySavePositions[0]].innerHTML = "";
                        squares[startPlaying.arraySavePositions[0]].style.backgroundColor = chessBoard.saveColorBackground;
                        squares[startPlaying.arraySavePositions[1]].innerHTML = emoji.returnPiecePlaying(emoji.pieceEmoji[0]);
                        player.playerPieceColor = player.switchPlayersTurn(player.playerPieceColor);
                        info.innerText = player.playerPieceColor + " Pieces' turn";
                        player.playerB = player.playerBFalseOrTrue(player.playerB);
                        startPlaying.arraySavePositions = [];
                        emoji.pieceEmoji = [];
                    } else {
                        squares[startPlaying.arraySavePositions[0]].style.backgroundColor = chessBoard.saveColorBackground;
                        startPlaying.arraySavePositions = [];
                        emoji.pieceEmoji = [];
                        info.innerText = player.playerPieceColor + " Wrong move";
                    }
                }

                if(emoji.pieceEmoji[0] === emoji.piecePlaying.createPieceDetails.blackEmoji[2] | emoji.pieceEmoji[0] === emoji.piecePlaying.createPieceDetails.whiteEmoji[2]) {
                    if(startPlaying.moveRookOrQueenForwardAndBack(player.playerPieceColor)) {
                        squares[startPlaying.arraySavePositions[0]].innerHTML = "";
                        squares[startPlaying.arraySavePositions[0]].style.backgroundColor = chessBoard.saveColorBackground;
                        squares[startPlaying.arraySavePositions[1]].innerHTML = emoji.returnPiecePlaying(emoji.pieceEmoji[0]);
                        player.playerPieceColor = player.switchPlayersTurn(player.playerPieceColor);
                        info.innerText = player.playerPieceColor + " Pieces' turn";
                        player.playerB = player.playerBFalseOrTrue(player.playerB);
                        startPlaying.arraySavePositions = [];
                        emoji.pieceEmoji = [];
                    } else {
                        if(startPlaying.moveRookOrQueenLeftAndRight(player.playerPieceColor)) {
                            squares[startPlaying.arraySavePositions[0]].innerHTML = "";
                            squares[startPlaying.arraySavePositions[0]].style.backgroundColor = chessBoard.saveColorBackground;
                            squares[startPlaying.arraySavePositions[1]].innerHTML = emoji.returnPiecePlaying(emoji.pieceEmoji[0]);
                            player.playerPieceColor = player.switchPlayersTurn(player.playerPieceColor);
                            info.innerText = player.playerPieceColor + " Pieces' turn";
                            player.playerB = player.playerBFalseOrTrue(player.playerB);
                            startPlaying.arraySavePositions = [];
                            emoji.pieceEmoji =[];
                        } else {
                            squares[startPlaying.arraySavePositions[0]].style.backgroundColor = chessBoard.saveColorBackground;
                            startPlaying.arraySavePositions = [];
                            emoji.pieceEmoji = [];
                            info.innerText = player.playerPieceColor + " Wrong move";
                        }
                    }
                }

                if(emoji.pieceEmoji[0] === emoji.piecePlaying.createPieceDetails.blackEmoji[5] | emoji.pieceEmoji[0] === emoji.piecePlaying.createPieceDetails.whiteEmoji[5]) {
                    if(startPlaying.moveRookOrQueenForwardAndBack(player.playerPieceColor)) {
                        squares[startPlaying.arraySavePositions[0]].style.backgroundColor = chessBoard.saveColorBackground;
                        squares[startPlaying.arraySavePositions[0]].innerHTML = "";
                        squares[startPlaying.arraySavePositions[1]].innerHTML = emoji.returnPiecePlaying(emoji.pieceEmoji[0]);
                        player.playerPieceColor = player.switchPlayersTurn(player.playerPieceColor);
                        info.innerText = player.playerPieceColor + " Pieces' turn";
                        player.playerB = player.playerBFalseOrTrue(player.playerB);
                        startPlaying.arraySavePositions = [];
                        emoji.pieceEmoji =[];
                    } else {
                        if(startPlaying.moveRookOrQueenLeftAndRight(player.playerPieceColor)) {
                            squares[startPlaying.arraySavePositions[0]].innerHTML = "";
                            squares[startPlaying.arraySavePositions[0]].style.backgroundColor = chessBoard.saveColorBackground;
                            squares[startPlaying.arraySavePositions[1]].innerHTML = emoji.returnPiecePlaying(emoji.pieceEmoji[0]);
                            player.playerPieceColor = player.switchPlayersTurn(player.playerPieceColor);
                            info.innerText = player.playerPieceColor + " Pieces' turn";
                            player.playerB = player.playerBFalseOrTrue(player.playerB);
                            startPlaying.arraySavePositions = [];
                            emoji.pieceEmoji = [];
                        } else {
                            if(startPlaying.moveBishopAndQueenDiagonally(player.playerPieceColor)) {
                                squares[startPlaying.arraySavePositions[0]].innerHTML = "";
                                squares[startPlaying.arraySavePositions[0]].style.backgroundColor = chessBoard.saveColorBackground;
                                squares[startPlaying.arraySavePositions[1]].innerHTML = emoji.returnPiecePlaying(emoji.pieceEmoji[0]);
                                player.playerPieceColor = player.switchPlayersTurn(player.playerPieceColor);
                                info.innerText = player.playerPieceColor + " Pieces' turn";
                                player.playerB = player.playerBFalseOrTrue(player.playerB);
                                startPlaying.arraySavePositions = [];
                                emoji.pieceEmoji = [];
                            } else {
                                squares[startPlaying.arraySavePositions[0]].style.backgroundColor = chessBoard.saveColorBackground;
                                startPlaying.arraySavePositions = [];
                                emoji.pieceEmoji = []; 
                                info.innerText = player.playerPieceColor + " Wrong move";
                            }
                        }
                    }
                }

                if(emoji.pieceEmoji[0] === emoji.piecePlaying.createPieceDetails.blackEmoji[3] | emoji.pieceEmoji[0] === emoji.piecePlaying.createPieceDetails.whiteEmoji[3]) {
                    if(startPlaying.moveBishopAndQueenDiagonally(player.playerPieceColor)) {
                        squares[startPlaying.arraySavePositions[0]].innerHTML = "";
                        squares[startPlaying.arraySavePositions[0]].style.backgroundColor = chessBoard.saveColorBackground;
                        squares[startPlaying.arraySavePositions[1]].innerHTML = emoji.returnPiecePlaying(emoji.pieceEmoji[0]);
                        player.playerPieceColor = player.switchPlayersTurn(player.playerPieceColor);
                        info.innerText = player.playerPieceColor + " Pieces' turn";
                        player.playerB = player.playerBFalseOrTrue(player.playerB);
                        startPlaying.arraySavePositions = [];
                        emoji.pieceEmoji = [];
                    } else {
                        squares[startPlaying.arraySavePositions[0]].style.backgroundColor = chessBoard.saveColorBackground;
                        startPlaying.arraySavePositions = [];
                        emoji.pieceEmoji = [];
                        info.innerText = player.playerPieceColor + " Wrong move";
                    }
                } 
            } else { 
                squares[startPlaying.arraySavePositions[0]].style.backgroundColor = chessBoard.saveColorBackground;
                startPlaying.arraySavePositions = [];
                emoji.pieceEmoji = [];
            }
        }
    }

    function displayInfo(event) {
        const cellValue = event.target;
        const cellIndex =  parseInt(cellValue.getAttribute("cell-index"));
        timeToPlay(cellIndex, cellValue); 
    }  


    function getPieceSelectedByPlayer(event) {
    
        if(this.id === "whitePiece") {
            loadUpPieces("white");
        }
        if(this.id === "blackPiece") {
            loadUpPieces("black");
        }
    }

    function loadUpPieces(piece) {
        player.playerPieceColor  = player.getPieceToPlayWith(piece);
        const squares = document.querySelectorAll("div.squares");  
        chessBoard.loadPiecesTotheBoard(squares, player.playerPieceColor, 0); 
        displayEatenPiecesTitle(player.playerPieceColor);
        info.innerText = player.playerPieceColor + " Pieces Play First";
        //build.buildNavegationBar("menu");

    }

    function displayEatenPiecesTitle() {
    
        if(player.playerPieceColor === "black" ) {
            player.playerB = false;
            elementEatenPieces.removechildeNode("firstPiece");
            elementEatenPieces.removechildeNode("secondPiece");
            chessBoard.buildBoard("firstPiece", "squaresForBlackPieces", 3, 6);
            chessBoard.buildBoard("secondPiece", "squaresForWhitePieces", 3, 6);
            player.playerPieceColor = "white";
        } else {
            player.playerB = true;
            elementEatenPieces.removechildeNode("firstPiece");
            elementEatenPieces.removechildeNode("secondPiece");
            chessBoard.buildBoard("firstPiece", "squaresForWhitePieces", 3, 6);
            chessBoard.buildBoard("secondPiece", "squaresForBlackPieces", 3, 6);
        }
    }
}