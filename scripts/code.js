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
            <p>The Command Line Interface, CLI, is a way of navigating through and controlling your device using only words or tokens in the form of commands. It is an essential tool for every type of computer scientist, and it's the first step towards technical finesse. Joking, obviously. Find the tutorial <a href="siteOneOffs/code/cliTutorial.html" target="_blank">here</a>.</p>
        </div>
        <h2>Installing Java's Toolkit</h2>
        <div id="java_install">
            <p>You can find the guide for installing and putting to use the Java Development Kit <a href="siteOneOffs/code/jdkTutorial.html" target="_blank">here</a>. It is recommended that you are familiar with the command line or have completed the command line tutuorial shown above.</p>
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
                        <div id="prog2">
                            <hr>
                            <h1>Mac OS CLI Must Have</h1>
                            <p>If you are a macOS user and you are looking to get into programming you must learn to use the command line interface, and furthermore you must install a package manager for your command line interface.</p>
                            <h3>Homebrew is that package manager!</h3>
                            <p>And also, lucky for you I have a basic tutorial for the command line interface already posted on this site.. Check out WSU CS 1180 Content on the left, to find a fully polished CLI tutorial.</p>
                            <p>Go ahead and finish that up, and then come back here and run the command <a>/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"</a> in your terminal application</p>
                            <p>You now have a package manager.</p>
                            <p>For a cool starter package to see how capable the command line really is, try checking out yt-dlp listed on the footer of this website below</p>
                            <p>Now that you have homebrew installed, you can just run the command, "brew install yt-dlp"</p>
                            <p>Sidenote, you can verify this script yourself before installing it, just go to <a>https://brew.sh</a> and trust me when I tell you homebrew is <a id="italicize">the</a> package manager for macOS.</p>
                            <hr>
                        </div>
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