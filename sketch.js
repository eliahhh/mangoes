
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint
var boy,stone1;

function preload()
{
	
	boyImage = loadImage("boy.png");
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	boy = createSprite(200,560,20,20);
	boy.addImage(boyImage);
	boy.scale = 0.2;

	stone1 = new Stone(100,500,50,50);
	
	tree = new Tree(600,375,300,600);

	ground = new Ground(400,680,800,20);

	mango1 = new Mango(620,200,50,50);
	mango2 = new Mango(700,300,50,50);
	mango3 = new Mango(500,300,50,50);

	chain = new Chain(stone1.body,{x:80,y:450});
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);

  stone1.display();
  ground.display();
  tree.display();
  chain.display();
  mango1.display();
  mango2.display();
  mango3.display();
  
  drawSprites();
 
}

function mouseDragged(){
    
    Matter.Body.setPosition(stone1.body, {x: mouseX , y: mouseY});
    }



function mouseReleased(){
    slingshot.fly();
    
}

