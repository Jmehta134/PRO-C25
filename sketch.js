
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground;
var side1,sideB,side3;
var paper;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

    ground = new Ground(width/2,height-50,width,20);
	side3 = new Side(700,510,20,210);
	side1 = new Side(500,510,20,210);
	//bottom side
	sideB = new Bottom(600,630,240,20);
	paper = new Paper(200,500,35);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(100);
  ground.display();
  paper.display();
  side1.display();
  side3.display();
  sideB.display();
  drawSprites();
}

function keyPressed(){
	if (keyCode === UP_ARROW) {
		Matter.Body.applyForce(paper.body,paper.body.position,{x:90,y:-300})
	}
}


