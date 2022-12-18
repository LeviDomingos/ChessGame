
/** How the Chess Pieces Move
The King moves from its square to a neighboring square,
the Rook can move in its line or row,
the Bishop moves diagonally,
the Queen may move like a Rook or a Bishop,
the Knight jumps in making the shortest move that is not a straight one, and.
the Pawn moves one square straight ahead.
*/ 

/**The king is the most important chess piece. 
Remember, the goal of a game of chess is to checkmate the king! 
When a game starts, each side has one king. 
White's king is located on e1, while Black's king starts on e8.
*/
class Pieces {
    constructor(pawn, knight, rook, bishop, king, queen) {
        this.pawn = pawn;
        this.knight = knight;
        this.rook = rook;
        this.bishop = bishop;
        this.king = king;
        this.queen = queen;

        this.createPieceDetails = {
            "blackEmoji": [9823, 9822, 9820, 9821, 9819, 9818],
            "blackPieceCode": ["&#9823;", "&#9822;", "&#9820;", "&#9821;", "&#9819;", "&#9818;"],
            "whiteEmoji": [9817, 9816, 9814, 9815, 9813, 9812],
            "whitePieceCode": ["&#9817;", "&#9816;", "&#9814;", "&#9815;", "&#9813;", "&#9812;"],
            "pieceValue":  [10, 30, 50, 30, 90, 100],
            "blackAndWhiteCode": [9823, 9822, 9820, 9821, 9819, 9818, 9817, 9816, 9814, 9815, 9813, 9812],
            "blacAndWhiteEmoji": ["&#9823;", "&#9822;", "&#9820;", "&#9821;", "&#9819;", "&#9818;", "&#9817;", "&#9816;", "&#9814;", "&#9815;", "&#9813;", "&#9812;"]
        }
    }

    displayMovingPiece(name) {
        for(let x = 0; x < 12; x++) {
            if(this.createPieceDetails.blackAndWhiteCode[x] === name) {
                return this.createPieceDetails.blacAndWhiteEmoji[x];
            }
        }
    }

    getBlackPieceName(name) {
        for(let x = 0; x < 6; x++) {
            if(this.createPieceDetails.blackEmoji[x] === name) {
                return true;
            }
        }
    }

    getBlackEantenPiece(name) {
        for(let x = 0; x < 6; x++) {
            if(this.createPieceDetails.blackEmoji[x] === name) {
                return this.createPieceDetails.blackPieceCode[x];
            }
        }
    }

    getWhitePieceName(name) {
        for(let i = 0; i < 6; i++) {
            if(this.createPieceDetails.whiteEmoji[i] === name) {
               return true;
            }
        }
    }

    getWhiteEantenPiece(name) {
        for(let x = 0; x < 6; x++) {
            if(this.createPieceDetails.whiteEmoji[x] === name) {
                return this.createPieceDetails.whitePieceCode[x];
            }
        }
    }

    getPiecePoint(name) {
        for(let i = 0; i < 6; i++) {
            if(this.createPieceDetails.blackEmoji[i] === name) {
               return i;
            }
            if(this.createPieceDetails.whiteEmoji[i] === name) {
                return i;
            }
        }
    }
}

class Players {

    constructor() {
        this.point = new Pieces();
        this.sum = 0;
    }
    /**this function get the value of the chess eaten */
    getPiecePointOrValue = (index) => this.sum = this.point.createPieceDetails["pieceValue"][index];
    
    getPieceToPlayWith = (color) => color; /**function that gets the color of the peiece that the player chose to play with */
    
    addUp = (a , b) =>  a+ + +b; /**add up the values of the pieces eaten */
    
    addPlayersPoints() { /**show the sum on dom */
        document.getElementById("points").innerText = this.addUp(this.sum, document.getElementById("points").innerHTML);
    }
}

class Position { /**this class is responsible finding the position of the piece; row and col*/

