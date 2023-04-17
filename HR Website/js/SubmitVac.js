const validIds =
	"20230000,20230001,20230002,20230003,20230004,20230005,20230006,20230007";
localStorage.setItem("validIds", validIds);

const hidden = document.getElementsByClassName("hidden-div");

// Find the submit button
const submitBtn = document.getElementById("submitBtn");
// Find the input field for the ID
const idInput = document.getElementById("idInput");

const startDate = new Date(document.getElementById("StartD"));
const endDate = new Date(document.getElementById("EndD"));

// Add a click event listener to the submit button
document.forms[0].onsubmit = function (event) {
	isValidID = false;
	isValidDate = false;
	// Check if the input ID is in the list of valid IDs
	if (validIds.includes(idInput.value) && idInput.value !== "") {
		event.preventDefault();
		window.location.replace("../HR Website/H Home.html");
		isValidID = true;
	} else {
		// ID is invalid, show an error message
		event.preventDefault();
		window.location.replace("M Home.html");
		alert("Invalid ID");
	}

	// if (endDate.value > startDate.value) alert("Vacation Submitted");
};
