
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var tree,treeImg
var boy,boyImg
var mango1,mango2,mango3,mango4,mango5,mango6
var stone




function preload()
{
	treeImg=loadImage("images/tree.png")
	boyImg=loadImage("images/boy.png")
}

function setup() {
	createCanvas(800, 700);

	var tree=createSprite(600,400)
	tree.addImage(treeImg)
	tree.scale=0.3

	var boy=createSprite(150,530);
    boy.addImage(boyImg);
    boy.scale=0.1;


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	
ground=new Ground();
stone=new Stone(100,500,30);
mango1=new Mango(600,300,30);
mango2=new Mango(550,280,30);
mango3=new Mango(530,260,30);
mango4=new Mango(560,330,30);
mango5=new Mango(540,350,30);
mango6=new Mango(620,270,30);


attach=new Throw(stone.body,{x:100,y:465});

	Engine.run(engine);
  
}


function draw() {
	rectMode(CENTER);
  background(150);

  detectCollision(stone,mango1);
  detectCollision(stone,mango2);
  detectCollision(stone,mango3);
  detectCollision(stone,mango4);
  detectCollision(stone,mango5);
  detectCollision(stone,mango6);

 
  
  drawSprites();
  ground.display();
  stone.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  attach.display();
}

function mouseDragged(){
    Matter.Body.setPosition(stone.body,{x: mouseX , y: mouseY});
}

function mouseReleased(){
    attach.fly();
}

function detectCollision(lstone,lmango){
	mangoBodyPosition=lmango.body.position;
	stoneBodyPosition=lstone.body.position;

	var distance=dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)
if(distance<=60){
	Matter.Body.setStatic(lmango.body,false)
}
}

function keyPressed(){

	if(keyCode===32){
		Matter.Body.setPosition(stone.body,{x:100,y:450});
		attach.Launch(stone.body);
	}
}