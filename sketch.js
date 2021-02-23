var bgImage,bg2Image;
var wall1,wall2,wall3;
var hen,hen1,hen2,hen3,hen4,henImage,henS;
var basket,bsImage;
var eggs,eggImage,eggS;
var playButton,playImage;
var ground,henline;
var score=0 , eggsBroken = 0;
var redImg,blueImg,purpleImg;
var eggsGroup,redGroup,blueGroup,purpleGroup;
var gameState;
var PLAY=1;
var END=0;
var restart,restartImage;
var resetB,resetBI;
var level=1;
var rules,rules2;
var rulesImg;
var rules3;
function preload(){
  
  bgImage = loadImage("orange.jpeg");
  bg2Image= loadImage("hen back.jpeg");
  eggImage = loadImage("egg copy.png");
  bsImage = loadImage("basket copy.png");
  henImage = loadImage("chicken.jpeg");
  playImage = loadImage("Play-Button.gif");
  
  redImg = loadImage("redegg.png");
  blueImg = loadImage("blue egg (1).png");
  purpleImg = loadImage("purple egg (1).png");
  
  eggS = loadSound("checkpoint sound.ogg");
  henS = loadSound("chicken sound.ogg");
  restartImage=loadImage("reset.png");
  resetBI = loadImage("restart.png");
  
  rulesImg = loadImage("RULESMAIN (1).png");
  //rules2 = loadImage("rules.jpeg");
}

function setup() {
  createCanvas(400,400);
  
  wall3 = createSprite(200,200,400,400);
  wall3.visible=false;
  restart=createSprite(200,200,50,50);
  restart.addImage(restartImage);
  restart.visible=false;
 
  
  score = 0;
  
    wall2 = createSprite(200,200,400,400);
    wall2.addImage(bg2Image);
    wall2.scale=2.5;
    wall2.visible=false;
    
    ground = createSprite(200,390,400,10);
    ground.shapeColor="brown";
    ground.visible=false;
    
    henline = createSprite(200,100,400,10);
    henline.shapeColor="brown";
    henline.visible=false;
    
    hen = createSprite(50,70,50,50);
    hen.addImage(henImage);
    hen.scale=0.3;
   // henS.loop();
  hen.visible=false;
    
    hen1 = createSprite(130,70,50,50);
    hen1.addImage(henImage);
    hen1.scale=0.3;
    //henS.play();
   hen1.visible=false;
    
    hen2 = createSprite(210,70,50,50);
    hen2.addImage(henImage);
    hen2.scale=0.3;
    //henS.play();
  hen2.visible=false;

    hen3 = createSprite(280,70,50,50);
    hen3.addImage(henImage);
    hen3.scale=0.3;
    //henS.play();
  hen3.visible=false;

    hen4 = createSprite(350,70,50,50);
    hen4.addImage(henImage);
    hen4.scale=0.3;
    //henS.play();
  hen4.visible=false;

    basket = createSprite(200,345,10,10);
    basket.addImage(bsImage);
    basket.scale=0.4; 
    basket.visible=false
  
  
  wall1 = createSprite(200,200,400,400);
  wall1.shapeColor = "black";
  wall1.addImage(bgImage);
  wall1.scale=2.5;
  
   playButton = createSprite(190,210,50,40);
  playButton.addImage(playImage);
  playButton.scale=0.5;
  
rules = createSprite(200,200,400,400);
  rules.addImage(rulesImg);
  rules.scale=0.6;
  rules.visible=false;
  
  eggsGroup = new Group();
  redGroup = new Group();
  blueGroup = new Group();
  purpleGroup = new Group();
  
}

function draw() {
  background("red"); 
  
  
  if(mousePressedOver(playButton)){
    gameState=PLAY;
  }
  if(gameState===PLAY){
    playButton.visible=false;
    wall1.visible=false;
    wall2.visible=true;
    ground.visible=true;
    henline.visible=true;
    hen.visible=true;
    hen1.visible=true;
    hen2.visible=true;
    hen3.visible=true;
    hen4.visible=true;
    basket.visible=true;
    wall3.visible=false;
     basket.x=mouseX;

  wall3.depth=wall1.depth;
    wall1.depth+=1;
       
        restart.visible=false;

    eggs();
  redeggs();
  blueeggs();
  purpleeggs();
  eggScores();
   eggsbroke();
    
  
    
    if(eggsBroken>15)
   {
  gameState=END;
   }
            
 
  }else if(gameState===END){
      wall1.visible=false;
    playButton.visible=false;
    wall2.visible=false;
    wall3.visible=true;
    restart.visible=false;
    ground.visible=false;
    henline.visible=false
    hen.visible=false;
    hen1.visible=false;
    hen2.visible=false;
    hen3.visible=false;
    hen4.visible=false;
    basket.visible=false; 
    rules3.visible=false;
    
           restart.visible=false;
   wall3.visible=true;
      
      restart.depth=wall3.depth;
      restart.depth+=1;
    
    if(mousePressedOver(wall3)){
      restarts();
    }

  }
  
  //  //if(mousePressedOver(rules)){
  //   rule();
   // }
  
   drawSprites();
 text("Score : "+ score, 300,20);
text("EggsBroken : "+ eggsBroken, 10,20);
  if(score<10){
    level=1;
    fill("black");
   text("LEVEL :"+level,10,130);
  }
  if(score>=10){
   level=2
    fill("black");
  text("LEVEL:"+level,10,130)

  }
  if(score>20){
  level=3;
 fill("black");
  text("LEVEL:"+level,10,130)

  }
  if(score>30){
   level=4;
 fill("black");
  text("LEVEL:"+level,10,130)


  }
  if(score>400){
  
  level=5;
 fill("black");
  text("LEVEL:"+level,10,130)

  }
  if(score>500){
   
    wall4=createSprite(200,200,400,400);
    textSize(30)
    fill("orange");
  text("YOU WIN",50,200);
    
    basket.destroy();
    eggsGroup.destroyEach();
    redGroup.destroyEach();
    blueGroup.destroyEach();
    purpleGroup.destroyEach();
  }
  
  fill("blue");
//  text("when over click HERE to restart",120,300);
  fill("lightgreen")
  text("HERE",200,350);
  
   fill("yellow");
  text("press space to check rules",120,395);
 
  

  if(keyDown("space")){
    rules.visible=true;
  }else {
    rules.visible=false;
  }
}

