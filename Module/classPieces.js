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
White's king is located on e1, while Black's king starts on e8. */

class Pieces {
    constructor(pawn, knight, rook, bishop, king, queen) {
        this.pawn = pawn;
        this.knight = knight;
        this.rook = rook;
        this.bishop = bishop;
        this.king = king;
        this.queen = queen;
        this.index = this.index;

        this.createPieceDetails = {
            blackEmoji: [9823, 9822, 9820, 9821, 9819, 9818],
            blackPieceCode: ["&#9823;", "&#9822;", "&#9820;", "&#9821;", "&#9819;", "&#9818;"],
            whiteEmoji: [9817, 9816, 9814, 9815, 9813, 9812],
            whitePieceCode: ["&#9817;", "&#9816;", "&#9814;", "&#9815;", "&#9813;", "&#9812;"],
            pieceValue: [10, 30, 50, 30, 90, 100],
            blackAndWhiteCode: [9823, 9822, 9820, 9821, 9819, 9818, 9817, 9816, 9814, 9815, 9813, 9812],
            blacAndWhiteEmoji: ["&#9823;", "&#9822;", "&#9820;", "&#9821;", "&#9819;", "&#9818;", "&#9817;", "&#9816;", "&#9814;", "&#9815;", "&#9813;", "&#9812;"]
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
        for(const x of this.createPieceDetails.blackEmoji) {
            if(x === name) 
            return true;
        }
    }

    getWhitePieceName(name) {
        for(const x of this.createPieceDetails.whiteEmoji) {
            if(x === name) {
                return true;
            }
        }
    }


    getPiecePoint(name) {
        if(this.getBlackPieceName(name)) { return this.index; }
        if(this.getWhitePieceName(name)) {return this.index; }
    }
}
export { Pieces }