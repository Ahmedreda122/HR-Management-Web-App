const employees = JSON.parse(window.localStorage.getItem("employees"));
const vacations = JSON.parse(window.localStorage.getItem("vacations"));

let tBody = document.querySelector("tbody");
for (var i = 0; i < vacations.length; i++) {
  let data = `<tr>
  <td id= "ID">${vacations[i].employeeID}</td>`;
  if (employees[i].ID === vacations[i].employeeID) {
    var data1 = `<td>${employees[i].username}</td>`;
  }
  let data2 = `
  <td>${vacations[i].startDate}</td>
  <td>${vacations[i].endDate}</td>
  <td>${vacations[i].reason}</td>
  <td><span class="dot"></span><span class="status">${vacations[i].status}<span></td>
  </tr>`;
  data = data + data1 + data2; // concatenate

  // Append data before end tag (</tbody>)
  tBody.insertAdjacentHTML("beforeend", data);
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
