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
        this.trackMovement =[];
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
        this.trackMovement =[];
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

export { Position };
