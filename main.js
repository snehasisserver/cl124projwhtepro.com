function setup(){
video = createCapture(VIDEO);
video.size(550,500);
video.position(150,150);
    var canvas = createCanvas(550,550);
    canvas.position(850,150);

    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}
function modelLoaded(){
    console.log("PoseNet is initialised");
}
function draw(){
background("#4455A6")
}
function gotPoses(results){
    if(results.length > 0){
        console.log(results);
    }
}