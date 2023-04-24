const HRs = JSON.parse(window.localStorage.getItem("HRs"));

const usrID = document.querySelector("[name=U_U_ID]");
let usrName = document.querySelector("[name=E_User_Name]");
const email = document.querySelector("[name=U_Email]");
const address = document.querySelector("[name=U_Address]");
const Mstatus = document.querySelector("[name=MaritalStatus]");
const gender = document.querySelector("[name=gender]");
const nphone = document.querySelector("[name=U_Phone_Number]");
const salary = document.querySelector("[name=U_Salary]");
const VaccDay = document.querySelector("[name=U_Vacation_Days]");

const currentHrID = localStorage.getItem("currentHrID");
document.querySelector("#Id").value = currentHrID;
for (var i = 0; i < HRs.length; i++) {
  if (HRs[i].ID === currentHrID) {
    usrID.value = HRs[i].ID;
    usrName.value = HRs[i].username;
    email.value = HRs[i].email;
    address.value = HRs[i].address;
    Mstatus.value = HRs[i].maritalStatus;
    gender.value = HRs[i].gender;
    nphone.value = HRs[i].phoneNumber;
    salary.value = HRs[i].salary;
    VaccDay.value = HRs[i].vacationDays;
    console.log(`${HRs[i].email}`);
    console.log(`${HRs[i].maritalStatus}`);
    console.log(`${HRs[i].gender}`);
    console.log(`${HRs[i].phoneNumber}`);
    console.log(`${HRs[i].salary}`);
    break;
  }
}

const updateButton = document.querySelector('.send[value="Update"]');

updateButton.addEventListener("click", (event) => {
  event.preventDefault();
  for (var i = 0; i < HRs.length; i++) {
    if (HRs[i].ID === currentHrID) {
      //   HRs[i].ID = usrID.value;
      HRs[i].username = usrName.value;
      HRs[i].email = email.value;
      HRs[i].address = address.value;
      HRs[i].maritalStatus = Mstatus.value;
      HRs[i].gender = gender.value;
      HRs[i].phoneNumber = nphone.value;
      HRs[i].salary = salary.value;
      HRs[i].vacationDays = VaccDay.value;
      alert("The HR data has been updated successfully");
      break;
    }
  }
  // Updated HRs array into local storage (save changes)
  localStorage.setItem("HRs", JSON.stringify(HRs));
  location.href = "Show HR.html";
});

const deleteButton = document.querySelector('.send[value="Delete"]');

deleteButton.addEventListener("click", (event) => {
  event.preventDefault();
  for (var i = 0; i < HRs.length; i++) {
    if (HRs[i].ID === currentHrID) {
      // const nextID = localStorage.getItem("ID") - 1; // decrement ID from local storage
      // window.localStorage.setItem("ID", nextID); // (save changes)
      HRs.splice(i, 1); // remove the element at index i
      // number 1 represents the number of elements to remove from the array from index i
      break;
    }
  }
  // (save changes)
  localStorage.setItem("HRs", JSON.stringify(HRs));
  location.href = "Show HR.html";
});
