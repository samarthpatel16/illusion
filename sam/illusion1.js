
//change these once you calculate your illusion dimensions

function setup() {
	//this is the size of the canvas.  Change this after you figure
	//out the dimensions of your illusion.  
	//Currently it's width is 600, height is 400
	createCanvas(600,400);
}
function div(a,b){
	return Math.floor(a/b);
}
//This function is passed the x coordinate of the centre of the ramp
//and the y coordinate of the top of the ramp piece as well as the colour. 
//it will draw that ramp segment
function drawRampSegment(x, y, colour){
	push();  		 	//pushes the current state (such as colour settings)
	stroke(colour);		//outline colour of shape
	strokeWeight(2);
	line(x-20,y,x+20,y);
	noFill();			//follow outline
	triangle(x,y+1,x+20,y+21,x-20,y+21);
	pop();				//resets the state to what it was
}

//this function will draw a ladder with 7 rungs
//the middle of the top of the ladder is defined by x,y
//the ladder is coloured as colour
function drawLadder(x, y, colour){
	push();
	stroke(colour);
	fill(colour);
	strokeWeight(2);
	line(x-20,y,x-20,y+(20*6)+10);
	line(x+20,y,x+20,y+(20*6)+10);
	for(var i=0;i<7;i++){
		line(x-20,y+5+(i*20),x+20,y+5+(i*20));
	}
	pop();
}
function draw() {

	//background is a grey colour
	background("#808080");

	//draw a white diamond centred at 100, 100
	drawRampSegment(100,100,"#ffffff");

	//draw a blue ladder
	drawLadder(100,200,"#0000ff");

	//This loop runs through all the numbers from 0 to 5
    //After working out the mathematical equations for placement
    //based on each elements id, your code should simply involve
    //writing a loop for each elemnt running through all their id's
    //and using the formulas to place the element.
	for(var i =0;i < 5;i++){
		//you can see the output in the console of browser developer tools
		//very useful to spot errors
		print(i);  
	}

	//p5.js calls the draw() function 60 times each second to do animation
	//as we are not interested in that functionality, this noloop() statement
	//stops the function draw() calls after drawing the illusion once.
	noLoop();
}