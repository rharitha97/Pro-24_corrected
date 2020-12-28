class Paper {
    constructor(x,y,radius){
       var options = {
           isStatic:false,
           density:1.2,
           friction: 0.5,
           restitution:0.3
       };
       
       this.x = x;
       this.y =y;
       this.r = radius;
       this.body = Bodies.circle(this.x, this.y, this.r/2, options);
       World. add(world, this. body);
   }
   
   display () {
   var paperPosition = this . body. position;
   push();
   translate(paperPosition . x, paperPosition .y) ;
   ellipseMode(CENTER) ;
   strokeWeight(3 ) ;
   fill(255,255,0);
   ellipse(0, 0,this. r, this.r);
   pop ( ) ;
       }
    }     
   
   
   
   
   
   
   
   
   
   
   
   