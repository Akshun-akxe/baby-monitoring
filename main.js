img = "";
status = "";
objects = [];
sound = "";

function preload() {
    sound = loadSound('siren.mp3');
}

function setup() {
    canvas = createCanvas(640, 420);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
}

function modelLoaded() {
    console.log("Model Loaded");
    status = true;
}

function gotResult(error, results) {
    if (error) {
        console.log("error");
    }
    console.log(results);
    objects = results;
}

function draw() {
    image(video, 0, 0, 640, 420);

    if (status != "") {
        objectDetector.detect(video, gotResult);
        for (i = 0; i > objects.length; i++) {
            document.getElementById("status").innerHTML = "Status : Person Not Detected";

            sound.play();
            sound.volume(6);
        }
    }
}