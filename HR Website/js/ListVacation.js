const employees = JSON.parse(window.localStorage.getItem("employees"));
const vacations = JSON.parse(window.localStorage.getItem("vacations"));

console.log(vacations.length);
let tBody = document.querySelector("tbody");
for (var i = 0; i < vacations.length; i++) {
  let data = `<tr>
  <td id= "ID">${vacations[i].employeeID}</td>
  <td>${vacations[i].startDate}</td>
  <td>${vacations[i].endDate}</td>
  <td>${vacations[i].reason}</td>
  <td>Pending</td>
  <td>
  <div><button class="btn">Submit</button></div>
  </td>
  </tr>`;
  // Append data before end tag (</tbody>)
  tBody.insertAdjacentHTML("beforeend", data);
}
