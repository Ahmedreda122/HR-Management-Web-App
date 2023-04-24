// const HRs = JSON.parse(window.localStorage.getItem("HRs"));
const employees = JSON.parse(window.localStorage.getItem("employees"));
const vacations = JSON.parse(window.localStorage.getItem("vacations"));
let tBody = document.querySelector("tbody");
for (var i = 0; i < vacations.length; i++) {
  let data = `<tr>
	<td id= "ID">${vacations[i].employeeID}</td>`;
  let data1 = "";
  for (var j = 0; j < employees.length; j++) {
    if (employees[j].ID === vacations[i].employeeID) {
      data1 = `<td>${employees[j].username}</td>`;
      break;
    }
  }
  let data2 = `
	<td>${vacations[i].startDate}</td>
	<td>${vacations[i].endDate}</td>
	<td>${vacations[i].reason}</td>
	<td><span class="dot"></span><span class="status">${vacations[i].status}<span></td>
	<td>
	<div>
	  <button class="approve">Approve</button>
	  <button class="reject">Reject</button>
	</div>
  </td>
	</tr>`;
  data = data + data1 + data2; // concatenate

  // Append data before end tag (</tbody>)
  tBody.insertAdjacentHTML("beforeend", data);
}

var isPending = true;
const aprvbttn = document.querySelectorAll(".approve");
const rejctbttn = document.querySelectorAll(".reject");

aprvbttn.forEach((button) => {
  button.addEventListener("click", (event) => {
    isPending = false;
    const EmployeeVacationID = event.target
      .closest("tr")
      .querySelector("#ID").innerHTML;
    localStorage.setItem("EmployeeVacationID", EmployeeVacationID);
    for (var i = 0; i < vacations.length; i++) {
      if (EmployeeVacationID === vacations[i].employeeID) {
        vacations[i].status = "Approved";
      }
    }
    localStorage.setItem("vacations", JSON.stringify(vacations));
    button.closest("tr").getElementsByClassName("status")[0].innerHTML =
      "Approved";
    button.closest("tr").getElementsByClassName("dot")[0].style.borderColor =
      "#0fff0f";
    button.closest("div").innerHTML = "Action Taken";
  });
});

rejctbttn.forEach((button) => {
  button.addEventListener("click", (event) => {
    isPending = false;
    const EmployeeVacationID = event.target
      .closest("tr")
      .querySelector("#ID").innerHTML;
    localStorage.setItem("EmployeeVacationID", EmployeeVacationID);
    for (var i = 0; i < vacations.length; i++) {
      if (EmployeeVacationID === vacations[i].employeeID) {
        vacations[i].status = "Rejected";
      }
    }
    localStorage.setItem("vacations", JSON.stringify(vacations));
    button.closest("tr").getElementsByClassName("status")[0].innerHTML =
      "Rejected";
    button.closest("tr").getElementsByClassName("dot")[0].style.borderColor =
      "red";
    button.closest("div").innerHTML = "Action Taken";
  });
});

for (let i = 0; i < aprvbttn.length; i++) {
  const status = aprvbttn[i].closest("tr").querySelector(".status").textContent;

  if (status !== "Pending") {
    rejctbttn[i].disabled = true;
    rejctbttn[i].style.backgroundColor = "silver";
    rejctbttn[i].style.cursor = "default";

    aprvbttn[i].disabled = true;
    aprvbttn[i].style.backgroundColor = "silver";
    aprvbttn[i].style.cursor = "default";
  }
}

const dots = document.querySelectorAll(".dot");
for (let i = 0; i < vacations.length; i++) {
  if (vacations[i].status === "Rejected") {
    dots[i].style.borderColor = "red";
  }
}
for (let i = 0; i < vacations.length; i++) {
  if (vacations[i].status === "Approved") {
    dots[i].style.borderColor = "green";
  }
}
