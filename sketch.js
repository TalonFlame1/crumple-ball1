
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


function preload()
{
	
}

function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;
	rectBody1 = Bodies.rectangle (860,600,20,100, {isStatic:true} ) 
	 World.add(world, rectBody1)

	 rectBody2 = Bodies.rectangle (950,650,200,20, {isStatic:true})
	 World.add(world, rectBody2)

	 rectBody3 = Bodies.rectangle (1040,600,20,100, {isStatic:true})
	 World.add(world, rectBody3)

	//Create the Bodies Here.
ball = new Ball (200,300,25)
ground = new Ground (600,680,1200,20)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  rect (rectBody1.position.x, rectBody1.position.y,20,100)
  rect (rectBody2.position.x, rectBody2.position.y,200,20)
  rect ( rectBody3.position.x, rectBody3.position.y,20,100)
  
 
 ball.display ();
 ground.display();
}
function keyPressed () {
if (keyCode === UP_ARROW){
Matter.Body.applyForce(ball.body,ball.body.position,{x:115,y:-115})

}




}



