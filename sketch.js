var drop1,drop2,drop3,drop4;

function preload(){

  //drop1 = loadImage("sprites/drop1.png");
  drop2 = loadImage("sprites/drop2.png");
  drop3 = loadImage("sprites/drop3.png");
  drop4 = loadImage("sprites/drop4.png");
}

function setup() {
  createCanvas(1280,607);
  
  //drop1 = createSprite(100,100,10,10);
  dropsGroup = new Group();
}

function draw() {
  background(255,255,255);
  spawnDrops();  
  drawSprites();
}

function spawnDrops() {
  if (frameCount % 1 === 0) {
    var drops = createSprite(600,0,40,10);
    var rand = Math.round(random(1,3));
    switch(rand) {
      case 1: drops.addImage(drop2);
              break;
      case 2: drops.addImage(drop3);
              break;
      case 3: drops.addImage(drop4);
              break;
      default: break;
    }
    drops.scale = 0.5;
    drops.x = random(0,1280);
    //drops.addImage(cloudImage);
    //drops.scale = 0.5;
    drops.velocityY = random(15,25);
    
    drops.lifetime = 200;
    
    dropsGroup.add(drops);
  }
  
}