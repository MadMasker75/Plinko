class Plinko{
    constructor(x,y,r){
        var options = {
             isStatic:true
        }
        this.x=x;
        this.y=y;
        this.r=r;
        this.body= Bodies.circle(x, y, this.r, options);
        World.add(world, this.body);
    }
    display(){
        var pos=this.body.position;
        ellipseMode(RADIUS); 
        fill(255,255,255); 
        ellipse(pos.x,pos.y,this.r,this.r);
        
        
        
      }
}   