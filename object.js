class Object{

constructor(x, y, width, height){
     var options={

         restitution:0.8,
         friction:0.5,
         density:0.3
     }
 this.object2=Bodies.rectangle(x, y, width, height, options);
 this.width=width;
 this.height=height;
 this.image=loadImage("face1.png");
 World.add(world, this.object2);

}
display(){

    var pos=this.object2.position
    var angle=this.object2.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
     imageMode(CENTER);
     image(this.image, 0, 0, this.width, this.height)
     pop();
}
}