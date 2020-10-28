
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
const Render = Matter.Render;





var ball1,ball2,ball3,ball4;
var gr;
var line1,line2,line3,line4,line5;

function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	gr=new Ground(width/2,height/4,width/7,20);
	
	bobDiameter=40;

	startBobPositionX=width/2;
	startBobPositionY=height/4+500;
	ball1=new Bob(startBobPositionX-bobDiameter*2,startBobPositionY,bobDiameter);
	ball2=new Bob(startBobPositionX-bobDiameter,startBobPositionY,bobDiameter);
	ball3=new Bob(startBobPositionX,startBobPositionY,bobDiameter);
	ball4=new Bob(startBobPositionX+bobDiameter,startBobPositionY,bobDiameter);
	ball5=new Bob(startBobPositionX+bobDiameter*2,startBobPositionY,bobDiameter);
	
	
	//Create a Ground
	

	var render = Render.create({
	  element: document.body,
	  engine: engine,
	  options: {
	    width: 1200,
	    height: 700,
	    wireframes: false
	  }
	});
	
	line1=new Line(ball1.body,gr.body,-bobDiameter*2, 0)

	line2=new Line(ball2.body,gr.body,-bobDiameter*1, 0)
	line3=new Line(ball3.body,gr.body,0, 0)
	line4=new Line(ball4.body,gr.body,bobDiameter*1, 0)
	line5=new Line(ball5.body,gr.body,bobDiameter*2, 0)

	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  //Engine.update(engine);
  gr.display();
  line1.display()
  line2.display()
  line3.display()
  line4.display()
  line5.display()	
  ball1.display();
  ball2.display();
  ball3.display();
  ball4.display();
  ball5.display();

  


  drawSprites();
 
}

function keyPressed() {
	if (keyCode === UP_ARROW) {

	  Matter.Body.applyForce(ball1.body,ball1.body.position,{x:-50,y:-45});

	}
}
 
 


