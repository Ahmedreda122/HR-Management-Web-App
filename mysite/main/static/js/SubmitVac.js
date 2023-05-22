const employees = JSON.parse(window.localStorage.getItem("employees"));
const HRs = JSON.parse(window.localStorage.getItem("HRs"));

// Find the input field for the ID
const idInput = document.getElementById("idInput");
const startD = document.getElementById("startD");
const endD = document.getElementById("endD");
const reason = document.getElementById("reason");

function sbmtVac(e) {
	// create vacation request object
	const vacationRequest = {
		employeeID: idInput.value,
		startDate: startD.value,
		endDate: endD.value,
		reason: reason.value,
		status: "Pending",
	};
	// Store the vacation object in local storage array
	let vacations = JSON.parse(localStorage.getItem("vacations")) || [];
	vacations.push(vacationRequest);
	localStorage.setItem("vacations", JSON.stringify(vacations));
}

// Add a submit event listener to the form
document.forms[0].onsubmit = function (event) {
	// Check if the input ID is in the list of valid IDs
	let checkid = false;
	let checkHR = false;
	for (let i = 0; i < employees.length; i++) {
		if (employees[i].ID === idInput.value && idInput.value !== "") {
			checkid = true;
		}
	}
	for (let i = 0; i < HRs.length; i++) {
		if (HRs[i].ID === idInput.value && idInput.value !== "") {
			checkHR = true;
		}
	}
	if (!checkid && !checkHR) {
		event.preventDefault();
		// ID is invalid, show an error message
		idInput.focus();
		idInput.style.borderColor = "red";
		idInput.addEventListener("input", function () {
			idInput.style.borderColor = ""; // set to default border color
		});
		alert("Invalid ID");
		// return; // add this to exit the function and prevent further code execution
	}

	let checkDate = false;
	const start = new Date(startD.value);
	const end = new Date(endD.value);
	if (start >= end) {
		event.preventDefault();
		alert("End date must be after start date");
		endD.focus();
		endD.style.borderColor = "red";
		startD.style.borderColor = "red";
		startD.addEventListener("input", function () {
			startD.style.borderColor = ""; // set to default border color
		});
		endD.addEventListener("input", function () {
			endD.style.borderColor = ""; // set to default border color
		});
	} else {
		checkDate = true;
	}
	if (checkDate && checkid) {
		event.preventDefault();
		sbmtVac();
		alert("Vacation Submitted");
		// window.location.reload();
	}
	if (checkDate && checkHR) {
		event.preventDefault();
		sbmtVac();
		alert("Vacation Submitted");
		// window.location.reload();
	}
};
