var ball;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	var ball_options={
		isStatic:false,
		restitution:0.3,
		friction:0,
		density:1.2
	}
	ball = Matter.Bodies.circle(50,50,25,ball_options)
	World.add(world,ball)
	ground =new Ground(400,700,1250,10); 
	right = new Ground(690,620,20,150); 
	left = new Ground(510,620,20,150); 
	Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background(0);
  ellipse(ball.position.x,ball.position.y,50,50)
  drawSprites();
  ground.display()
  right.display()
  left.display()
}


function keyPressed() {
	if (keyCode === UP_ARROW) {

		Matter.Body.applyForce(ball,{x:10,y:10},{x:10,y:-50})

	}
}



