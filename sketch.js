const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground, stand1, stand2, s1;
function setup() {
  createCanvas(1200,700)
  engine = Engine.create();
  world = engine.world;

ground = new Ground(width/2, height-10, width, 20);
stand1= new Ground(590, 500, 350, 15);
stand2 = new Ground( 1000, 350, 280, 15 );

//first level of boxes
box1= new Box(450, 470, 35, 40);
box2= new Box(490, 470, 35, 40);
box3= new Box(530, 470, 35, 40);
box4= new Box(570, 470, 35, 40);
box5= new Box(610, 470, 35, 40);
box6= new Box(650, 470, 35, 40);
box7= new Box(690, 470, 35, 40);
box8= new Box(730, 470, 35, 40);

//second level of boxes

box9 = new Box(490,425, 35, 40);
box10 = new Box(530,425, 35, 40);
box11 = new Box(570,425, 35, 40);
box12 = new Box(610,425, 35, 40);
box13 = new Box(650,425, 35, 40);
box14 = new Box(690,425, 35, 40);

//third level of boxes
box15 = new Box(530,380, 35, 40);
box16 = new Box(570,380, 35, 40);
box17 = new Box(610,380, 35, 40);
box18 = new Box(650,380, 35, 40);

//4th level of boxes

box19 = new Box(570,335, 35, 40);
box20 = new Box(610,335, 35, 40);


sbox1= new Box(890, 320, 35, 40);
sbox2= new Box(930, 320, 35, 40);
sbox3= new Box(970, 320, 35, 40);
sbox4= new Box(1010, 320, 35, 40);
sbox5= new Box(1050, 320, 35, 40);
sbox6= new Box(1090, 320, 35, 40);

sbox7= new Box(950, 275, 35, 40);
sbox8= new Box(990, 275, 35, 40);
sbox9= new Box(1030, 275, 35, 40);

sbox10 = new Box(975, 230, 35, 40);
sbox11 = new Box(1015, 230, 35, 40);

P1= new pp(100, 600, 20);

s1 = new Slingshot(P1.body,{x:500,y:100})

}

function draw() {
  background("cyan");  

  Engine.update(engine);
ground.display();
stand1.display();
stand2.display();
strokeWeight(3)
stroke("blue")
fill ("lightpink")
box1.display();
box2.display();
box3.display();
box4.display();
box5.display();
box6.display();
box7.display();
box8.display();

  
box9.display();
box10.display();
box11.display();
box12.display();
box13.display();
box14.display();

box15.display();
box16.display();
box17.display();
box18.display();

box19.display();
box20.display();

sbox1.display();
sbox2.display();
sbox3.display();
sbox4.display();
sbox5.display();
sbox6.display();

sbox7.display();
sbox8.display();
sbox9.display();

sbox10.display();
sbox11.display();

P1.display();
s1.display();

}

function mouseDragged(){
  Matter.Body.setPosition(P1.body,{x:mouseX,y:mouseY});
}
function mouseReleased(){
  s1.fly();
}