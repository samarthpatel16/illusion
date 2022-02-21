
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
//This function is passed the x coordinate of the centre of the diamond
//and the y coordinate of the centre of the diamond as well as the colour. 
//it will draw that diamond
function drawDiamond(x, y, colour){
	push();  		 	//pushes the current state (such as colour settings)
	stroke(colour);		//outline colour of shape
	fill(colour);		//fill colour of the shape
	quad(x,y-30*sqrt(3),x+30,y,x,y+30*sqrt(3),x-30,y);  //draw diamond
	pop();				//resets the state to what it was
}

//this function will draw a horizontal line starting at x,y
//for a given length, a line thickness of 4, with the indicated colour
function drawLine(x, y, length, colour){
	push();
	stroke(colour);
	fill(colour);
	strokeWeight(4);
	line(x,y,x+length,y);
	pop();
}
function draw() {

	//background is a grey colour
	background(125);

	//draw a white diamond centred at 100, 100
	//drawDiamond(100,100,255);

	//draw a black line that starts at 100,100 
	//(will start at middle of diamond) 
	//and extend for 200 units.
	//drawLine(100,100,100,0);

	//This loop runs through all the numbers from 0 to 5
    //After working out the mathematical equations for placement
    //based on each elements id, your code should simply involve
    //writing a loop for each elemnt running through all their id's
    //and using the formulas to place the element.
    var colour_set=1;
	
	for(var i =0;i < 32;i++){
		var j= 60+60*(i%8);
		var k=  30*1.72 + (((i-(i%8))/8)*60*1.72);
		var l= (((i%2) + ((i-(i%8))/8))%2)*255;
		drawDiamond(j,k,l);
		//you can see the output in the console of browser developer tools
		//very useful to spot errors
		//print(i);

		
	}

for(var a = 0 ; a<64;a++){
		var b= 30+((a%16)*30);
		var c= 30*1.72 + ((((a%2) +((a-(a%16))/16) )%2)*3)+  (((a-(a%16))/16)*60*1.72);
		//var l= (((a%2) + (~~(a/16)))%2)*255;
		var p=((((a-(a%16))/16)*60*1.72)%2);
		var line_color= ((((a+1)%2) + (((((a-(a%16))/16)*60*1.72)%2)-(((((a-(a%16))/16)*60*1.72)%2)%1)) +((((a+1)-((a+1)%2))/2)))%2)*255;
		//print(line_color);  
		drawLine(b,c,30,line_color);
		//you can see the output in the console of browser developer tools
		//very useful to spot errors
		//print(i);  
		print(c);
	}
	//p5.js calls the draw() function 60 times each second to do animation
	//as we are not interested in that functionality, this noloop() statement
	//stops the function draw() calls after drawing the illusion once.
	noLoop();
}