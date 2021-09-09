const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var engine, world;

var o1, o2, o3, o4, o5, o6, o7, o8, o9, o10, o11, o12, o13, o14, o15, o16, o17, o18, o19, o20, o21, o22, o23, o24, o25,  o26;
var bg, fondo;
var piso;
var pajaro;
var estado = 1;

function preload (){
  bg = loadImage ("f.jpg");
}

function setup() {
  createCanvas(800,400);
	engine = Engine.create();
	world = engine.world;

 // fondo = createSprite (400, 200);
 //fondo.addImage (bg)
 // fondo.scale = 1.3;

piso = new ground ();
  o1 = createSprite(100, 75, 15, 150);
  o7 = createSprite(100, 350, 15, 100);
 
  o2 = createSprite(150, 100, 15, 200);
  o8 = createSprite(150, 350, 15, 100);
 
  o3 = createSprite(200, 125, 15, 250);
  o9 = createSprite(200, 375, 15, 50);
 
  o4 = createSprite(250, 100, 15, 200);
  o10 = createSprite(250, 350, 15, 100);
 
  o5 = createSprite(300, 75, 15, 150);
  o11 = createSprite(300, 325, 15, 150);
 
  o6 = createSprite(350, 50, 15, 100);
  o12 = createSprite(350, 300, 15, 200);



  o13 = createSprite(400, 75, 15, 150);
  o14 = createSprite(400, 350, 15, 100);
 
  o15= createSprite(450, 100, 15, 200);
  o16 = createSprite(450, 350, 15, 100);
 
  o17= createSprite(500, 125, 15, 250);
  o18 = createSprite(500, 375, 15, 50);
 
  o19= createSprite(550, 100, 15, 200);
  o20 = createSprite(550, 350, 15, 100);
 
  o21 = createSprite(600, 75, 15, 150);
  o22 = createSprite(600, 325, 15, 150);
 
  o23 = createSprite(650, 50, 15, 100);
  o24 = createSprite(650, 300, 15, 200);


  o25= createSprite(700, 100, 15, 200);
  o26 = createSprite(700, 350, 15, 100);
 
  pajaro = new p (20, 380);

  o1.shapeColor = "green";
  o2.shapeColor = "green";
  o3.shapeColor = "green";
  o4.shapeColor = "green";
  o5.shapeColor = "green";
  o6.shapeColor = "green";
  o7.shapeColor = "green";
  o8.shapeColor = "green";
  o9.shapeColor = "green";
  o10.shapeColor = "green";
  o11.shapeColor = "green";
  o12.shapeColor = "green";

  o13.shapeColor = "green";
  o14.shapeColor = "green";
  o15.shapeColor = "green";
  o16.shapeColor = "green";
  o17.shapeColor = "green";
  o18.shapeColor = "green";
  o19.shapeColor = "green";
  o20.shapeColor = "green";
  o21.shapeColor = "green";
  o22.shapeColor = "green";
  o23.shapeColor = "green";
  o24.shapeColor = "green";
  o25.shapeColor = "green";
  o26.shapeColor = "green";

 // piso = new Ground ();
}

function draw() {
  background(230);
  Engine.update(engine);
  // asi se crea un objeto simple con rect
  //fill ("blue");
  //rect (20, 20, 20, 20);

pajaro.display ();
piso.display ();




if (keyDown ("space") && estado === 1) {
  pajaro.body.position.x =  pajaro.body.position.x +0.5;
  pajaro.body.position.y = pajaro.body.position.y -2;
  console.log (pajaro.body.position.y);
}


if ( pajaro.body.position.x >= (o1.x) || pajaro.body.position.x >= (o2.x) || pajaro.body.position.x >= (o3.x) || pajaro.body.position.x >= (o4.x)  || pajaro.body.position.x >= (o5.x) || pajaro.body.position.x >= (o6.x) || pajaro.body.position.x >= (o7.x)
|| pajaro.body.position.x >= (o8.x) || pajaro.body.position.x >= (o9.x) || pajaro.body.position.x >= (o10.x) || pajaro.body.position.x >= (o11.x) || pajaro.body.position.x >= (o12.x)|| pajaro.body.position.x >= (o13.x) || pajaro.body.position.x >= (o14.x)
|| pajaro.body.position.x >= (o15.x) || pajaro.body.position.x >= (o16.x) || pajaro.body.position.x >= (o17.x) || pajaro.body.position.x >= (o18.x) || pajaro.body.position.x >= (o19.x) || pajaro.body.position.x >= (o20.x) || pajaro.body.position.x >= (o21.x)
|| pajaro.body.position.x >= (o22.x) || pajaro.body.position.x >= (o23.x) || pajaro.body.position.x >= (o24.x) || pajaro.body.position.x >= (o25.x) || pajaro.body.position.x >= (o26.x)){

  fill("red");
  textSize(12);
  text("¡perdiste!", 175, 275);
  text("presiona espacio para volver a jugar", 120, 290);
  estado = 0;
  pajaro.x  = pajaro.x +1;
  pajaro.y  = pajaro.y +1;

}
 
  if (keyDown ("space") && estado === 0) {
jugar2();
  }

if (pajaro.body.position.x >= 750) {
fill("blue");
textSize(14);
text("¡ganaste!", 175, 275);
text("presiona espacio para volver a jugar", 105, 290);
estado = 10;

}

if (keyDown("space") && estado === 10) {
jugar2 ();
}

drawSprites();
}



function jugar2 (){
  Matter.Body.setPosition (pajaro.body, {x:20, y:380});
  pajaro.velocityX = 0;
  pajaro.velocityY = 0;
  estado = 1;
  }z