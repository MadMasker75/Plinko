const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies; 

var engine, world;

var par = [];
var pli = [];
var div = [];

var divh = 300 ;

function setup() {
  createCanvas(480,800);

  engine = Engine.create();
  world = engine.world;

  ground = new Ground(440,height,1200,20); 

  if(frameCount%80===0){
    par.push(new Particle(random(width/2-10, width/2+10),10,10));
}

for (var i = 40; i <=width; i = i + 50) {
  pli.push(new Plinko(i,75,10));
}
for (var i = 15; i <=width-10; i = i + 50) {
  pli.push(new Plinko(i,175,10));
}

for (var i = 40; i <=width-10; i = i + 50) {
  pli.push(new Plinko(i,275,10));
}
for (var i = 15; i <=width-10; i = i + 50) {
  pli.push(new Plinko(i,375,10));
}

for (var i = 40; i <=width-10; i = i + 50) {
  pli.push(new Plinko(i,475,10));
}

for (var k = 0; k <=width; k = k + 80) {
    div.push(new Div(k, height-divh/2, 10, divh));
}
}

function draw() {
   
  background(0,0,0); 
  Engine.update(engine);
  ground.display();

  for (var j = 0; j < par.length; j++){
    par[j].display();
}

for (var i = 0; i < pli.length; i++){
  pli[i].display();
}

  for (var k = 0; k < div.length; k++){
    div[k].display();
}
  drawSprites();
  
  
}