    constructor() {
        this.firstMyArray = [];
        this.secondMyArray = [];
        this.trackMovement =[];
        this.firstPosition = this.firstPosition;
        this.secondPosition = this.secondPosition;
        this.count = 0;
        this. diagonalCountSeven = [];
        this.diagonalCountNine = [];
        this.matrix = [
            [0, 1, 2, 3, 4, 5, 6, 7],
            [8, 9, 10, 11, 12, 13, 14, 15],
            [16, 17, 18, 19, 20, 21, 22, 23],
            [24, 25, 26, 27, 28, 29, 30, 31],
            [32, 33, 34, 35, 36, 37, 38, 39],
            [40, 41, 42, 43, 44, 45, 46, 47],
            [48, 49, 50, 51, 52, 53, 54, 55],
            [56, 57, 58, 59, 60, 61, 62, 63]
        ];
    }

    firstRowAndcollumn(firstRP) {

        this.firstMyArray =[];

        for(let x = 0; x < 8; x++) {
            for(let i = 0; i < 8; i++) {
                if(this.matrix[x][i] === firstRP) {
                    this.firstMyArray.push(x);
                    this.firstMyArray.push(i);
                }
            }
        }
        return this.firstMyArray;
    }

    secondRowAndPosition(secondRP) {
        this.secondMyArray = [];

        for(let x = 0; x < 8; x++) {
            for(let i = 0; i < 8; i++) {
                if(this.matrix[x][i] === secondRP) {
                    this.secondMyArray.push(x);
                    this.secondMyArray.push(i);
                }
            }
        }
        return this.secondMyArray;
    }

    moveForwardOrBack() {

        const firstArrayRow = this.firstMyArray[0];
        const firstArrayCol = this.firstMyArray[1]; 
        const secondArrayRow = this.secondMyArray[0] 
        const secondArrayCol = this.secondMyArray[1];

        if(firstArrayCol === secondArrayCol && firstArrayRow > secondArrayRow) { /**moving up or forward*/
            for(let r = secondArrayRow; r < firstArrayRow; r++) {
                this.trackMovement.push(this.matrix[r][firstArrayCol]);
            }
        } else {
            if(firstArrayRow < secondArrayRow && firstArrayCol === secondArrayCol) { /**moving down or back */
                for(let r = secondArrayRow; r > firstArrayRow; r--) {
                    this.trackMovement.push(this.matrix[r][firstArrayCol]);
                }
            }
        }
        return this.trackMovement;
    }

    moveLeftAndRight() {

        const firstArrayRow = this.firstMyArray[0];
        const firstArrayCol = this.firstMyArray[1]; 
        const secondArrayRow = this.secondMyArray[0] 
        const secondArrayCol = this.secondMyArray[1];

        if(firstArrayCol > secondArrayCol && firstArrayRow === secondArrayRow) { /**moving to the left */
            for(let r = secondArrayCol; r < firstArrayCol; r++) {
                this.trackMovement.push(this.matrix[firstArrayRow][r]);
            }
        } else {
            if(firstArrayCol < secondArrayCol && firstArrayRow === secondArrayRow) { /**moving to the rigth */
                for(let r = secondArrayCol; r > firstArrayCol; r--) {
                    this.trackMovement.push(this.matrix[firstArrayRow][r]);
                }
            }
        }
        return this.trackMovement;
    }

