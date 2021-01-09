const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies; 

var engine, world;

var par = [];
var pli = [];
var div = [];

var divh = 300 ;

var score =0;
function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);


   for (var k = 0; k <=width; k = k + 80) {
     div.push(new Div(k, height-divh/2, 10, divh));
   }


    for (var j = 75; j <=width; j=j+50) 
    {
    
       pli.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       pli.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       pli.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       pli.push(new Plinko(j,375));
    }

    

    
}
 


function draw() {
  background("black");
  textSize(20)
 //text("Score : "+score,20,30);
  Engine.update(engine);
  ground.display();
  
   for (var i = 0; i < pli.length; i++) {
     
     pli[i].display();
     
   }
   if(frameCount%60===0){
     par.push(new Particle(random(width/2-30, width/2+30), 10,10));
     score++;
   }
 
  for (var j = 0; j < par.length; j++) {
   
     par[j].display();
   }
   for (var k = 0; k < div.length; k++) {
     
     div[k].display();
   }
}
