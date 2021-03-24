class pp {
    constructor(x, y, radius){
        var options = {
            restituition :0.8,
            density:0.5,
            friction:0.4,
            
        }

this.polygon = Bodies.circle(x, y, radius)
World.add(world, this.polygon);
this.r= radius;
this.image = loadImage("polygon.png")
    }

display(){
var pos = this.polygon.position;
image (this.image, pos.x, pos.y, 40, 40)

}

}