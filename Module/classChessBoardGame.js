 import { Pieces } from "../Module/classPieces.js";

class ChessBoardGame {
    constructor() {
        this.blackPieces = new Pieces().createPieceDetails.blackPieceCode;
        this.whitePieces = new Pieces().createPieceDetails.whitePieceCode;
        this.increment = 0;
        this.saveColorBackground = this.saveColorBackground;
    }

    squareColor(color) {
        return [
            [color, "b", color, "b", color, "b", color, "b"],
            ["b", color, "b", color, "b", color, "b", color],
            [color, "b", color, "b", color, "b", color, "b"],
            ["b", color, "b", color, "b", color, "b", color],
            [color, "b", color, "b", color, "b", color, "b"],
            ["b", color, "b", color, "b", color, "b", color],
            [color, "b", color, "b", color, "b", color, "b"],
            ["b", color, "b", color, "b", color, "b", color]
        ]
    };

    loadWhiteOrBlackPieces(selectPieceToPlayWith) {
        if(selectPieceToPlayWith === "white") {
            return [
                [this.blackPieces[2], this.blackPieces[1], this.blackPieces[3], this.blackPieces[5],
                this.blackPieces[4],  this.blackPieces[3], this.blackPieces[1], this.blackPieces[2]],
                [this.blackPieces[0], this.blackPieces[0],   this.blackPieces[0],   this.blackPieces[0], 
                this.blackPieces[0],  this.blackPieces[0],   this.blackPieces[0],   this.blackPieces[0]],
                ["", "", "", "", "", "", "", ""],
                ["", "", "", "", "", "", "", ""],
                ["", "", "", "", "", "", "", ""],
                ["", "", "", "", "", "", "", ""],
                [this.whitePieces[0], this.whitePieces[0], this.whitePieces[0], this.whitePieces[0],
                this.whitePieces[0], this.whitePieces[0], this.whitePieces[0], this.whitePieces[0]],
                [this.whitePieces[2], this.whitePieces[1], this.whitePieces[3], this.whitePieces[5],
                this.whitePieces[4], this.whitePieces[3], this.whitePieces[1], this.whitePieces[2]]
            ];
        }
        else {
            return [
                [this.whitePieces[2], this.whitePieces[1], this.whitePieces[3], this.whitePieces[5],
                this.whitePieces[4], this.whitePieces[3], this.whitePieces[1], this.whitePieces[2]],
                [this.whitePieces[0], this.whitePieces[0], this.whitePieces[0], this.whitePieces[0],
                this.whitePieces[0], this.whitePieces[0], this.whitePieces[0], this.whitePieces[0] ],
                ["", "", "", "", "", "", "", ""],
                ["", "", "", "", "", "", "", ""],
                ["", "", "", "", "", "", "", ""],
                ["", "", "", "", "", "", "", ""],
                [this.blackPieces[0], this.blackPieces[0], this.blackPieces[0], this.blackPieces[0],
                this.blackPieces[0], this.blackPieces[0], this.blackPieces[0], this.blackPieces[0]],
                [this.blackPieces[2], this.blackPieces[1], this.blackPieces[3], this.blackPieces[5],
                this.blackPieces[4], this.blackPieces[3], this.blackPieces[1], this.blackPieces[2]]
            ];
        }
    }

    buildBoard(id, className, row, col) {
        this.increment = 0;
        for(let x = 0; x < row; x++) {
            for(let i = 0; i < col; i++) {
                const element = document.createElement("div");
                element.setAttribute("cell-index", this.squareIndex());
                element.classList.add(className);
                document.getElementById(id).append(element);
            }
        }
    }

    findIfThereIsClass(id, className) {
        const child = document.getElementById(id);
        if(child.className === "") {
            child.classList.add(className);
            return true;
        }
    }

    loadPiecesTotheBoard(element, colorToPlayWith, number) {
        this.increment = 0;
        for(let x = 0; x < 8; x++) {
            for(let i = 0; i < 8; i++) {
                number = this.squareIndex();
                element[number].innerHTML = this.loadWhiteOrBlackPieces(colorToPlayWith)[x][i];
                element[number].style.fontSize ="50px";
            }
        }
    }

    colorSquareBoard(element, color, number) {
        this.increment = 0;
        for(let x = 0; x < this.squareColor(color).length; x++) {
            for(let i = 0; i < this.squareColor(color).length; i++) {
                element[number++].style.backgroundColor = this.squareColor(color)[x][i];
            }
        }
    }

    squareIndex = () => this.increment++;
}

export { ChessBoardGame }