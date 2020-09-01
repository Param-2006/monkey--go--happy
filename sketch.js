var bananaImage,scene,score, ground;

var backImage, player_running,player,obstacleImage;

var fruitGroup,obstacleGroup;


var score=0;


function preload(){
  backImage=loadImage("jungle.jpg");
  player_running=
    loadAnimation("Monkey_01.png","Monkey_02.png","Monkey_03.png","Monkey_04.png","Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_08.png","Monkey_09.png","Monkey_10.png");
  
  bananaImage=loadImage("banana.png");
  obstacleImage=loadImage("stone.png");
}

function setup() {
  createCanvas(400, 400);
  scene=createSprite(50,40,200,200);
  scene.addImage(backImage);
  
  player = createSprite(50,350,40,40);
  player.addAnimation("monkey",player_running);
  player.scale = 0.15;
  
  ground = createSprite(200,390,400,10);
  ground.visible = false;
  
  fruitGroup=new Group();
  obstacleGroup=new Group();
}

function draw() {
  background(220);
  
  scene.velocityX=-3;
  
 if(scene.x<0){
  scene.x=scene.width/2;
}
  
  if(fruitGroup.isTouching(player)){
    fruitGroup.destroyEach();
    score=score+2;
  
  
  switch(score){
    case 10: player.scale=0.12;
      break;
    case 20: player.scale=0.14;
      break;
    case 30: player.scale=0.16;
      break;
      case 40: player.scale=0.18;
      break;
      
          
  }
  }
  
  if(obstacleGroup.isTouching(player)){
    obstacleGroup.destroyEach();
    player.scale=0.10;
  }
  
  banana();
  obstacles();
  
  if (keyDown("space")&& player.y>300){
    player.velocityY=-10;
  }
  
  player.velocityY=player.velocityY + 0.8;
  
  
  stroke("white");
  textSize(20);
  fill("white");
  
  player.collide(ground);
  
  //console.log(player.y);
  
  
  
  
  
  drawSprites();
  text("Score:"+ score, 300,50);
}

function banana(){
  if(World.frameCount % 80 === 0){
  var banana=createSprite(250,280,10,10);
  banana.addAnimation("banana",bananaImage);
  banana.scale=0.05;
  
  banana.y=Math.round(random(250,280));
  banana.x=400;
    
    banana.velocityX=-7;   
     
    fruitGroup.add(banana);
  
  }
  
}


function obstacles(){

if(World.frameCount % 300===0){
    //create obstacles and its animatin
    var obstacle=createSprite(280,335);
    obstacle.addAnimation("stone",obstacleImage);
    obstacle.scale=0.15;
    obstacle.y=(350);
    obstacle.x=400;
    
    //make the obstacle move left
    obstacle.velocityX=-9;
    
      obstacleGroup.add(obstacle);
}
}