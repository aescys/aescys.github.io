let content = document.getElementById("content");

document.getElementById("1180Content").addEventListener('click', (event) => {
    content.innerHTML = `
    <div id="classIntro"> 
        <hr>
        <h1>CS 1180</h1>
        <h2>Class Intro</h2>
        <div id="intro">
            <p>CS 1180 is Wright State University's intro to computer programming course. It is centered around learning the java language, one of the internet's most populous languages according to github's repository report. Check <a href="https://madnight.github.io/githut/#/pushes/2024/1" target="_blank">this</a> repo for more info.</p>
        </div>
        <h2>CLI Tutorial</h2>
        <div id="cli_tutorial">
            <p>WIP: Expect within 24 hours</p>
        </div>
        <h2>Installing Java's Toolkit</h2>
        <div id="java_install">
            <p>WIP: Expect within 24 hours</p>
        </div>
        <hr>
    </div>
    `;
});

document.getElementById("2200Content").addEventListener('click', (event) => {
    content.innerHTML = `
    <div id=""> 

    </div>
    `;
});

document.getElementById("programContent").addEventListener('click', (event) => {
    content.innerHTML = `
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
    `;
});

document.addEventListener("mousemove", updatePositions);

function updatePositions(event) {
    let xPos = document.getElementById("xPos");
    let yPos = document.getElementById("yPos");
    xPos.innerHTML = event.clientX;
    yPos.innerHTML = event.clientY;

}