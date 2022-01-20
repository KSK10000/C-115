function preload(){

}
function setup(){
    Canvas=createCanvas(300,290);
    Canvas.center();
    video=createCapture(VIDEO);
    video.size(300,290);
    video.hide();
    pose_net=ml5.poseNet(video,modelloaded);
    pose_net.on('pose',got_poses);
}
function draw(){
    image(video,0,0,300,290);
}
function take_snapshot(){
    save('downloaded.png');
}
function modelloaded(){
    console.log("Post Net Is Successfully Assigned");
}
function got_poses(results){
    if(results.length>0){
       
    
    console.log(results);
    nose_x=results[0].pose.nose.x;
    console.log("nose_x= "+nose_x);
    nose_y=results[0].pose.nose.y;
    console.log("nose_y= "+nose_y);
    }
}