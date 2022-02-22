const body = document.body;
const text = document.getElementsByTagName("p")[0].style;

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

    if (localStorage.getItem("BackgroundColor") != null) {
        body.style.backgroundColor = JSON.parse(localStorage.getItem("BackgroundColor"));
    }
    if (localStorage.getItem("TextColor") != null) {
        text.color = JSON.parse(localStorage.getItem("TextColor"));
    }
    if (localStorage.getItem("TextSize") != null) {
        text.fontSize = JSON.parse(localStorage.getItem("TextSize")) + "px";
    }

}

function changeBackgroundColor() {
    let bgColorPicker = document.getElementById("bgColor").value;
    body.style.backgroundColor = bgColorPicker;
    localStorage.setItem("BackgroundColor", JSON.stringify(bgColorPicker));
}

function textColor() {
    let txtColorPicker = document.getElementById("txtColor").value;
    text.color = txtColorPicker;
    localStorage.setItem("TextColor", JSON.stringify(txtColorPicker));
}

function fontSize() {
    let txtSizePicker = document.getElementById("txtSize").value;
    text.fontSize = txtSizePicker + "px";
    localStorage.setItem("TextSize", JSON.stringify(txtSizePicker));
}

function lineSpace() {
    alert("change line spacing");
}

function fontChange() {
    alert("change text's font");
}