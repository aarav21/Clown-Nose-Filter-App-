function preload () {
    img = loadImage("https://i.postimg.cc/mDxbM8TD/580b57fbd9996e24bc43bed5.png");
}

function setup (){
    canvas = createCanvas(500, 400);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(500,400);
    video.hide();
    pose = ml5.poseNet(video, modelLoaded);
    pose.on("pose", poses);

}

function draw(){
    image(video, 0,0, 500,400);
    input = document.getElementById("dropdown").value;
    Filter = eval(input);
    if(input == "BLUR"|| input == "POSTERIZE"){
        filter(Filter, 5)
    }
    else{
        filter(Filter);
    }
    
    image(img,x,y,30,30)

}

function modelLoaded(){
    console.log("model has loaded");

}
x = 0 
y = 0
function poses(results){
    if (results.length>0){
        console.log(results);
        x = results[0].pose.nose.x - 15;
        y = results[0].pose.nose.y - 15 ;  
    }
}

function takeSnapShot(){
    save("clownNoseImage.png");
}

