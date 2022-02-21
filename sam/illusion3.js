
//change these once you calculate your illusion dimensions

function setup() {
	//this is the size of the canvas.  Change this after you figure
	//out the dimensions of your illusion.  
	//Currently it's width is 600, height is 400
	createCanvas(800,800);
}

//This function is passed the x coordinate of the centre of the box
//and the y coordinate of the centre of the box as well as the colour. 
//it will draw that box
function drawBigBox(x, y, colour){
	push();  		 	//pushes the current state (such as colour settings)
	stroke(colour);		//outline colour of shape
	fill(colour);		//fill colour of the shape
	rectMode(CENTER);
	rect(x,y,100,100);  //draw box
	pop();				//resets the state to what it was
}

//This function is passed the x coordinate of the centre of the box
//and the y coordinate of the centre of the box as well as the colour. 
//it will draw that box.  This box is a small box at approximately
//1/3 of the size of the big box
function drawSmallBox(x, y, colour){
	push();  		 	//pushes the current state (such as colour settings)
	stroke(colour);		//outline colour of shape
	fill(colour);		//fill colour of the shape
	rectMode(CENTER);
	rect(x,y,30,30);  	//draw box
	pop();				//resets the state to what it was
}

function div(a,b){
	return Math.floor(a/b);
}
function draw() {

	//background is a grey colour
	background("#808080");


	//draws big black box
	drawBigBox(100,100,"#000000");

	//draw small white box in middle of big black box
	drawSmallBox(100,100,"#ffffff");
	
	//p5.js calls the draw() function 60 times each second to do animation
	//as we are not interested in that functionality, this noloop() statement
	//stops the function draw() calls after drawing the illusion once.
	noLoop();
}