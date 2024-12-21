//MOUSE TRACKER BACKEND
document.addEventListener('mousemove', function(event) {
    //finds the paragraph elements that will contain the x and y coords
    let xStatement = document.querySelector("#xCoord");
    let yStatement = document.querySelector("#yCoord");
    //provides the paragraphs with their content
    xStatement.textContent = `X Pos: ${event.clientX}`;
    yStatement.textContent = `Y Pos: ${event.clientY}`;
});