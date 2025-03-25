//SITE-WIDE JS IMPLEMENTAIONS

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
document.querySelectorAll('.tab').forEach(tab => {
    tab.addEventListener('click', executeLink)
});

function executeLink(event) {
    let tabClicked = event.currentTarget;
    if (tabClicked.id == "news") {
        window.location.href = "index.html";
    }
    else if (tabClicked.id == "funct_display") {
        window.location.href = "code.html";
    }
    else if (tabClicked.id == "math_highlight") {
        window.location.href = "math.html";
    }
    else if (tabClicked.id == "comical_dude") {
        window.location.href = "cdude.html";
    }
}

//CONTENT_DIV CLICK-TOGGLE-ENLARGE BACKEND

document.querySelectorAll('.content_div').forEach(div => {
    div.addEventListener('click', toggleEnlarge)
});

function toggleEnlarge(event) {
    event.currentTarget.classList.toggle('enlarged');
    
}

//CDude comic_version_selector 
//CDude content display feature
