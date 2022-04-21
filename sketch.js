var soccerplayer,soccerplayerImg
var soccerpitch,soccerpitchImg
var ball,ballImg
var gamestate="play"
function preload(){
  soccerplayerImg=loadImage("Images/Soccer player.png")
  ballImg=loadImage("Images/Soccer ball.png")
  soccerpitchImg=loadImage("Images/Soccer field background.jpg")
}



function setup() {
  createCanvas(600,800);

  soccerpitch=createSprite(300,300,width,height)
  soccerpitch.addImage(soccerpitchImg)
  soccerplayer=createSprite(100,200,5,5)
  soccerplayer.addImage(soccerplayerImg)
  soccerplayer.scale=0.3
  soccerpitch.velocityX=-1
 ballGroup=new Group 
}

function draw() {
  background(255,255,255);  

  if (gamestate==="play"){
    soccerplayer.y=World.mouseY
    if(soccerpitch.x<200){
      soccerpitch.x=400
       
    }
    Spawnballs()
    drawSprites();
  }


}
  
  function Spawnballs(){
    if(frameCount%180===0){
      var ball=createSprite(random)
      ball.addImage(ballImg)
      ball.velocityX=-1.5
      ballGroup.add(ball);
      ball.scale=0.1
  }







}
  
 
  




