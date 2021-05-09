
  //polygon.x = polygonBody.body.position.x
  
  class Polygon{
    constructor(x, y, width, height) {
        var options = {
          'restitution':0.8,
          'friction':1.0,
          'density':1.0,
          'scale' : 0.1,     
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.image = loadImage("polygon.png");
        this.width = width;
        this.height = height;
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        var pos= this.body.position;
        image(this.image, this.body.position.x, this.body.position.y,50,50);
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        imageMode(CENTER);
        pop();
      }
}
