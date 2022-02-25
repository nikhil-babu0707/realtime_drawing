noseX = 0;
noseY = 0;
difference = 0;
rightWristX = 0;
leftWristX = 0;



function setup() {
    video = createCapture(VIDEO);
    video.size(550, 500);

    canvas = createCanvas(550, 500);
    canvas.position(560, 150);

    PoseNet = ml5.poseNet(video, modelloaded);
    PoseNet.on('pose', gotPoses);
}

function modelloaded() {
    console.log('PoseNet is Initialized!');
}

function gotPoses(results) {
    if (results.length > 0) {
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("noseX = " + noseX + "noseY = " + noseY);

        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.leftWrist.x;
        difference = floor(leftWristX - rightWristX);

        console.log("left wrist x = " + leftWristX + "right wrist x = " + rightWristX + "difference = " + difference);
    }
}

function draw() {
    background('#969A97');
    document.getElementById("square_side").innerHTML = "width and height of the square is : " + difference + "px";
    fill('#F90093');
    stroke('#A90231');
    square(noseX, noseY, difference);
}