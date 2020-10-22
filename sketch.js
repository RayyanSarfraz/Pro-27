
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;
var ball1;
var rope;

function preload(){
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	ground = new Ground(600,100,1200,20)

	ball1 = new Ball(600,400,40,40)
	ball2 = new Ball(300,400,40,40)
	ball3 = new Ball(350,400,40,40)
	ball4 = new Ball(400,400,40,40)
	ball5 = new Ball(450,400,40,40)

	rope = new Rope(ball1.body,{x:200, y:100});
	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  Engine.update(engine)

  drawSprites();
  
  ground.display();
  ball1.display();
  ball2.display();
  ball3.display();
  ball4.display();
  ball5.display();

}



