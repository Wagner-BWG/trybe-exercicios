
function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');

    for (let index = 0; index < weekDays.length; index += 1) {
        const days = weekDays[index];
        const dayListItem = document.createElement('li');
        dayListItem.innerHTML = days;

        weekDaysList.appendChild(dayListItem);
    };
};

createDaysOfTheWeek();

// Exercício 1.

const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

function createDaysOfTheMonth(monthDays) {
    const monthDaysList = document.getElementById("days");

    for (let i = 0; i < monthDays.length; i += 1) {
        const monthDayElement = document.createElement("li");
        monthDayElement.innerText = monthDays[i];
        monthDayElement.className = "day";
        if ((i - 1) === 24 || (i - 1) === 25 || (i - 1) === 31) {
            monthDayElement.className += " holiday";
        }
        if ((i - 1) === 4 || (i - 1) === 11 || (i - 1) === 18 || (i - 1) === 25) {
            monthDayElement.className += " friday";
        }

        monthDaysList.appendChild(monthDayElement);
    }
}
createDaysOfTheMonth(dezDaysList);

// Exercício 2.

function createHolidayButton() {
    const button = document.createElement("button");
    button.id = "btn-holiday";
    button.innerText = "Feriados";
    document.getElementsByClassName("buttons-container")[0].appendChild(button);
}

createHolidayButton();

// Exercício 3.

function addDisplayHolidays() {
    const button = document.getElementById("btn-holiday");
    button.addEventListener("click", displayHolidays);
}
addDisplayHolidays();

function displayHolidays() {
    const holidays = document.getElementsByClassName("holiday");
    for (let i = 0; i < holidays.length; i += 1) {
        if (holidays[i].style.backgroundColor != "red") {
            holidays[i].style.backgroundColor = "red";
        }
        else {
            holidays[i].style.backgroundColor = "rgb(238,238,238)";
        }
    }
}

// Exercício 4.

function createFridayButton() {
    const button = document.createElement("button");
    button.id = "btn-friday";
    button.innerText = "Sexta-Feira";
    document.getElementsByClassName("buttons-container")[0].appendChild(button);
}
createFridayButton();

// Exercício 5.

let daysThatAreFriday = []

function addSextou() {
    const button = document.getElementById("btn-friday");
    button.addEventListener("click", displaySextou);
    const fridays = document.getElementsByClassName("friday");
    for (let i = 0; i < fridays.length; i += 1){
        daysThatAreFriday[i] = fridays[i].innerText;
    }
    return daysThatAreFriday;
}
addSextou();

function displaySextou() {
    const fridays = document.getElementsByClassName("friday");
    for (let i = 0; i < fridays.length; i += 1) {
        if (fridays[i].innerText != daysThatAreFriday[i]){
            fridays[i].innerText = daysThatAreFriday[i];
        }
        else {
            fridays[i].innerText = "🥳";
        }
    }
}

// Exercício 6.

function createDayZoom(){
    const day = document.getElementsByClassName("day");
    for (let i = 0; i < day.length; i += 1) {
        day[i].addEventListener("mouseover", zoomIn);
        day[i].addEventListener("mouseleave", zoomOut);
    }
}
createDayZoom();

function zoomIn(day){
    day.target.style.fontSize = "25px";
    day.target.style.fontWeight = "bold";
}

function zoomOut(day){
    day.target.style.fontSize = "20px";
    day.target.style.fontWeight = "normal";
}

// Exercício 7.

function addCreateTaskFunction(){
    const addTaskBtn = document.getElementById("btn-add");
    addTaskBtn.addEventListener("click", createTask);
}
addCreateTaskFunction();

function createTask() {
    const taskText = document.getElementById("task-input").value;
    const taskList = document.getElementsByClassName("my-tasks")[0];
    const task = document.createElement("span");
    const lineBreak = document.createElement("br");
    task.innerHTML = taskText;
    taskList.appendChild(task);
    taskList.appendChild(lineBreak);
}