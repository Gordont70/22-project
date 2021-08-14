class rope{
	constructor(body1,body2, pointA, pointB)
	{

		this.pointA=pointA
		this.pointB=pointB

		var options={
			bodyA:body1,
			bodyB:body2,
			pointB:{x:this.pointA, y:this.pointB}
		}
		
		con1 = Matter.Constraint.create({
			bodyA:rope1,
			pointA:{x:0,y:0},
			bodyB:bob1,
			pointB:{x:0,y:0},
			length:100,
			stiffness:0.1
		})

		con2 = Matter.Constraint.create({
			bodyA:rope2,
			pointA:{x:0,y:0},
			bodyB:bob2,
			pointB:{x:0,y:0},
			length:100,
			stiffness:0.1
		})

		con3 = Matter.Constraint.create({
			bodyA:rope3,
			pointA:{x:0,y:0},
			bodyB:bob3,
			pointB:{x:0,y:0},
			length:100,
			stiffness:0.1
		})

		con4 = Matter.Constraint.create({
			bodyA:rope4,
			pointA:{x:0,y:0},
			bodyB:bob4,
			pointB:{x:0,y:0},
			length:100,
			stiffness:0.1
		})

		con5 = Matter.Constraint.create({
			bodyA:rope5,
			pointA:{x:0,y:0},
			bodyB:bob5,
			pointB:{x:0,y:0},
			length:100,
			stiffness:0.1
		})

		World.add(world,con1)
		World.add(world,con2)
		World.add(world,con3)
		World.add(world,con4)
		World.add(world,con5)

			rectMode(CENTER);
  			ellipseMode(RADIUS);
	}

		

    display(){
		var pointA=this.rope.body.position
		var pointB=this.rope.body.position

		push()
		strokeWeight(2)
		line (bob1.position.x,bob1.position.y,rope1.position.x,rope1.position.y)
		line (bob1.position.x,bob2.position.y,rope1.position.x,rope2.position.y)
		line (bob1.position.x,bob3.position.y,rope1.position.x,rope3.position.y)
		line (bob1.position.x,bob4.position.y,rope1.position.x,rope4.position.y)
		line (bob1.position.x,bob5.position.y,rope1.position.x,rope5.position.y)
		pop()

	}

}
