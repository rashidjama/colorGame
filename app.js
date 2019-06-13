//Cache the DOM
let numSquare = 6;
const colorDisplayEl = document.getElementById("color__display");
const newColorEl = document.getElementById("new__colors");
const messageEl = document.getElementById("message");
const easyModeEl = document.getElementById("easy__mode");
const hardModeEl = document.getElementById("hard__mode");
const squaresEl = document.querySelectorAll(".squares");
const h1El = document.querySelector("h1");

//GLOBAL VARILABLES
let colors = generateColors(numSquare)
let pickedColor = randomColors()
colorDisplayEl.textContent = pickedColor;

// EASY MODE
easyModeEl.addEventListener("click", function() {
	hardModeEl.classList.remove("selected");
	easyModeEl.classList.add("selected");
	numSquare = 3;
	colors = generateColors(numSquare);
	pickedColor = randomColors();
	colorDisplayEl.textContent = pickedColor;
	for(let i = 0; i < squaresEl.length; i++)
	if (colors[i]) {
		squaresEl[i].style.background = colors[i];
	} else {
		squaresEl[i].style.display = "none";
	}
});

// HARD MODE

hardModeEl.addEventListener("click", function() {
	easyModeEl.classList.remove("selected");
	hardModeEl.classList.add("selected");
	numSquare = 6;
	colors = generateColors(numSquare);
	pickedColor = randomColors();
	colorDisplayEl.textContent = pickedColor;
	for(let i = 0; i < squaresEl.length; i++) {
		squaresEl[i].style.background = colors[i];
		squaresEl[i].style.display = "block";
		h1El.style.background = "";
	}
});


// COLOR GUESSING GAME MAIN LOGIC
for (let i = 0; i < squaresEl.length; i++) {
	squaresEl[i].style.background = colors[i];

	squaresEl[i].addEventListener("click", function() {
		let clickedColor = this.style.background;
		if (clickedColor === pickedColor) {
			colorDisplayEl.textContent = clickedColor;
			changeColor(clickedColor);
			h1El.style.background = clickedColor;
			messageEl.textContent = "CORRECT!"
			messageEl.style.color = "green";
			newColorEl.textContent = "PLAY AGAIN?";
		} else {
			this.style.background = "#333";
			messageEl.textContent = "WRONG!"
			messageEl.style.color = "red";
		}
	});
};


function changeColor(color) {
	for (let i = 0; i < squaresEl.length; i++) {
		squaresEl[i].style.background = color;
	}
};

function randomColors() {
	let random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateColors(num) {
	let arr = [];
	for(let i =0; i<num; i++) {
		arr.push(newRandomColors());
	}
	return arr;
}

function newRandomColors() {
	let r = Math.floor(Math.random() * 256);
	let g = Math.floor(Math.random() * 256);
	let b = Math.floor(Math.random() * 256);
	return ("rgb(" + r + ", " + g + ", " + b+ ")");
}

newRandomColors();

newColorEl.addEventListener("click", function() {
	// generate new colors
	colors = generateColors(numSquare);
	// pick a new random color
	pickedColor = randomColors()
	//change colorDisplay to match picked color
	colorDisplayEl.textContent = pickedColor;
	//change header background to original
	h1El.style.background = "";
	// change squares color
	for (let i = 0; i < squaresEl.length; i++) {
		squaresEl[i].style.background = colors[i];
	};
	newColorEl.textContent = "NEW COLORS";
	messageEl.textContent = "";
});





