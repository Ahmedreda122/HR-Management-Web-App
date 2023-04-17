const aprvbttn = document.querySelectorAll(".approve");
const rejctbttn = document.querySelectorAll(".reject");

aprvbttn.forEach((button) => {
	button.addEventListener("click", () => {
		button.closest("tr").getElementsByClassName("status")[0].innerHTML =
			"Approved";
		button.closest("div").innerHTML = "Action Taken";
	});
});

rejctbttn.forEach((button) => {
	button.addEventListener("click", () => {
		button.closest("tr").getElementsByClassName("status")[0].innerHTML =
			"Rejected";
		button.closest("tr").getElementsByClassName("status")[0];
		button.closest("div").innerHTML = "Action Taken";
	});
});