    moveDiagonally() {

        this.trackMovement =[];

        const firstArrayRow = this.firstMyArray[0];
        const firstArrayCol = this.firstMyArray[1]; 
        const secondArrayRow = this.secondMyArray[0] 
        let secondArrayCol = this.secondMyArray[1];

        if(firstArrayCol > secondArrayCol && firstArrayRow > secondArrayRow) { /**moving diagonally to the left */
            for(let r = secondArrayRow; r < firstArrayRow; r++) {
                this.trackMovement.push(this.matrix[r][secondArrayCol]);
                ++secondArrayCol;
            }
        }
        else {
            if(firstArrayCol < secondArrayCol && firstArrayRow > secondArrayRow) { /**moving diagonally to the rigth */
                for(let r = secondArrayRow; r < firstArrayRow; r++) {
                    this.trackMovement.push(this.matrix[r][secondArrayCol]);
                    --secondArrayCol;
                }
            }
            else {
                if(firstArrayRow < secondArrayRow && firstArrayCol < secondArrayCol) { /**reversing from the left  */
                    for(let r = secondArrayRow; r > firstArrayRow; r--) {
                        this.trackMovement.push(this.matrix[r][secondArrayCol]);
                        --secondArrayCol;
                    }
                }
                else {
                    if(firstArrayRow < secondArrayRow && firstArrayCol > secondArrayCol) { /**reversing from the rigth */
                       for(let r = secondArrayRow; r > firstArrayRow; r--) {
                            this.trackMovement.push(this.matrix[r][secondArrayCol]);
                            ++secondArrayCol;
                       }
                    }
                }
            }
        }
        return this.trackMovement;
    }

    testeIfDiagonallyIsRight(fP, lP) {
        this.diagonalCountSeven =[];
        if(fP > lP) {
            let resultSeven = lP;
            while(resultSeven <= fP) {
                if(resultSeven  === fP) {
                    return true;
                }
                if(resultSeven < fP) {
                    this.diagonalCountSeven.push(resultSeven);
                }
                resultSeven += 7;
            }
        }
        else {
            if(lP > fP) {
                let myResultSeven = fP;
                while(myResultSeven <= lP ) {
                   if(myResultSeven === lP) {
                       return true;
                   }
                   if(myResultSeven < lP ) {
                        this.diagonalCountSeven.push(myResultSeven);
                    }
                   myResultSeven += 7;
                }
            }
        }
    }

    testeIfDiagonallyIsLeft(fP, lP) {
        this.diagonalCountNine =[];
        if(fP > lP) {
            let resultNine = lP;
            while(resultNine <= fP) {
                if(resultNine === fP) {
                    return true;
                }
                if(resultNine < fP ) {
                    this.diagonalCountNine.push(resultNine);
                }
                resultNine +=  9;
            }
        }
        else {
            if(lP > fP) {
                let myResultNine = fP;
                while(myResultNine <= lP) {
                   if(myResultNine === lP) {
                       return true;
                   }
                   if(myResultNine < lP ) {
                        this.diagonalCountNine.push(myResultNine);
                    }
                   myResultNine += 9;
                }
            }
        }
    }

    loopDom(element, arr) {
        const x = arr.length;
        for(let j = 1; j < x; j++) {
            if(element[arr[j]].innerHTML === "") {
                this.count++;
            }
        }
        if(this.count === x -1) {
            return true;
        }
    }

    loopDomDiagonally(element, arr) {
        const x = arr.length;
        for(let j = 0; j < x; j++) {
            if(element[arr[j]].innerHTML === "") {
                this.count++;
            }
        }
        if(this.count === x | this.count === x -1) {
            return true;
        }
    }
}

class ReadyToMove {
    constructor() {
        this.arraySavePositions =[];
        this.firstSquarePosition = 0;
        this.finalSquarePosistion = 0;
    }

    fillArray = (squarePosition) => { this.arraySavePositions.push(squarePosition); }

    validateArray() {
        if(this.arraySavePositions.length === 2 && this.arraySavePositions[0] !== this.arraySavePositions[1]) {
            return true;
        }
    }

    movePawn(playerPieceColor) {
        /**here i check out if the square is empty first of all */
        this.firstSquarePosition = this.arraySavePositions[0];
        this.finalSquarePosistion = this.arraySavePositions[1];
        const squares = document.querySelectorAll("div.squares");
        const emojiPlaying = new ChessEmoji();
        
        if(this.firstSquarePosition > this.finalSquarePosistion) {
            const move = this.firstSquarePosition - this.finalSquarePosistion;
            if(move === 8) {
                if(squares[this.finalSquarePosistion].innerHTML === "") {
                    return true;
                }
            }
            else {
                if(move === 9 | move === 7) {
                    if(emojiPlaying.allowToEat(squares[this.finalSquarePosistion].innerHTML.codePointAt(0), playerPieceColor)) {
                        return true;
                    }
                }
            }
        }
    }

