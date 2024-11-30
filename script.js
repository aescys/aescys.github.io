
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
    else if (elementClicked.id == "news_content") {
        window.location.href = "index.html";
    }
    else if (elementClicked.id == "funct_display") {
        window.location.href = "code.html";
    }
    else if (elementClicked.id == "funct_display_content") {
        window.location.href = "code.html";
    }
    else if (elementClicked.id == "math_highlight") {
        window.location.href = "math.html";
    }
    else if (elementClicked.id == "math_highlight_content") {
        window.location.href = "math.html";
    }
    else if (elementClicked.id == "comical_dude") {
        window.location.href = "cdude.html";
    }
    else if (elementClicked.id == "comical_dude_content") {
        window.location.href = "cdude.html";
    }
}

//CONTENT_DIV CLICK-TOGGLE-ENLARGE BACKEND
querySelectAll(".content_div").addEventListener('click', toggleEnlarge);

function toggleEnlarge(event) {
    event.target.classList.toggle('enlarged');
    
}

//MOUSE TRACKER BACKEND
document.addEventListener('mousemove', function(event) {
    let xStatement = document.querySelector("#xCoord");
    let yStatement = document.querySelector("#yCoord");
    xStatement.textContent = `X Pos: ${event.clientX}`;
    yStatement.textContent = `Y Pos: ${event.clientY}`;
});