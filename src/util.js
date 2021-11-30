import * as posenet from "@tensorflow-models/posenet";
var t=0;
const color = "aqua";
export function getMediaStreamConstraints(facingMode, frameRate) {
  return {
    audio: false,
    video: {
      facingMode,
      frameRate
    }
  }
}

export function getConfidentPoses(poses, minPoseConfidence, minPartConfidence) {
  return poses
    .filter(({ score }) => score > minPoseConfidence)
    .map(pose => ({
      ...pose,
      keypoints: pose.keypoints.filter(({ score }) => score > minPartConfidence)
    }))
}
function audioplay(t,audio){
if(t==0){
  audio.play();
}
}
export function drawKeypoints(ctx, keypoints) {
  var avgScore = 0;
  var score_sum=0;
  var n =0;
  keypoints.forEach(({ position , part, score}) => {
    const { x, y } = position
    n = n+1;
    score_sum += score;
    ctx.beginPath()
    ctx.arc(x, y, 5, 0, 2 * Math.PI, false)
    ctx.fillStyle = "aqua"
    ctx.fill()
    ctx.fillText(part,x,y);
  })
  avgScore = score_sum/n;
  console.log(avgScore);
  
if(avgScore < 0.90 ){
     var audio = new Audio('/move_forward.mp3')
     audioplay(t,audio)
  
  } 

if(avgScore > 0.90 ){
    var audio = new Audio('/correct.mp3')
   
  
    
    audioplay(t,audio)
  
  }
}
export function drawSegment([ay, ax], [by, bx], color, scale, ctx) {
  ctx.beginPath();
  ctx.moveTo(ax * scale, ay * scale);
  ctx.lineTo(bx * scale, by * scale);
  ctx.lineWidth = lineWidth;
  ctx.strokeStyle = color;
  ctx.stroke();
}
function toTuple({ y, x }) {
  return [y, x];
}

export function drawSkeleton(ctx, minConfidence, keypoints, scale = 1) {
  // const adjacentKeyPoints = posenet.getAdjacentKeyPoints(
  //   keypoints,
  //   minConfidence
  // );
  console.log(keypoints);

  keypoints.forEach((keypoints) => {
    drawSegment(
      toTuple(keypoints[0].position),
      toTuple(keypoints[1].position),
      color,
      scale,
      ctx
    );
  });
}