    moveKingPiece(playerPieceColor) {
        const emojiPlaying = new ChessEmoji();
        
        this.firstSquarePosition = this.arraySavePositions[0];
        this.finalSquarePosistion = this.arraySavePositions[1];
        const squares = document.querySelectorAll("div.squares");
        if(this.firstSquarePosition > this.finalSquarePosistion) {
            const move = this.firstSquarePosition - this.finalSquarePosistion;
            if(move === 8 | move === 9 || move === 7 |move=== 1) {
                if(squares[this.finalSquarePosistion].innerHTML === "") {
                    return true;
                }
                else {
                    if(emojiPlaying.allowToEat(squares[this.finalSquarePosistion].innerHTML.codePointAt(0), playerPieceColor)) {
                        return true;
                    }
                }
            }
        }
        else {
            const move = this.finalSquarePosistion - this.firstSquarePosition;
            if(move === 8 | move === 9 || move === 7 | move === 1) {
                if(squares[this.finalSquarePosistion].innerHTML === "") {
                    return true;
                }
                else {
                    if(emojiPlaying.allowToEat(squares[this.finalSquarePosistion].innerHTML.codePointAt(0), playerPieceColor)) {
                        return true;
                    }
                }
            }
        }
    }

    moveKnightPiece(playerPieceColor) {
        const emojiPlaying = new ChessEmoji();
        this.firstSquarePosition = this.arraySavePositions[0];
        this.finalSquarePosistion = this.arraySavePositions[1];
        const squares = document.querySelectorAll("div.squares");
        if(this.firstSquarePosition > this.finalSquarePosistion) {
            const move = this.firstSquarePosition - this.finalSquarePosistion;
            if(move === 17 | move === 15 || move === 10 |move=== 6) {
                if(squares[this.finalSquarePosistion].innerHTML === "") {
                    return true;
                }
                else {
                    if(move === 17 | move === 15 || move === 10 |move=== 6) {
                        if(emojiPlaying.allowToEat(squares[this.finalSquarePosistion].innerHTML.codePointAt(0), playerPieceColor)) {
                            return true;
                        }
                    }
                }
            }
        }
        else {
            const move = this.finalSquarePosistion - this.firstSquarePosition;
            if(move === 17 | move === 15 || move === 10 | move === 6) {
                if(squares[this.finalSquarePosistion].innerHTML === "") {
                    return true;
                }
                else {
                    if(move === 17 | move === 15 || move === 10 | move === 6)  {
                        if(emojiPlaying.allowToEat(squares[this.finalSquarePosistion].innerHTML.codePointAt(0), playerPieceColor)) {
                            return true;
                        }
                    }
                }
            }
        }
    }

    moveRookOrQueenForwardAndBack(playerPieceColor) {

        const emojiPlaying = new ChessEmoji();
        this.firstSquarePosition = this.arraySavePositions[0];
        this.finalSquarePosistion = this.arraySavePositions[1];
        const squares = document.querySelectorAll("div.squares");
        const position = new Position();
        position.firstRowAndcollumn(this.firstSquarePosition);
        position.secondRowAndPosition(this.finalSquarePosistion);

        const move = position.moveForwardOrBack();
        if(move.length !== 0 ) {
            if(move.length === 1 ) {
                if(squares[this.finalSquarePosistion].innerHTML === "") {
                    return true;
                }
                else {
                    if(emojiPlaying.allowToEat(squares[this.finalSquarePosistion].innerHTML.codePointAt(0), playerPieceColor)) {
                        return true;
                    }
                }
            }
            else {
                if(squares[this.finalSquarePosistion].innerHTML === "") {
                    if(position.loopDom(squares, move)) {
                        return true;
                    }
                }
                else {
                    if(position.loopDom(squares, move)) {
                        if(emojiPlaying.allowToEat(squares[this.finalSquarePosistion].innerHTML.codePointAt(0), playerPieceColor)) {
                            return true;
                        }
                    }
                }
            } 
        }
    }

