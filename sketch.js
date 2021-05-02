var savior,saviorImg;
var people1,people2,people1Img,people2Img;
var ground
var gameState = 1 //0=Front Page

var wall1,wall2,wall3,wall4,wall5,wall6,wall7,wall8,wall9,wall10,wall11,wall12,wall13,wall14,wall15,wall16,wall17;
var fireImg,fireGroup
/*
 1=fire
 2=earthquake
 3=self defence / flood

 a=self rescue, b=rescue people
 */

function preload(){
saviorImg = loadImage("images/pc.png")
//people1Img = loadImage("images")
fireImg = loadImage ("images/fire.gif")
}
function setup(){
createCanvas(800,500);
ground = createSprite(400,470,800,20);
savior  = createSprite(430,60,10,10);
savior.addImage(saviorImg);
savior.scale = 0.1
savior.velocityY=0;
savior.debug= true
savior.setCollider("rectangle",0,0,300,550)

fireGroup = new Group()
}
function draw(){
background (255)  
text(mouseX + " , "+ mouseY, mouseX,mouseY)
building()
fire()
savior.collide(wall1)
savior.collide(wall2)
savior.collide(wall3)
savior.collide(wall4)
savior.collide(wall5)
savior.collide(wall6)
savior.collide(wall7)
savior.collide(wall8)
savior.collide(wall9)
savior.collide(wall10)
savior.collide(wall11)
savior.collide(wall12)
savior.collide(wall13)
savior.collide(wall14)
savior.collide(wall15)
savior.collide(wall16)
savior.collide(wall17)
savior.collide(ground)

savior.velocityY +=1

if(gameState === 1){
  if (keyIsDown(UP_ARROW)){
    savior.velocityY = -10;   
   }
   else if (keyIsDown(RIGHT_ARROW)){
    savior.x += 3;   
   }
   else if (keyIsDown(LEFT_ARROW)){
    savior.x -= 3;   
   }
    if(fireGroup.isTouching(savior))
    {
      textSize(25)
      fill("red")
      text("Game Over!", 125,200)
      text("You were unable to survive",50,260)
    }
}



drawSprites() 
}
function building(){
  wall1 = createSprite(400,235,10,450);  //left wall
  wall2 = createSprite(700,210,10,390);  //right wall
  wall3 = createSprite(550,10 ,310,10);  //roof
  wall4 = createSprite(420,100,50,10);   // stair 1a
  wall5 = createSprite(450,120,10,50);   // stair 1b
  wall6 = createSprite(470,140,50,10);   // stair 1c
  wall7 = createSprite(490,160,10,50);   // stair 1d
  wall8 = createSprite(528,180,250,10);  // floor 2
  wall9 = createSprite(680,250,50,10);   // stair 2a
  wall10 = createSprite(660,270,10,50);   // stair 2b
  wall11 = createSprite(640,290,50,10);  // stair 2c
  wall12 = createSprite(620,310,10,50);  // stair 2d
  wall13 = createSprite(572,330,250,10); // floor 1
  wall14 = createSprite(420,400,50,10);   // stair 3a
  wall15 = createSprite(450,420,10,50);   // stair 3b
  wall16= createSprite(470,440,50,10);   // stair 3c
  wall17 = createSprite(490,455,10,40);   // stair 3d
 
}
function fire(){
  if(frameCount%120 === 0){
    var rand1 = Math.round(random(500,650))
    var rand2 = Math.round(random(450,600))
    var rand3 = Math.round(random(500,680))
    var fire1 = createSprite(rand1,155,10,10)
    fire1.addImage(fireImg);
    var fire2 = createSprite(rand2,305,10,10)
    fire2.addImage(fireImg);
    var fire3 = createSprite(rand3,440,10,10)
    fire3.addImage(fireImg);
    fire1.lifetime = 200
    fire2.lifetime = 200
    fire3.lifetime = 200
    fire1.scale = 0.1
    fire2.scale = 0.1
    fire3.scale = 0.1
    fireGroup.add(fire1)
    fireGroup.add(fire2)
    fireGroup.add(fire3)

      
  }
}