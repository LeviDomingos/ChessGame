class BuildMenu {
    constructor() {
        this.elemnt = this.elemnt;
    }

    buldUl() {
        return document.createElement("ul");
    }

    buildLi() {
        for(let x = 0; x < 3; x++) {
            const l = document.createElement("li"); 
            document.querySelector("ul").appendChild(l);
        }
    }

    buildA() {
        const arrayMenu =["Home", "game", "cheese"]; 
        this.elemnt =  document.querySelectorAll("li");
        for(let x = 0; x < this.elemnt.length; x++) {
            const a = document.createElement("a");
            a.innerText = arrayMenu[x]; 
            a.style.fontSize = "20px";
            a.style.color = "white";
            a.style.padding = "0px";
            a.style.display = "block";
            this.elemnt[x].appendChild(a);
        }
    }

    buildNavegationBar(id) {
        document.getElementById(id).appendChild(this.buldUl());
        this.buildLi();
        this.buildA();
    }
}

export { BuildMenu };