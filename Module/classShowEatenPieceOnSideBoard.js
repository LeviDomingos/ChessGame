
class ShowEatenPieceOnSideBoard {
    constructor() {
        this.white = this.white
        this.black = this.black
    }

    displayTitle(id, title) {
        const element = document.querySelectorAll(id);
        element.innerText = title;
    }

    removechildeNode(id) {
        let element = document.getElementById(id);
        if(element.childNodes.length > 1 ) {
            while (element.firstChild) {
                element.removeChild(element.firstChild);
            }
        }
    }
}

export { ShowEatenPieceOnSideBoard };