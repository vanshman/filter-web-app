noseX = 0;
noseY = 0;

function preload(){
    clown_nose = loadImage("https://i.postimg.cc/bJsNVRnv/moustache.png");
}
function setup(){
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on("pose", gotPoses)
}
function modelLoaded(){
    console.log("posenet initialized");
}
function take_snapshot(){
    save("filter.png");
}
function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
    }
}
function draw(){
    image(video, 0, 0, 300, 300);
    image(clown_nose, noseX - 25, noseY - 3, 50, 50);
}
