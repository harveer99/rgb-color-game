// console.log("connected");
numSquares = 9;


colours = generateRandomColors(numSquares);

var pickedcolor = pickcolor();


var squares=document.querySelectorAll(".square");
var messagedisplay =  document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetbutton = document.querySelector("#reset");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");
var peerBtn = document.querySelector("#peerBtn");

easyBtn.addEventListener("click",function(){
	easyBtn.classList.add("selected");
	hardBtn.classList.remove("selected");
	peerBtn.classList.remove("selected");
	for(var i = 3; i < numSquares; i++){
		squares[i].style.display = "none";
	}
	numSquares = 3;
	reset();
})


hardBtn.addEventListener("click",function(){
	hardBtn.classList.add("selected");
	easyBtn.classList.remove("selected");
	peerBtn.classList.remove("selected");

	numSquares = 6;
	for(var i = 3; i < 6; i++){
		squares[i].style.display = "block";
	}
	for(var i = 6; i < 9; i++){
		squares[i].style.display = "none";
	}
	
	
	reset();

})

peerBtn.addEventListener("click",function(){
	peerBtn.classList.add("selected");
	easyBtn.classList.remove("selected");
	hardBtn.classList.remove("selected");
	numSquares = 9;
	for(var i = 3; i < numSquares; i++){
		squares[i].style.display = "block";
	}
	
	reset();

})

var colorDisplay = document.querySelector("h1 span") ;
colorDisplay.textContent = pickedcolor;


resetbutton.addEventListener("click",reset);



// console.log(squares)
for(var i=0; i < squares.length; i++){
	squares[i].style.backgroundColor=colours[i];

	squares[i].addEventListener("click",function(){
		clickedcolor =  this.style.backgroundColor;
		if(clickedcolor === pickedcolor){
			messagedisplay.textContent = "correct";
			h1.style.backgroundColor = clickedcolor;
			changecolors();
			resetbutton.textContent = "Play again?"
		}
		else{
			this.style.backgroundColor = "#a8b0a7";
			messagedisplay.textContent = "try again";

		}
	})
}

function reset(){
	// generate new random colors, change color display in h1, change h1 background, change colors
	colours = generateRandomColors(numSquares);
	pickedcolor = pickcolor();
	colorDisplay.textContent = pickedcolor;
	h1.style.backgroundColor = "#009900";
	for(var i = 0; i < squares.length; i++){
		squares[i].style.backgroundColor = colours[i];
	}
	messagedisplay.textContent = "";
	resetbutton.textContent = "New Colors";
}

function changecolors(){
	for(var i = 0; i < squares.length; i++){
		squares[i].style.backgroundColor = pickedcolor;
	}
}

function pickcolor(){
	var randindex = Math.floor(Math.random() * (colours.length)) ;
	return colours[randindex];
}

function generateRandomColors(num){
	arr = [];

	for(var i = 0; i < num; i++){
		arr.push(randomColor());
	}

	return arr;
}

function randomColor(){
	var r = Math.floor(Math.random() * 256);
	var g = Math.floor(Math.random() * 256);
	var b = Math.floor(Math.random() * 256);

	return ( "rgb" + "(" + r + ", " + g + ", " + b +")");
}