    moveRookOrQueenLeftAndRight(playerPieceColor) {

        const emojiPlaying = new ChessEmoji();
        this.firstSquarePosition = this.arraySavePositions[0];
        this.finalSquarePosistion = this.arraySavePositions[1];
        const squares = document.querySelectorAll("div.squares");
        const position = new Position();
        position.firstRowAndcollumn(this.firstSquarePosition);
        position.secondRowAndPosition(this.finalSquarePosistion);
        const move = position.moveLeftAndRight();

        if(move.length !== 0 ) {
            if(move.length === 1 ) {
                if(squares[this.finalSquarePosistion].innerHTML === "") {
                    return true;
                }
                else {
                    if(emojiPlaying.allowToEat(squares[this.finalSquarePosistion].innerHTML.codePointAt(0), playerPieceColor)) {
                        return true;
                    }
                }
            }
            else {
                if(squares[this.finalSquarePosistion].innerHTML === "") {
                    if(position.loopDom(squares, move)) {
                        return true;
                    }
                }
                else {
                    if(position.loopDom(squares, move)) {
                        if(emojiPlaying.allowToEat(squares[this.finalSquarePosistion].innerHTML.codePointAt(0), playerPieceColor)) {
                            return true;
                        }
                    }
                }
            }
        }
    }

    moveBishopAndQueenDiagonally(playerPieceColor) {
        const emojiPlaying = new ChessEmoji();
        this.firstSquarePosition = this.arraySavePositions[0];
        this.finalSquarePosistion = this.arraySavePositions[1];
        const squares = document.querySelectorAll("div.squares");
        const position = new Position();
        position.firstRowAndcollumn(this.firstSquarePosition);
        position.secondRowAndPosition(this.finalSquarePosistion);
        
        if(position.testeIfDiagonallyIsRight(this.firstSquarePosition, this.finalSquarePosistion)) {
            const move = position.diagonalCountSeven;
            if(move.length === 1 ) {
                if(squares[this.finalSquarePosistion].innerHTML === "") {
                    return true;
                }
                else {
                    if(emojiPlaying.allowToEat(squares[this.finalSquarePosistion].innerHTML.codePointAt(0), playerPieceColor)) {
                        return true;
                    }
                }
            }
            else {
                if(squares[this.finalSquarePosistion].innerHTML === "") {
                    if(position.loopDomDiagonally(squares, move)) {
                        return true;
                    }
                }
                else {
                    if(position.loopDomDiagonally(squares, move)) {
                        if(emojiPlaying.allowToEat(squares[this.finalSquarePosistion].innerHTML.codePointAt(0), playerPieceColor)) {
                            return true;
                        }
                    }
                }
            }
        }
        else {
            if(position.testeIfDiagonallyIsLeft(this.firstSquarePosition, this.finalSquarePosistion)) {
                const move = position.diagonalCountNine;

                if(move.length === 1 ) {
                    if(squares[this.finalSquarePosistion].innerHTML === "") {
                        return true;
                    }
                    else {
                        if(emojiPlaying.allowToEat(squares[this.finalSquarePosistion].innerHTML.codePointAt(0), playerPieceColor)) {
                            return true;
                        }
                    }
                }
                else {
                    if(squares[this.finalSquarePosistion].innerHTML === "") {
                        if(position.loopDomDiagonally(squares, move)) {
                            return true;
                        }
                    }
                    else {
                        if(position.loopDomDiagonally(squares, move)) {
                            if(emojiPlaying.allowToEat(squares[this.finalSquarePosistion].innerHTML.codePointAt(0), playerPieceColor)) {
                                return true;
                            }
                        }
                    }
                }
            }

        }
    }
    
}

