function setup()
{

   
    video = createCapture(VIDEO); 
    video.size(650, 600);

canvas=createCanvas(600,600);
canvas.position(700,150);

posenet= ml5.poseNet(video,modelLoaded);
posenet.on('pose',gotPoses);

}

function draw()
{

background('#21cca4');

}

function modelLoaded()
{

console.log("model has been loaded");

}

function gotPoses(results)
{

if(results.length>0)
{

console.log(results);

}

}