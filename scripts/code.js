let content = document.getElementById("content");

document.getElementById("1180Content").addEventListener('click', (event) => {
    content.inntHTML = ```
    <div id=""> 

    </div>
    ```;
});

document.getElementById("2200Content").addEventListener('click', (event) => {
    content.inntHTML = ```
    <div id=""> 

    </div>
    ```;
});

document.getElementById("programContent").addEventListener('click', (event) => {
    content.inntHTML = ```
                        <div id="prog1">
                            <hr>
                            <h1>Mouse Tracker Program</h1>
                            <div id="mouseTracker">
                                <div class="line">
                                    <h2>X Position: </h2>
                                    <h2 id="xPos"></h2>
                                </div>
                                <div class="line">
                                    <h2>Y Position: </h2>
                                    <h2 id="yPos"></h2>
                                </div>
                            </div>
                            <hr>
                        </div>
    ```;
});

document.addEventListener("mousemove", updatePositions);

function updatePositions(event) {
    let xPos = document.getElementById("xPos");
    let yPos = document.getElementById("yPos");
    xPos.innerHTML = event.clientX;
    yPos.innerHTML = event.clientY;

}