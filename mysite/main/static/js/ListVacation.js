const employees = JSON.parse(window.localStorage.getItem("employees"));
const HRs = JSON.parse(window.localStorage.getItem("HRs"));
const vacations = JSON.parse(window.localStorage.getItem("vacations"));

let tBody = document.querySelector("tbody");
for (let i = 0; i < vacations.length; i++) {
  let data = `<tr>
    <td id="ID">${vacations[i].employeeID}</td>`;
  let data1 = "";
  for (let j = 0; j < employees.length; j++) {
    if (employees[j].ID === vacations[i].employeeID) {
      data1 = `<td>${employees[j].username}</td>`;
      break;
    }
  }
  for (let j = 0; j < HRs.length; j++) {
    if (HRs[j].ID === vacations[i].employeeID) {
      data1 = `<td>${HRs[j].username}</td>`;
      break;
    }
  }
  let data2 = `
    <td>${vacations[i].startDate}</td>
    <td>${vacations[i].endDate}</td>
    <td>${vacations[i].reason}</td>
    <td><span class="dot"></span><span class="status">${vacations[i].status}</span></td>
    </tr>`;
  data = data + data1 + data2; // concatenate

  // Append data before end tag (</tbody>)
  tBody.insertAdjacentHTML("beforeend", data);
}
const dots = document.querySelectorAll(".dot");
for (let i = 0; i < vacations.length; i++) {
  if (vacations[i].status === "Rejected") {
    dots[i].style.borderColor = "red";
  } else if (vacations[i].status === "Approved") {
    dots[i].style.borderColor = "green";
  }
}
