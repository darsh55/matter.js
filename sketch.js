//name spacing
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var ball;
var engine,world,ground;

function setup() {
  createCanvas(400,400);
engine = Engine.create();
world = engine.world;
options ={
  isStatic :true

}
ground= Bodies.rectangle(200,390,400,20,options);
World.add(world,ground);
ball_options= {
  restitution:2
}
ball= Bodies.circle(200,200,20,ball_options);
World.add(world,ball);
//onsole.log(box);
}

function draw() {
  background(255,255,255);  
  Engine.update(engine);
  rectMode(CENTER);
rect(ground.position.x,ground.position.y,400,20);
// rect(200,200,50,100);
ellipse(ball.position.x,ball.position.y,40,40)
}