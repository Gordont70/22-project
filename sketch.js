const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var roof,bob1,bob2,bob3,bob4,bob5;
//Create multiple bobs, mulitple ropes varibale here




function setup() {
	createCanvas(800, 600);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	var roof_options={
		isStatic:true			
	}

	roof = Bodies.rectangle(400,100,230,20,roof_options);
    World.add(world,roof);

	bob1 = Bodies.circle(400,200,5)
	World.add(world,bob1);
	bob2 = Bodies.circle(370,200,5)
	World.add(world,bob2);
	bob3 = Bodies.circle(350,200,5)
	World.add(world,bob3);
	bob4 = Bodies.circle(330,200,5)
	World.add(world,bob4);
	bob5 = Bodies.circle(300,200,5)
	World.add(world,bob5);

	rope1 = Bodies.rectangle(400,200,10,100)
	World.add(world,rope1)

	rope2 = Bodies.rectangle(370,200,10,100)
	World.add(world,rope2)

	rope3 = Bodies.rectangle(350,200,10,100)
	World.add(world,rope3)

	rope4 = Bodies.rectangle(330,200,10,100)
	World.add(world,rope4)

	rope5 = Bodies.rectangle(300,200,10,100)
	World.add(world,rope5)

	rope1 = new rope(bob1,roof,-80,0)
	rope2 = new rope(bob2,roof,-80,0)
	rope3 = new rope(bob3,roof,-80,0)
	rope4 = new rope(bob4,roof,-80,0)
	rope5 = new rope(bob5,roof,-80,0)

	Engine.run(engine);
	
    rectMode(CENTER);
	ellipseMode(RADIUS);
}

function draw() {
  rectMode(CENTER);
  background("#99004d");
  rect(rope1.position.x,rope1.position.y,10,100)
  rect(rope2.position.x,rope2.position.y,10,100)
  rect(rope3.position.x,rope3.position.y,10,100)
  rect(rope4.position.x,rope4.position.y,10,100)
  rect(rope5.position.x,rope5.position.y,10,100)


  ellipse(bob1.position.x,bob1.position.y,5)
  ellipse(bob2.position.x,bob2.position.y,5)
  ellipse(bob3.position.x,bob3.position.y,5)
  ellipse(bob4.position.x,bob4.position.y,5)
  ellipse(bob5.position.x,bob5.position.y,5)

  rect(roof.position.x,roof.position.y,230,20)

  
	
 
}

//Write keyPressed function and apply force on pressing up_arrow key on the first bob.
