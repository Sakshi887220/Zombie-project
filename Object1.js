class Object1{

    constructor(x, y, width, height){
         var options={
    
             restitution:0.8,
             friction:0.5,
             density:0.3
         }
     this.object1=Bodies.rectangle(x, y, width, height, options);
     this.width=width;
     this.height=height;
     this.image=loadImage("stomach.png");
     World.add(world, this.object1);
    
    }
    display(){
    
        var pos=this.object1.position
        var angle=this.object1.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
         imageMode(CENTER);
         image(this.image, 0, 0, this.width, this.height)
         pop();
    }
    }