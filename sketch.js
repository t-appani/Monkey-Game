var monkey, monkey_running;
var banana, bananaImage, obstacle, obstacleImage;
var bananaGroup, obstacleGroup;
var ground, invisibleGround;
var survivalTime = 0;

function preload() {


  monkey_running = loadAnimation("sprite_0.png", "sprite_1.png", "sprite_2.png", "sprite_3.png", "sprite_4.png", "sprite_5.png", "sprite_6.png", "sprite_7.png", "sprite_8.png")

  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");

}

function setup() {
  createCanvas(400, 400);

  monkey = createSprite(80, 315, 20, 20);
  monkey.scale = 0.1;
  monkey.addAnimation("running", monkey_running);

  ground = createSprite(400, 350, 800, 10);
  ground.velocityX = -4;
  ground.x = ground.width / 2;
  console.log(ground.x);

  invisibleGround = createSprite(400, 350, 400, 10);
  invisibleGround.visible = false;

    bananaGroup = createGroup();
  obstaclesGroup = createGroup();

}

function draw() {
  background(1000);
  
  stroke("black");
  textSize(20);
  survivalTime = Math.ceil(frameCount/frameRate())
  text("Survival Time: " + survivalTime, 100, 50)

  if (ground.x < 0) {
    ground.x = ground.width / 2;
  }

  if (keyWentDown("space") && monkey.y >= 310) {
    monkey.velocityY = -13;
    
  }
  monkey.velocityY = monkey.velocityY+0.5; 
  monkey.collide(ground);

  spawnBananas();
  spawnObstacles();
  
  drawSprites();
}

function spawnBananas() {
  //write code here to spawn the bananas
  if (frameCount % 80 === 0) {
    var banana = createSprite(350,120,40,10);
    banana.y = Math.round(random(160,240));
    banana.addImage(bananaImage);
    banana.scale = 0.1;
    banana.velocityX= -3;
    
     //assign lifetime to the variable
    banana.lifetime = 200;
    
    //add each banana to the group
    bananaGroup.add(banana);
  }
}


function spawnObstacles(){
 if (frameCount % 300 === 0){
   var obstacle = createSprite(350,330,10,40);
   obstacle.velocityX = -4;
    obstacle.addImage(obstaceImage);

    //assign scale and lifetime to the obstacle           
    obstacle.scale = 0.1;
    obstacle.lifetime = 300;
   
   //add each obstacle to the group
    obstaclesGroup.add(obstacle);
 }
}
