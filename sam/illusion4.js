
//change these once you calculate your illusion dimensions

function setup() {
	//this is the size of the canvas.  Change this after you figure
	//out the dimensions of your illusion.  
	//Currently it's width is 600, height is 400
	createCanvas(800,800);
}

//This function is passed the x,y position of the centre of this 
//box.  The box's background colour is defined by bgColour
//the colour of the rings in the box are defined by ringColour
function drawCircleBox(x, y, bgColour,ringColour){
	push();  		 	//pushes the current state (such as colour settings)
	stroke(bgColour);		//outline colour of shape
	fill(bgColour);		//fill colour of the shape
	rectMode(CENTER);
	rect(x,y,50,50);  //draw box
	stroke(ringColour);
	noFill();
	ellipseMode(CENTER);
	strokeWeight(3);
	ellipse(x,y,10,10);
	ellipse(x,y,20,20);
	ellipse(x,y,30,30);
	ellipse(x,y,40,40);
	pop();				//resets the state to what it was
}

//This function will draw a 4 petal'd flower centred at xy
//with colour defined by colour
function drawFlower(x, y, colour){
	push();  		 	//pushes the current state (such as colour settings)
	stroke(colour);		//outline colour of shape
	fill(colour);		//fill colour of the shape
	quad(x,y-8*sqrt(3),x+4,y-4*sqrt(3),x,y,x-4,y-4*sqrt(3));
	quad(x,y+8*sqrt(3),x+4,y+4*sqrt(3),x,y,x-4,y+4*sqrt(3));

	quad(x-8*sqrt(3),y,x-4*sqrt(3),y-4,x,y,x-4*sqrt(3),y+4);
	quad(x+8*sqrt(3),y,x+4*sqrt(3),y-4,x,y,x+4*sqrt(3),y+4);

	pop();				//resets the state to what it was
}

function div(a,b){
	return Math.floor(a/b);
}
function draw() {

	//background is a grey colour
	background("#808080");


	//draws big black box
	drawCircleBox(100,100,"#cc34eb","#6e02b3");

	//draws a dark green flower at the bottom right corner of the box
	drawFlower(125,125,"#128c1e")


	//p5.js calls the draw() function 60 times each second to do animation
	//as we are not interested in that functionality, this noloop() statement
	//stops the function draw() calls after drawing the illusion once.
	noLoop();
}