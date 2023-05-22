const employees = JSON.parse(window.localStorage.getItem("employees"));
/*
0 ID
6 job title
11 VacationDays
10 username
*/
let tBody = document.querySelector("tbody");
for (var i = 0; i < employees.length; i++) {
	let data = `<tr>
  <td id= "ID">${employees[i].ID}</td>
  <td>${employees[i].username}</td>
  <td>${employees[i].jobTitle}</td>
  <td>${employees[i].vacationDays}</td>
  <td>
  <div><button class = "edit">Edit</button></div>
  <div><button class = "remove">Remove</button></div>
  </td>
  </tr>`;
	// Append data before end tag (</tbody>)
	tBody.insertAdjacentHTML("beforeend", data);
}

// const row = document.createElement("tr");
// for (var j = 0; j < 4; j++) {
// 	const cell = document.createElement("td");
// 	cell.textContent = "Ahmed";
// 	row.appendChild(cell);
// }
// tBody.appendChild(row);
