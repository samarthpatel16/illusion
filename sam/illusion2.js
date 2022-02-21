
//change these once you calculate your illusion dimensions

function setup() {
	//this is the size of the canvas.  Change this after you figure
	//out the dimensions of your illusion.  
	//Currently it's width is 600, height is 400
	createCanvas(600,400);
}

//This function is passed the x and y coordinate of left hand point of the line
//It is also passed a colour. it will draw a 450 unit line to the right
function drawHorizontalLine(x, y,colour){
	push();  		 		//pushes the current state (such as colour settings)
	stroke(colour);			//outline colour of shape
	fill(colour);			//fill colour of shape
	line(x,y,x+(9*50),y);	//draw the line
	pop();					//resets the state to what it was
}
//This function is passed the x and y coordinate of top point of the line
//It is also passed a colour. it will draw a 450 unit line downwards
function drawVerticalLine(x, y,colour){
	push();  			 	//pushes the current state (such as colour settings)
	stroke(colour);			//outline colour of shape
	fill(colour);			//fill colour of shape
	line(x,y,x,y+(9*50));	//draw the line
	pop();					//resets the state to what it was
}


//this function will draw a thick black diagonal line
//It is passed the top left position of the line and 
//is drawn at a 45 degree angle towards the bottom right
//for length units.
function drawDiagonal(x, y, length){
	push();
	stroke(0);			//black colour outline
	fill(0);			//black colour fill
	strokeWeight(5);	//wide line
	line(x,y,x+length,y+length); //draw the line
	pop();
}

/*this function draws two large dots centred around x,y
of the indicated colour*/
function drawDots(x,y,colour){
	push();
	stroke(colour);
	fill(colour);
	ellipse(x+5,y-5,10,10);
	ellipse(x-5,y+5,10,10);
	pop();
}
function div(a,b){
	return Math.floor(a/b);
}
function draw() {

	//background is a white colour
	background("#ffffff");


	//draws two pink lines, they will intersect
	drawHorizontalLine(100,100,"#ff59f1");
	drawVerticalLine(150,50,"#ff59f1");
	
	//draws a pair of green dots, will appear at interesection of 
	//pink lines
	drawDots(150,100,"#59ffaf");
	
	//draws a thick diagonal band starting at 0,0 for 200 units
	drawDiagonal(0,0,200);

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