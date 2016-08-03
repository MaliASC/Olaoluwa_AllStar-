//Creating animations

var xMario = 50;
var yMario = 490;
var mario;

//The pillars 
var Rpillar;
var Grdpillar;
var midpillar;
var LPillar;


function preload() {
  myImage = loadImage("supermario.png");
}

// Use p5 reference to upload an image:https://p5js.org/reference/#/p5.Image/updatePixels



function setup() {
  createCanvas(1230,590);
    //This is mario
  mario = createSprite(xMario, yMario, 60, 120);
  //change the color of the placeholder
  mario.shapeColor = color(222, 125, 2);

    //This is the first pillar
  LPillar = createSprite(320,475,100,150);
  LPillar.shapeColor = color(0,200,0);


// This is the second pillar
  Rpillar = createSprite(950, 475, 100, 150);// This is the second pillar
  //change the color of the placeholder
  Rpillar.shapeColor = color(0, 200, 0);

  // This is the ground pillar
  Grdpillar = createSprite(0, 590, 2500, 90);// This is the second pillar
  //change the color of the placeholder
  Grdpillar.shapeColor = color(200, 34, 34);

    //This is the mid pillar
  midpillar = createSprite(650,300,250,30);
  midpillar.shapeColor = color(0,200,0);




}

function draw() {
  background(135, 206, 250); 
 

  fill(255)
  ellipse(880, 30, 160, 40); // This is the cloud(The third one)
  ellipse(450, 50, 160, 40); // This is the second cloud
  ellipse(0, 30, 160, 40);  // This is the frst cloud
  ellipse(1300, 50, 160, 40); // This is the 4th cloud

//This is for an action to be performed when a key is pressed    

  if (keyWentDown(LEFT_ARROW) ) {
    mario.velocity.x = -5;
	}
	 if (keyWentUp(LEFT_ARROW) ) {
    mario.velocity.x =0;
	}
  if (keyWentDown(RIGHT_ARROW) ) {
    mario.velocity.x = 5;
	}
	 if (keyWentUp(RIGHT_ARROW) ) {
    mario.velocity.x =0;
	}
  if (keyWentDown(UP_ARROW)) {
    mario.velocity.y = -5;
	}

  if (keyWentDown(DOWN_ARROW)) {
    mario.velocity.y = 5;
	}
		if (keyWentUp(DOWN_ARROW)){
			mario.velocity.y = 0;
		}

   mario.collide(LPillar);
   mario.collide(Rpillar);
   mario.collide(midpillar);
   mario.collide(Grdpillar);


	drawSprites();
}
  	



