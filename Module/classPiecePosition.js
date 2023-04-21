class Position { /**this class is responsible finding the position of the piece; row and col*/

    constructor() {
        this.firstMyArray = [];
        this.secondMyArray = [];
        this.trackMovement =[];
        this.firstPosition = this.firstPosition;
        this.secondPosition = this.secondPosition;

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
        this.firstMyArray;
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
        this.secondMyArray;
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

    moveDiagonallySevenLeft(firstNumber, secondNumber) {
        this.trackMovement = [];
        if(firstNumber > secondNumber) { //moving forward
            while (secondNumber < firstNumber) {
                this.trackMovement.push(secondNumber);
                secondNumber += 7;
            }
        }
        if(this.checkSevenForward(this.trackMovement, firstNumber)) { return true; }
    }

    moveDiagonallySevenBack(firstNumber, secondNumber) {
        this.trackMovement = [];
        if(secondNumber > firstNumber) { //moving back right
            while (secondNumber > firstNumber) {
                this.trackMovement.push(secondNumber);
                secondNumber -= 7;
            }
        }
        if(this.checkSevenBack(this.trackMovement, firstNumber)) { return true; }
    }

    checkSevenForward(arr, finalNumber) {
        const myArray = arr.length;
        let seven = 0;
        let total = 0;
        const n  = 7;
        while(seven < myArray) {
            const l = arr[seven];
            total = Number(l) + Number(n);
            seven++;
        }
        if(total === finalNumber) {return true;};
    }
    checkSevenBack(arr, finalNumber) {
        const myArray = arr.length;
        let seven = 0;
        let total = 0;
        const n  = 7;
        while(seven < myArray) {
            const l = arr[seven];
            total = Number(l) - Number(n);
            seven++;
        }
        if(total === finalNumber) {return true;};
    }
    testeIfDiagonallyIsRight(fP, lP) {
        if(this.moveDiagonallySevenLeft(fP, lP)) { return true; }
        if(this.moveDiagonallySevenBack(fP, lP)) { return true; }
    }

    moveDiagonallyNineRight(firstNumber, secondNumber) {
        this.trackMovement = [];
        if(firstNumber > secondNumber) { //moving forward
            while (secondNumber < firstNumber) {
                this.trackMovement.push(secondNumber);
                secondNumber += 9;
            }
        }
        if(this.checkNineForward(this.trackMovement, firstNumber)){ return true; }
    }

    moveDiagonallyNineBack(firstNumber, secondNumber) {
        this.trackMovement = [];
        if(firstNumber < secondNumber) { //moving back right
            while (secondNumber > firstNumber) {
                this.trackMovement.push(secondNumber);
                secondNumber -= 9;
            }
        }
        if(this.checkNineBack(this.trackMovement, firstNumber)) {return true; }
    }

    checkNineForward(arr, finalNumber) {
        const myArray = arr.length;
        let seven = 0;
        let total = 0;
        const n  = 9;
        while(seven < myArray) {
            const l = arr[seven];
            total = Number(l) + Number(n);
            seven++;
        }
        if(total === finalNumber) { return true;}
    }
    checkNineBack(arr, finalNumber) {
        const myArray = arr.length;
        let seven = 0;
        let total = 0;
        const n  = 9;
        while(seven < myArray) {
            const l = arr[seven];
            total = Number(l) - Number(n);
            seven++;
        }
        if(total === finalNumber) { return true;}
    }


    testeIfDiagonallyIsLeft(fP, lP) {
        if(this.moveDiagonallyNineRight(fP, lP)) {return true;}
        if(this.moveDiagonallyNineBack(fP, lP)) { return true;}
    }

    loopDom(element, arr) {
        let count = 0;
        const x = arr.length;
        for(let j = 1; j < x; j++) {
            if(element[arr[j]].innerHTML === "") {
                count++;
            }
        }
        if(count === x -1) { return true;}
    }

    loopDomDiagonally(element, arr) {
        let count = 0;
        const x = arr.length;
        for(let j = 0; j < x; j++) {
            if(element[arr[j]].innerHTML === "") {
                count++;
            }
        }
        if(count === x) { return true; }
    }
    loopDomDiagonallyEat(element, arr) {
        let count = 0;
        const x = arr.length;
        for(let j = 0; j < x; j++) {
            if(element[arr[j]].innerHTML === "") {
                count++;
            }
        }
        if(count === x -1) { return true; }
    }
}

export { Position };
