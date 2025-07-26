/* Mouse Tracker Backend */
document.addEventListener('mousemove', function (e) {
    let xCoord = e.clientX;
    let yCoord = e.clientY;
    document.getElementById("xCoord").innerHTML = "X: " + xCoord;
    document.getElementById("yCoord").innerHTML = "Y: " + yCoord;
});