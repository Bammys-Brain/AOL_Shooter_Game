var logo, logoImage;

var bow , arrow,  background, redB, pinkB, greenB ,blueB ,arrowGroup;
var bowImage, arrowImage, green_balloonImage, red_balloonImage, pink_balloonImage ,blue_balloonImage, backgroundImage;

var arrow1;

function preload(){
  
  
  logoImage = loadImage("aolf_logo_1.png");
  
  //backgroundImage = loadImage("background0.png");
  
  arrowImage = loadImage("Sadhna arrow.png");
  bowImage = loadImage("bow0.png");
  red_balloonImage = loadImage("red_baloon_Stress.png");
  green_balloonImage = loadImage("green_baloon_Regret.png");
  pink_balloonImage = loadImage("pink_baloon_Depression.png");
  blue_balloonImage = loadImage("blue_baloon_selfDoubt.png");
  
}



function setup() {
  createCanvas(windowWidth, windowHeight);
  
  //creating background
  //background = createSprite(0,0,Width, Height);
  //background.addImage(backgroundImage);
  //background.scale = 1
  
  // creating bow to shoot arrow
  bow = createSprite(480,220,width-20,height-50);
  bow.addImage(bowImage); 
  bow.scale = 1.5;
  
   score = 0  
  redB= new Group();
  greenB= new Group()
  blueB= new Group();
  pinkB= new Group();
  arrowGroup= new Group();
  
  arrow1= createSprite(100, 100, 60, 10);
  arrow1.addImage(arrowImage);
  arrow1.scale = 0.5;
  
  logo = createSprite(width-100, height-30);
  logo.addImage(logoImage);
  logo.scale=0.05;
 
  
}

function draw() {

  background("white");
  // moving ground
   // background.velocityX = -3 

  //  if (background.x < 0){
    //  background.x = background.width/2;
   // }
  
  //moving bow
  bow.x = width-100;
  bow.y = World.mouseY
  arrow1.y = bow.y;
  arrow1.x = bow.x;
  
  
   // release arrow when space key is pressed
  if (touches.length>0 ||keyWentDown("space")) {
    createArrow();
    touches = []
    
  }
  
  //creating continous enemies
  var select_balloon = Math.round(random(1,4));
  
  if (World.frameCount % 100 == 0) {
    if (select_balloon == 1) {
      redBalloon();
    } else if (select_balloon == 2) {
      greenBalloon();
    } else if (select_balloon == 3) {
      blueBalloon();
    } else {
      pinkBalloon();
    }
  }
  
  if (arrowGroup.isTouching(redB)) {
  redB.destroyEach();
  arrowGroup.destroyEach();
    score=score+1;
}




 if (arrowGroup.isTouching(greenB)) {
  greenB.destroyEach();
  arrowGroup.destroyEach();
  score=score+3;
}



 if (arrowGroup.isTouching(blueB)) {
  blueB.destroyEach();
  arrowGroup.destroyEach();
  score=score+2;
}



if (arrowGroup.isTouching(pinkB)) {
  pinkB.destroyEach();
  arrowGroup.destroyEach();
  score=score+1;
}

  
  drawSprites();
    textSize(40);
    textFont("Georgia");
    text("Score: "+ score, width-550,height-560);
}


function redBalloon() {
 var red = createSprite(0,Math.round(random(20, 370)), 10, 10);
  red.addImage(red_balloonImage);
  red.velocityX = 4;
  red.lifetime = width;
  red.scale = 0.2;
  redB.add(red);
  red.setCollider("rectangle", 0, 0, 200, 800)
  red.debug=true;
}

function blueBalloon() {
  var blue = createSprite(0,Math.round(random(20, 370)), 10, 10);
  blue.addImage(blue_balloonImage);
  blue.velocityX = 3;
  blue.lifetime = width;
  blue.scale = 0.2;
  blueB.add(blue);
  blue.setCollider("rectangle", 0, 0, 200, 600)
  blue.debug=true;
}

function greenBalloon() {
  var green = createSprite(0,Math.round(random(20, 370)), 10, 10);
  green.addImage(green_balloonImage);
  green.velocityX = 5;
  green.lifetime = width;
  green.scale = 0.2;
  greenB.add(green);
  green.setCollider("rectangle", 0, 0, 200, 800)
  green.debug=true;
}

function pinkBalloon() {
  var pink = createSprite(0,Math.round(random(20, 370)), 10, 10);
  pink.addImage(pink_balloonImage);
  pink.velocityX = 3;
  pink.lifetime = width;
  pink.scale = 0.2;
  pinkB.add(pink);
  pink.setCollider("rectangle", 0, 0, 200, 600)
  pink.debug=true;
  
}


// Creating  arrows for bow
 function createArrow() {
  var arrow= createSprite(bow.x-50, 100, 60, 10);
  arrow.addImage(arrowImage);
 // arrow.x = 360;
  arrow.y=bow.y;
  arrow.velocityX = -6;  
  arrow.lifetime = 300;
  arrow.scale = 0.5;
   arrow.setCollider("rectangle", 10, 0, 260, 50);
  arrowGroup.add(arrow);
  
   arrow.debug = true;
   
}
