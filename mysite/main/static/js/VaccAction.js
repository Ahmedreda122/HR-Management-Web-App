const employees = JSON.parse(window.localStorage.getItem("employees"));
const HRs = JSON.parse(window.localStorage.getItem("HRs"));
const vacations = JSON.parse(window.localStorage.getItem("vacations"));
let tBody = document.querySelector("tbody");

// for (var i = 0; i < vacations.length; i++) {
// 	let data = `<tr>
// 	<td id= "ID">${vacations[i].employeeID}</td>`;
// 	let data1 = "";
// 	for (let j = 0; j < employees.length; j++) {
// 		if (employees[j].ID === vacations[i].employeeID) {
// 			data1 = `<td>${employees[j].username}</td>`;
// 			break;
// 		}
// 	}
// 	for (let j = 0; j < HRs.length; j++) {
// 		if (HRs[j].ID === vacations[i].employeeID) {
// 			data1 = `<td>${HRs[j].username}</td>`;
// 			break;
// 		}
// 	}
// 	let data2 = `
// 	<td>${vacations[i].startDate}</td>
// 	<td>${vacations[i].endDate}</td>
// 	<td>${vacations[i].reason}</td>
// 	<td><span class="dot"></span><span class="status">${vacations[i].status}</span></td>
// 	<td>
// 	<div>
// 	  <button class="approve">Approve</button>
// 	  <button class="reject">Reject</button>
// 	</div>
//   </td>
// 	</tr>`;
// // 	data = data + data1 + data2; // concatenate

// // 	// Append data before end tag (</tbody>)
// // 	tBody.insertAdjacentHTML("beforeend", data);
// // }

var isPending = true;
const aprvbttn = document.querySelectorAll(".approve");
const rejctbttn = document.querySelectorAll(".reject");

aprvbttn.forEach((button) => {
	button.addEventListener("click", (event) => {
		isPending = false;
		const EmployeeID = event.target
			.closest("tr")
			.querySelector("#ID").innerHTML;

		// console.log("HEY");

		// localStorage.setItem("EmployeeID", EmployeeID);
		// for (var i = 0; i < vacations.length; i++) {
		// 	if (EmployeeID === vacations[i].employeeID) {
		// 		vacations[i].status = "Approved";
		// 	}
		// }

		if (
			confirm(
				"You are gonna to Approve this Vacation for Employee #" + EmployeeID
			)
		) {
			// button.closest("tr").getElementsByClassName("status")[0].innerHTML =
			// 	"Approved";
			// button.closest("tr").getElementsByClassName("dot")[0].style.borderColor =
			// 	"#0fff0f";
			// button.closest("div").innerHTML = "Action Taken";

			var vacID = localStorage.getItem("VacationID");
			window.location.href = "/UpdateStatus/" + vacID + "/Approved";
		}
	});
});

rejctbttn.forEach((button) => {
	button.addEventListener("click", (event) => {
		isPending = false;
		const EmployeeID = event.target
			.closest("tr")
			.querySelector("#ID").innerHTML;
		// for (var i = 0; i < vacations.length; i++) {
		// 	if (EmployeeID === vacations[i].employeeID) {
		// 		vacations[i].status = "Rejected";
		// 	}
		// }
		if (
			confirm(
				"You are gonna to Reject this Vacation for Employee #" + EmployeeID
			)
		) {
			// button.closest("tr").getElementsByClassName("status")[0].innerHTML =
			// 	"Rejected";
			// button.closest("tr").getElementsByClassName("dot")[0].style.borderColor =
			// 	"red";
			// button.closest("div").innerHTML = "Action Taken";

			var vacID = localStorage.getItem("VacationID");
			window.location.href = "/UpdateStatus/" + vacID + "/Rejected";
		}
	});
});

// for (let i = 0; i < aprvbttn.length; i++) {
// 	const status = aprvbttn[i].closest("tr").querySelector(".status").textContent;

// 	if (status !== "Pending") {
// 		aprvbttn[i].disabled = true;
// 		aprvbttn[i].style.backgroundColor = "silver";
// 		aprvbttn[i].style.cursor = "default";

// 		rejctbttn[i].disabled = true;
// 		rejctbttn[i].style.backgroundColor = "silver";
// 		rejctbttn[i].style.cursor = "default";
// 	}
// }

// const dots = document.querySelectorAll(".dot");
// for (let i = 0; i < vacations.length; i++) {
// 	if (vacations[i].status === "Rejected") {
// 		dots[i].style.borderColor = "red";
// 	} else if (vacations[i].status === "Approved") {
// 		dots[i].style.borderColor = "green";
// 	}
// }
