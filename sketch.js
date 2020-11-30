const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper;
var ground;
var bin1,bin2,bin3;

function preload()
{
	
}

function setup() {
	createCanvas(1300, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paper = new Paper(65,590,20);
	bin1 = new Bin(1000,590,200,20);
	bin2 = new Bin(900,550,20,100);
	bin3 = new Bin(1100,550,20,100);
	ground = new Ground(600,600,1400,10);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  paper.display();
  bin1.display();
  bin2.display();
  bin3.display();
  ground.display();

  drawSprites();
 
}

function keyPressed() {

	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body, paper.body.position, {x : 85, y : -85});
	}

}

