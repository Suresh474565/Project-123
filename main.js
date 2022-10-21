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
{

console.log(results);

}

}

function draw()
{

background('#21cca4');
textSize(difference);
fill('#2456a6');
text('MANISH',x_wristL,x_wristR);

}

function gotPoses(results)
{

if(results.length>0)
{

console.log(results);
nose_x=results[0].pose.nose.x;
nose_y=results[0].pose.nose.y;
console.log("Nose X value ="+nose_x + "Nose y value =" + nose_y);

x_wristL=results[0].pose.leftWrist.x;
x_wristR=results[0].pose.rightWrist.x;
difference= floor(x_wristL - x_wristR);

console.log("Right wrist X value =" + x_wristR + "Right wrist X value =" + x_wristL + "difference ="+difference);

}

}
