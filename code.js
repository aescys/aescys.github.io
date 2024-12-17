//MOUSE TRACKER BACKEND
document.addEventListener('mousemove', function(event) {
    let xStatement = document.querySelector("#xCoord");
    let yStatement = document.querySelector("#yCoord");
    xStatement.textContent = `X Pos: ${event.clientX}`;
    yStatement.textContent = `Y Pos: ${event.clientY}`;
});