class ChessEmoji extends Players  {
    /** I use this class to compare emoji to make sure */
    constructor() {
        super();
        this.piecePlaying = new Pieces();
        this.pieceEmoji = [];
    }

    getEmptySpaceEatenPiece(element) {
        for(let x = 0; x < element.length; x++) {
            if(element[x].innerHTML === "") {
                return x;
            }
        }
    }

    allowToEat(name, playerPieceColor) {
        const squares = document.querySelectorAll("div.squaresForWhitePieces");

        if(playerPieceColor === "white" && this.piecePlaying.getBlackPieceName(name)) {
            squares[this.getEmptySpaceEatenPiece(squares)].innerHTML =  this.piecePlaying.getBlackEantenPiece(name);
            this.getPiecePointOrValue(this.piecePlaying.getPiecePoint(name)); 
            this.addPlayersPoints();
            return true;
        }
        if(playerPieceColor === "black" && this.piecePlaying.getWhitePieceName(name)) {
            squares[this.getEmptySpaceEatenPiece(squares)].innerHTML =  this.piecePlaying.getWhiteEantenPiece(name);
            this.getPiecePointOrValue(this.piecePlaying.getPiecePoint(name));
            this.addPlayersPoints();
            return true;
        }
    }

    playerPieces(name, playerPieceColor) {
        if(playerPieceColor ==="black" && this.piecePlaying.getBlackPieceName(name)) {
            return true;
        }
        if(playerPieceColor === "white" && this.piecePlaying.getWhitePieceName(name)) {
            return true;
        }
    }

    returnPiecePlaying(name) {
        return this.piecePlaying.displayMovingPiece(name);
    }

    getEmojiSelected = (emoji) => { this.pieceEmoji.push(emoji); }
}

