noseX=0;
noseY=0;
difference= 0;
rightWristX=0;
leftWristX= 0;
function setup() 
{
  video = createCapture(VIDEO);
  video.size(550, 500);
  canvas = createCanvas(550, 500);
  canvas.position(560, 150);
  posenet= ml5.poseNet(video, model_loaded);
  posenet.on('pose', gotPoses);
}

function model_loaded()
{
    console.log("posenet is started");
}

function gotPoses(results)
{
    if(results.length>0)
    {
    console.log(results);
    noseX = results[0].pose.nose.x;
    noseY = results[0].pose.nose.y;
    console.log("noseX="+ noseX +" noseY = " + noseY);

    leftWristX=results[0].pose.leftWrist.x;
    rightWristX=results[0].pose.rightWrist.x;

    difference=floor(leftWristX-rightWristX);
    console.log("leftWristX=" + leftWristX +"rightWristX=" + rightWristX);
    }
}

function draw()
{
    background(" rgb(226, 106, 252)");
    fill('#F90093');
    stroke('#F90093');
    square(noseX,noseY,difference);

    document.getElementById("squaresize").innerHTML=" the side of the square will be "+ difference + "px";
}