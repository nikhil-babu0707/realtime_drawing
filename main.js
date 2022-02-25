let noseX = 0;
let noseY = 0;
let difference = 0;
let rightWristX = 0;
let leftWristX = 0;



function setup() {
    let video = createCapture(VIDEO);
    video.size(550, 500);

    let canvas = createCanvas(550, 500);
    canvas.position(560, 150);

    let poseNet = ml5.poseNet(video, modelloaded);
    poseNet.on('pose', gotPoses);
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
        rightWristX = results[0].pose.rightWrist.x;
        difference = floor(leftWristX - rightWristX);

        console.log("left wrist x = " + leftWristX + "right wrist x = " + rightWristX + "difference = " + difference);
    }
}

function draw() {
    background('#969A97');
    document.getElementById("square_side").innerHTML = "width and height of the square is : " + difference + "px";
    fill('#F90093');
    stroke('#F90093');
    square(noseX, noseY, difference);
}