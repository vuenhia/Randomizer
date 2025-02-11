let addButton = document.querySelector(".addButton");
let randomizeButton = document.querySelector(".randomizeButton");
let nameArray = [];
let team1 = document.querySelector(".team1");
let team2 = document.querySelector(".team2");
let nameHolder = document.querySelector(".nameHolder");
let addTeamButton = document.querySelector(".addTeamButton");
let teamTable = document.querySelector(".teamTable");
let iterate = 3;
let newTeams = [team1, team2];

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
function removeTeam(teamContainer, teamToRemove) {
	teamContainer.remove();
	let updatedTeams = [];

	for (let i = 0; i < newTeams.length; i++) {
		if (newTeams[i] !== teamToRemove) {
			updatedTeams.push(newTeams[i]);
		}
	}
}
//This
function shuffleArray(array) {
	for (let i = array.length - 1; i > 0; i--) {
		let j = Math.floor(Math.random() * (i + 1));
		[array[i], array[j]] = [array[j], array[i]];
	}
}
addTeamButton.addEventListener("click", (event) => {
	event.preventDefault();
	let newCreatedTeam = "team" + iterate;
	const div = document.createElement("div");
	const h2 = document.createElement("h2");
	const ul = document.createElement("ul");
	div.classList.add("container");
	ul.classList.add(newCreatedTeam);
	h2.textContent = "Team" + iterate;
	teamTable.appendChild(div);
	div.appendChild(h2);
	div.appendChild(ul);
	newTeams.push(ul);
	h2.addEventListener("click", () => {
		removeTeam(div, ul);
	});

	h2.addEventListener("mouseover", () => {
		h2.style.backgroundColor = "lightgray";
	});

	iterate++;
});

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

randomizeButton.addEventListener("click", (event) => {
	event.preventDefault();
	//Need to add ways to include the new teams when created by addNewTeam
	// Possible solutions: for Loop
	for (let i = 0; i < newTeams.length; i++) {
		console.log(newTeams[i]);
		newTeams[i].innerHTML = "";
	}

	console.log(nameArray.length + "namearray");
	console.log(newTeams.length + "newteams");
	//This
	let shuffledList = [...nameArray];
	shuffleArray(shuffledList);

	for (let i = 0; i < shuffledList.length; i++) {
		let li = document.createElement("li");
		li.textContent = shuffledList[i];

		let teamIndex = i % newTeams.length; // Cycle through teams
		newTeams[teamIndex].appendChild(li);
	}
});
