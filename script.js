let addButton = document.querySelector(".addButton");
let randomizeButton = document.querySelector(".randomizeButton");
let nameArray = [];
let team1 = document.querySelector(".team1");
let team2 = document.querySelector(".team2");
let nameHolder = document.querySelector(".nameHolder");

addButton.addEventListener("click", (event) => {
	event.preventDefault();

	let userInput = document.querySelector(".input");
	if (userInput.value.trim() === "") {
		alert("Please enter a name");
		return;
	}

	nameArray.push(userInput.value);
	userInput.value = "";

	updateNameList();
});

function updateNameList() {
	nameHolder.innerHTML = "";
	for (let i = 0; i < nameArray.length; i++) {
		let li = document.createElement("li");
		li.textContent = nameArray[i];
		li.addEventListener("click", () => {
			removeName(i);
		});
		nameHolder.appendChild(li);
	}
}

function removeName(index) {
	nameArray.splice(index, 1);
	updateNameList();
}

randomizeButton.addEventListener("click", (event) => {
	event.preventDefault();

	team1.innerHTML = "";
	team2.innerHTML = "";

	if (nameArray.length < 2) {
		alert("Not enough names to randomize teams!");
		return;
	}

	let shuffledList = [...nameArray];
	shuffleArray(shuffledList);

	for (let i = 0; i < shuffledList.length; i++) {
		let li = document.createElement("li");
		li.textContent = shuffledList[i];

		if (i % 2 === 0) {
			team1.append(li);
		} else {
			team2.append(li);
		}
	}
});

function shuffleArray(array) {
	for (let i = array.length - 1; i > 0; i--) {
		let j = Math.floor(Math.random() * (i + 1));
		[array[i], array[j]] = [array[j], array[i]];
	}
}
