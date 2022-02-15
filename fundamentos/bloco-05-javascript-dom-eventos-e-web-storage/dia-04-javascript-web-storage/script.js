let bckGrndBlack;
const body = document.body;


window.onload = function () {
    const bckgBtn = document.getElementById("btn-fundo");
    const txtcolorBtn = document.getElementById("btn-cor");
    const sizeBtn = document.getElementById("btn-tamanho");
    const linSpcBtn = document.getElementById("btn-espaço");
    const fontBtn = document.getElementById("btn-fonte");

    bckgBtn.addEventListener("click", changeBackgroundColor);
    txtcolorBtn.addEventListener("click", textColor);
    sizeBtn.addEventListener("click", fontSize);
    linSpcBtn.addEventListener("click", lineSpace);
    fontBtn.addEventListener("click", fontChange);

    if (localStorage.getItem("BackgroundColor") === null) {
        bckGrndBlack = true;
    }
    else {
        bckGrndBlack = JSON.parse(localStorage.getItem("BackgroundColor"));
    }

    if (bckGrndBlack === false) {
        body.style.backgroundColor = "white";
    }
    // const lettersColor = ;
    // const lettersSize = ;
    // const spaceBtwLines = ;

}


function changeBackgroundColor() {

    if (bckGrndBlack === true) {
        body.style.backgroundColor = "white";
        bckGrndBlack = false;
    }
    else {
        body.style.backgroundColor = "black";
        bckGrndBlack = true;
    }

    localStorage.setItem("BackgroundColor", JSON.stringify(bckGrndBlack));

}

function textColor() {
    alert("change text color");
}

function fontSize() {
    alert("change font size");
}

function lineSpace() {
    alert("change line spacing");
}

function fontChange() {
    alert("change text's font");
}