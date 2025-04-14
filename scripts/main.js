//SITE-WIDE JS IMPLEMENTAIONS


//MOBILE DROPDOWN TAB BACKEND
document.getElementById("menu_bar").classList.add("hidden");

document.getElementById("mobile_menu_dropdown").addEventListener('click', menubarVisibility);

function menubarVisibility(event) {
    let menuBar = document.getElementById("menu_bar");
    menuBar.classList.toggle("hidden");
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
