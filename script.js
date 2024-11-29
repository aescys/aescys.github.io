
//MENU BAR TOGGLE BACKEND
document.addEventListener('mousemove', menubarVisibility);

function menubarVisibility(event) {
    let menuBar = document.getElementById("title_bar");
    if (event.clientY > (window.innerHeight * .15)) {
        menuBar.classList.add("hidden");
    }
    else {
        menuBar.classList.remove("hidden");
    }
}

//TAB CLICK REDIRECT BACKEND
document.addEventListener('click', executeLink);

function executeLink(event) {
    let elementClicked = event.target;
    if (elementClicked.id == "news") {
        window.location.href = "index.html";
    }
    else if (elementClicked.id == "funct_display") {
        window.location.href = "code.html";
    }
    else if (elementClicked.id == "math_highlight") {
        window.location.href = "math.html";
    }
    else if (elementClicked.id == "comical_dude") {
        window.location.href = "cdude.html";
    }
}

//MOUSE TRACKER BACKEND
document.addEventListener('mousemove', function(event) {
    let xStatement = document.querySelector("#xCoord");
    let yStatement = document.querySelector("#yCoord");
    xStatement.textContent = `X Pos: ${event.clientX}`;
    yStatement.textContent = `Y Pos: ${event.clientY}`;
});