function restarts(){
    gameState=PLAY;

  wall3.visible=false;
  eggsGroup.destroyEach();
  redGroup.destroyEach();
  blueGroup.destroyEach();
  purpleGroup.destroyEach();

  eggsBroken=0;
  score=0;
    restart.visible=false;

}

function eggs(){
  if (frameCount % 70 === 0) {
    var eggs = createSprite(200,120,40,10);
    eggs.x = Math.round(random(0,400));
    eggs.addImage(eggImage);
    eggs.scale = 0.2;
    eggs.velocityY = (3 + score/25);
    
     //assign lifetime to the variable
    eggs.lifetime = 200;
    
    //adjust the depth
   // eggs.depth=wall2.depth;
    //  eggs.depth+=1;
    eggsGroup.add(eggs);
    
   }
 
}
function redeggs(){
  if (frameCount % 90 === 0) {
    var redeggs = createSprite(200,120,40,10);
    redeggs.x = Math.round(random(0,400));
    redeggs.addImage(redImg);
    redeggs.scale = 0.5;
    redeggs.velocityY = (3 + score/25);
    
     //assign lifetime to the variable
    redeggs.lifetime = 200;
    
    //adjust the depth
   // redeggs.depth=wall2.depth;
      //redeggs.depth+=1;
    redGroup.add(redeggs);
    
   }
 
}
function blueeggs(){
  if (frameCount % 130 === 0) {
    var blueeggs = createSprite(200,120,40,10);
    blueeggs.x = Math.round(random(0,400));
    blueeggs.addImage(blueImg);
    blueeggs.scale = 0.5;
    blueeggs.velocityY = (3 + score/25);
    
     //assign lifetime to the variable
    blueeggs.lifetime = 200;
    
    //adjust the depth
   // redeggs.depth=wall2.depth;
      //redeggs.depth+=1;
    blueGroup.add(blueeggs);
    
   }
}
function purpleeggs(){
  if (frameCount % 190 === 0) {
    var purpleeggs = createSprite(200,120,40,10);
    purpleeggs.x = Math.round(random(0,400));
    purpleeggs.addImage(purpleImg);
    purpleeggs.scale = 0.5;
    purpleeggs.velocityY = (3 + score/25);
    
     //assign lifetime to the variable
    purpleeggs.lifetime = 200;
    
    //adjust the depth
   // redeggs.depth=wall2.depth;
      //redeggs.depth+=1;
    purpleGroup.add(purpleeggs);
    
   }
}

function eggScores(){
if(eggsGroup.isTouching(basket)){
  score+=1;
  eggsGroup.destroyEach();
eggS.play();
}
  
  if(redGroup.isTouching(basket)){
  score+=2;
  redGroup.destroyEach();
eggS.play();
}
  
  if(blueGroup.isTouching(basket)){
  score+=3;  
  blueGroup.destroyEach();
eggS.play();
}
  
 if(purpleGroup.isTouching(basket)){
  score+=5;
  purpleGroup.destroyEach();
   eggS.play();
} 
}

function eggsbroke(){
  if(eggsGroup.isTouching(ground)){
    eggsBroken+=1;
      eggsGroup.destroyEach();

  }
  
  if(redGroup.isTouching(ground)){
    eggsBroken+=1;
      redGroup.destroyEach();

  }
  
  if(blueGroup.isTouching(ground)){
    eggsBroken+=1;
      blueGroup.destroyEach();

  }
  
  if(purpleGroup.isTouching(ground)){
    eggsBroken+=1;
      purpleGroup.destroyEach();

  }
 
}

//function rule(){
 // rules3 = createSprite(200,200,300,300);
  //rules3.addImage(rulesImg);
  
 // if(keydown("space"))
//}