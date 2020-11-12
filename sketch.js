const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine,world,body1;

function setup(){
  createCanvas(400,400);
  engine= Engine.create();
  world= engine.world;
  var options={
    isStatic: true
  }
  body1=Bodies.rectangle(200,100,50,50,options);
  World.add(world,body1);
  console.log(body1);
}

function draw(){
  background(0);
  Engine.update(engine);
rect(body1.position.x,body1.position.y,50,50);

}