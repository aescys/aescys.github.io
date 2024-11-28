function menubarVisibility(event) {
    let menuBar = document.getElementById("title_bar");
    if (event.clientY >= 110) {
        menuBar.classList.add("hidden");
    }
    else {
        menuBar.classList.remove("hidden");
    }
}

document.addEventListener('mousemove', menubarVisibility);

document.addEventListener('mousemove', function(event) {
    let xStatement = document.querySelector("#xCoord");
    let yStatement = document.querySelector("#yCoord");
    xStatement.textContent = `X Pos: ${event.clientX}`;
    yStatement.textContent = `Y Pos: ${event.clientY}`;
});