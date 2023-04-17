const employees = JSON.parse(window.localStorage.getItem("employees"));

const usrID = document.querySelector("[name=U_ID]");
console.log(usrID);
let usrName = document.querySelector("[name=E_User_Name]");
const email = document.querySelector("[name=U_Email]");
const address = document.querySelector("[name=U_Address]");
const Mstatus = document.querySelector("[name=MaritalStatus]");
const gender = document.querySelector("[name=gender]");
const nphone = document.querySelector("[name=U_Phone_Number]");
const salary = document.querySelector("[name=U_Salary]");
const VaccDay = document.querySelector("[name=U_Vacation_Days]");

const currentEmployeeID = localStorage.getItem("currentEmployeeID");
document.querySelector("#id").value = currentEmployeeID;
for (var i = 0; i < employees.length; i++) {
	if (employees[i].ID == currentEmployeeID) {
		usrID.value = employees[i].ID;
		usrName.value = employees[i].username;
		email.setAttribute("value", `${employees[i].email}`);
		address.setAttribute("value", `${employees[i].address}`);
		Mstatus.setAttribute("value", `${employees[i].maritalStatus}`);
		gender.setAttribute("value", `${employees[i].gender}`);
		nphone.setAttribute("value", `${employees[i].phoneNumber}`);
		salary.setAttribute("value", `${employees[i].salary}`);
		VaccDay.value = employees[i].vacationDays;
		break;
	}
}
