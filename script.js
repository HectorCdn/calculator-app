const button7 = document.getElementById("button7");
const button8 = document.getElementById("button8");
const button9 = document.getElementById("button9");
const button4 = document.getElementById("button4");
const button5 = document.getElementById("button5");
const button6 = document.getElementById("button6");
const button1 = document.getElementById("button1");
const button2 = document.getElementById("button2");
const button3 = document.getElementById("button3");
const buttonPoint = document.getElementById("buttonPoint");
const buttonMoins = document.getElementById("buttonMoins");
const button0 = document.getElementById("button0");
const buttonMulti = document.getElementById("buttonMulti");
const buttonDivision = document.getElementById("buttonDivision");
const p = document.getElementById("p");

let buttonAlreadyClicked = true;

button7.addEventListener("click", () => {
	if (buttonAlreadyClicked) {
		p.textContent = button7.textContent;
		console.log(p.textContent);

		buttonAlreadyClicked = false;
	}
});

button8.addEventListener("click", () => {
	if (buttonAlreadyClicked) {
		p.textContent = button8.textContent;
		console.log(button8.textContent);
	}
});

button9.addEventListener("click", () => {
	p.textContent = button9.textContent;
	console.log(button9.textContent);
});

button4.addEventListener("click", () => {
	p.textContent = button4.textContent;
	console.log(button4.textContent);
});

button5.addEventListener("click", () => {
	p.textContent = button5.textContent;
	console.log(button5.textContent);
});

button6.addEventListener("click", () => {
	p.textContent = button6.textContent;
	console.log(button6.textContent);
});
