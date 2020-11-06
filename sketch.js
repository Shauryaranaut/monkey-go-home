
var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var FoodGroup, obstacleGroup;
var survivalTime=0;
var score=0;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(400,400);
  monkey=createSprite(80,315,20,20);
  monkey.addAnimation("moving",monkey_running);
  monkey.scale=0.1;
  
  ground=createSprite(400,350,900,10);
  ground.velocityX=-4;
  ground.x=ground.width/2;
  console.log(ground.x);

 FoodGroup = createGroup(); 
obstacleGroup = createGroup();
}


function draw() {
background(255);
  if (ground.x<0) {
    ground.x=ground.width/2;
  }
  
     if (keyDown("space")) {
    monkey.velocityY=-12;
     }
  
 
 
  
  monkey.velocityY= monkey.velocityY+0.8;
  
  monkey.collide(ground);
  obstacleGroup.collide(monkey);

  stroke("white");
  textSize(20);
  fill("white");
  text("score :" + score, 370,50);
  
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime=Math.ceil(frameCount/frameRate())
  text("survival time :" + survivalTime, 100, 50);
  
  food();
  rock();
  
  drawSprites();
  
}

function food() {
  if (frameCount% 80=== 0 ) {
    banana=createSprite(400,Math.round(random(120,200)),10,10)
    banana.addImage("banana",bananaImage);
    banana.velocityX=-3;
    banana.scale=0.1;
    FoodGroup.add(banana);
    banana.lifetime=140;
  }
}

function rock() {
  if (frameCount% 300=== 0) {
    obstacle=createSprite(400,300,100,100);
    obstacle.addImage("obstacle",obstacleImage);
    obstacle.velocityX=-2;
    obstacle.scale=0.3;
    obstacleGroup.add(obstacle);
    obstacle.lifeTime=200;
  }
}




