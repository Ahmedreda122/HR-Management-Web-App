const employees = JSON.parse(window.localStorage.getItem("employees"));

const usrID = document.querySelector("[name=U_ID]");
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

const updateButton = document.querySelector('.send[value="Update"]');

updateButton.addEventListener("click", (event) => {
  event.preventDefault();
  for (var i = 0; i < employees.length; i++) {
    if (employees[i].ID == currentEmployeeID) {
      //   employees[i].ID = usrID.value;
      employees[i].username = usrName.value;
      employees[i].email = email.value;
      employees[i].address = address.value;
      employees[i].maritalStatus = Mstatus.value;
      employees[i].gender = gender.value;
      employees[i].phoneNumber = nphone.value;
      employees[i].salary = salary.value;
      employees[i].vacationDays = VaccDay.value;
      alert("The employee data has been updated successfully");
      break;
    }
  }
  // Updated employees array into local storage (save changes)
  localStorage.setItem("employees", JSON.stringify(employees));
  location.href = "Show Employees.html";
});

const deleteButton = document.querySelector('.send[value="Delete"]');

deleteButton.addEventListener("click", (event) => {
  event.preventDefault();
  for (var i = 0; i < employees.length; i++) {
    if (employees[i].ID == currentEmployeeID) {
      // const nextID = localStorage.getItem("ID") - 1; // decrement ID from local storage
      // window.localStorage.setItem("ID", nextID); // (save changes)
      employees.splice(i, 1); // remove the element at index i
      // number 1 represents the number of elements to remove from the array from index i
      break;
    }
  }
  // (save changes)
  localStorage.setItem("employees", JSON.stringify(employees));
  location.href = "Show Employees.html";
});