class ChessBoardGame {
    constructor() {
        this.blackPieces = new Pieces().createPieceDetails.blackPieceCode;
        this.whitePieces = new Pieces().createPieceDetails.whitePieceCode;
        this.element = this.element;
        this.increment = 0;
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
                this.element = document.createElement("div");
                this.element.setAttribute("cell-index", this.squareIndex());
                this.element.classList.add(className);
                document.getElementById(id).append(this.element);
            }
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

let saveColor ="";
let playerPieceColor = "";
window.onload = function() {

    const startPlaying = new ReadyToMove();
    const emoji = new ChessEmoji();
    const player = new Players();

    document.querySelector("button").addEventListener("click", buildChessBoard);
    document.querySelector(".load-pieces").addEventListener("click", loadUpPieces);

    /** document.getElementById("home").addEventListener("mouseover", )*/

    function buildChessBoard() {
        const buildtheBoard = new ChessBoardGame();
        buildtheBoard.buildBoard("game", "squares", 8, 8);
        buildtheBoard.buildBoard("blackPieces", "squaresForBlackPieces", 3, 6);
        buildtheBoard.buildBoard("whitePieces", "squaresForWhitePieces", 3, 6);
        const squares = document.querySelectorAll("div.squares");
        buildtheBoard.colorSquareBoard(squares, "white", 0);
        document.querySelectorAll(".squares").forEach(cell => cell.addEventListener("click", displayInfo));
    }

    function timeToPlay(cellIndex, cellValue) {
        const squares = document.querySelectorAll("div.squares");
    
        if(startPlaying.arraySavePositions.length === 0) {
            startPlaying.fillArray(cellIndex);
            saveColor = cellValue.style.backgroundColor;
            squares[cellIndex].style.backgroundColor = "yellow";
            emoji.getEmojiSelected(cellValue.innerHTML.codePointAt(0));
        }
        else {
            startPlaying.fillArray(cellIndex);
            if(emoji.playerPieces(emoji.pieceEmoji[0], playerPieceColor)) {
                if(emoji.pieceEmoji[0] === emoji.piecePlaying.createPieceDetails.blackEmoji[0] | emoji.pieceEmoji[0] === emoji.piecePlaying.createPieceDetails.whiteEmoji[0]) {
                    if(startPlaying.movePawn(playerPieceColor)) {
                        squares[startPlaying.arraySavePositions[0]].innerHTML = "";
                        squares[startPlaying.arraySavePositions[0]].style.backgroundColor = saveColor;
                        squares[startPlaying.arraySavePositions[1]].innerHTML = emoji.returnPiecePlaying(emoji.pieceEmoji[0]);
                        startPlaying.arraySavePositions = [];
                        emoji.pieceEmoji = [];
                    }
                    else {
                        squares[startPlaying.arraySavePositions[0]].style.backgroundColor = saveColor;
                        startPlaying.arraySavePositions = [];
                        emoji.pieceEmoji = [];
                    }
                }  
                if(emoji.pieceEmoji[0] === emoji.piecePlaying.createPieceDetails.blackEmoji[1] | emoji.pieceEmoji[0] === emoji.piecePlaying.createPieceDetails.whiteEmoji[1]) {
                    if(startPlaying.moveKnightPiece(playerPieceColor)) {
                        squares[startPlaying.arraySavePositions[0]].innerHTML = "";
                        squares[startPlaying.arraySavePositions[0]].style.backgroundColor = saveColor;
                        squares[startPlaying.arraySavePositions[1]].innerHTML = emoji.returnPiecePlaying(emoji.pieceEmoji[0]);
                        startPlaying.arraySavePositions = [];
                        emoji.pieceEmoji = [];
                    }
                    else {
                        squares[startPlaying.arraySavePositions[0]].style.backgroundColor = saveColor;
                        startPlaying.arraySavePositions = [];
                        emoji.pieceEmoji = [];
                    }
                }
                    
                if(emoji.pieceEmoji[0] === emoji.piecePlaying.createPieceDetails.blackEmoji[4] | emoji.pieceEmoji[0] === emoji.piecePlaying.createPieceDetails.whiteEmoji[4]) {
                    if(startPlaying.moveKingPiece(playerPieceColor)) {
                        squares[startPlaying.arraySavePositions[0]].innerHTML = "";
                        squares[startPlaying.arraySavePositions[0]].style.backgroundColor = saveColor;
                        squares[startPlaying.arraySavePositions[1]].innerHTML = emoji.returnPiecePlaying(emoji.pieceEmoji[0]);
                        startPlaying.arraySavePositions = [];
                        emoji.pieceEmoji = [];
                    }
                    else {
                        squares[startPlaying.arraySavePositions[0]].style.backgroundColor = saveColor;
                        startPlaying.arraySavePositions = [];
                        emoji.pieceEmoji = [];
                    }
                }
                if(emoji.pieceEmoji[0] === emoji.piecePlaying.createPieceDetails.blackEmoji[2] | emoji.pieceEmoji[0] === emoji.piecePlaying.createPieceDetails.whiteEmoji[2]) {
                    if(startPlaying.moveRookOrQueenForwardAndBack(playerPieceColor)) {
                        squares[startPlaying.arraySavePositions[0]].innerHTML = "";
                        squares[startPlaying.arraySavePositions[0]].style.backgroundColor = saveColor;
                        squares[startPlaying.arraySavePositions[1]].innerHTML = emoji.returnPiecePlaying(emoji.pieceEmoji[0]);
                        startPlaying.arraySavePositions = [];
                        emoji.pieceEmoji = [];
                    }
                    else {
                        if(startPlaying.moveRookOrQueenLeftAndRight(playerPieceColor)) {
                            squares[startPlaying.arraySavePositions[0]].innerHTML = "";
                            squares[startPlaying.arraySavePositions[0]].style.backgroundColor = saveColor;
                            squares[startPlaying.arraySavePositions[1]].innerHTML = emoji.returnPiecePlaying(emoji.pieceEmoji[0]);
                            startPlaying.arraySavePositions = [];
                            emoji.pieceEmoji =[];
                        }
                        else {
                            squares[startPlaying.arraySavePositions[0]].style.backgroundColor = saveColor;
                            startPlaying.arraySavePositions = [];
                            emoji.pieceEmoji = [];
                        }
                    }
                }
                            
                if(emoji.pieceEmoji[0] === emoji.piecePlaying.createPieceDetails.blackEmoji[5] | emoji.pieceEmoji[0] === emoji.piecePlaying.createPieceDetails.whiteEmoji[5]) {
                    if(startPlaying.moveRookOrQueenForwardAndBack(playerPieceColor)) {
                        squares[startPlaying.arraySavePositions[0]].style.backgroundColor = saveColor;
                        squares[startPlaying.arraySavePositions[1]].innerHTML = emoji.returnPiecePlaying(emoji.pieceEmoji[0]);
                        squares[startPlaying.arraySavePositions[0]].innerHTML = "";
                        startPlaying.arraySavePositions = [];
                        emoji.pieceEmoji =[];
                    }
                    else {
                        if(startPlaying.moveRookOrQueenLeftAndRight(playerPieceColor)) {
                            squares[startPlaying.arraySavePositions[0]].innerHTML = "";
                            squares[startPlaying.arraySavePositions[0]].style.backgroundColor = saveColor;
                            squares[startPlaying.arraySavePositions[1]].innerHTML = emoji.returnPiecePlaying(emoji.pieceEmoji[0]);
                            startPlaying.arraySavePositions = [];
                            emoji.pieceEmoji = [];
                        }
                        else {
                            if(startPlaying.moveBishopAndQueenDiagonally(playerPieceColor)) {
                                squares[startPlaying.arraySavePositions[0]].innerHTML = "";
                                squares[startPlaying.arraySavePositions[0]].style.backgroundColor = saveColor;
                                squares[startPlaying.arraySavePositions[1]].innerHTML = emoji.returnPiecePlaying(emoji.pieceEmoji[0]);
                                startPlaying.arraySavePositions = [];
                                emoji.pieceEmoji = [];
                            }
                            else {
                                squares[startPlaying.arraySavePositions[0]].style.backgroundColor = saveColor;
                                startPlaying.arraySavePositions = [];
                                emoji.pieceEmoji = []; 
                            }
                        }
                    }
                }
                if(emoji.pieceEmoji[0] === emoji.piecePlaying.createPieceDetails.blackEmoji[3] | emoji.pieceEmoji[0] === emoji.piecePlaying.createPieceDetails.whiteEmoji[3]) {
                    if(startPlaying.moveBishopAndQueenDiagonally(playerPieceColor)) {
                        squares[startPlaying.arraySavePositions[0]].innerHTML = "";
                        squares[startPlaying.arraySavePositions[0]].style.backgroundColor = saveColor;
                        squares[startPlaying.arraySavePositions[1]].innerHTML = emoji.returnPiecePlaying(emoji.pieceEmoji[0]);
                        startPlaying.arraySavePositions = [];
                        emoji.pieceEmoji = [];
                    }
                    else {
                        squares[startPlaying.arraySavePositions[0]].style.backgroundColor = saveColor;
                        startPlaying.arraySavePositions = [];
                        emoji.pieceEmoji = [];
                    }
                } 

            } else { 
                squares[startPlaying.arraySavePositions[0]].style.backgroundColor = saveColor;
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
            
    function loadUpPieces() {
        const chessBoard = new ChessBoardGame();
        playerPieceColor  = player.getPieceToPlayWith("black");
        const squares = document.querySelectorAll("div.squares");  
        chessBoard.loadPiecesTotheBoard(squares, playerPieceColor, 0); 
    }
}
