const employees = JSON.parse(window.localStorage.getItem("employees"));

// Find the submit button
const submitBtn = document.getElementById("submitBtn");
// Find the input field for the ID
const idInput = document.getElementById("idInput");
const startD = document.getElementById("startD");
const endD = document.getElementById("endD");

// Add a click event listener to the submit button
document.forms[0].onsubmit = function (event) {
  // Check if the input ID is in the list of valid IDs
  let checkid = false;
  for (let i = 0; i < employees.length; i++) {
    if (employees[i].ID.includes(idInput.value) && idInput !== "") {
      // event.preventDefault();
      checkid = true;
      // console.log("done")
    }
  }
  if (!checkid) {
    event.preventDefault();
    // ID is invalid, show an error message
    idInput.focus();
    idInput.style.borderColor = "red";
    idInput.addEventListener("input", function () {
      idInput.style.borderColor = ""; // set to default border color
    });
    alert("Invalid ID");
  }

  let checkDate = false;
  const start = new Date(startD.value);
  const end = new Date(endD.value);
  if (start >= end) {
    event.preventDefault();
    alert("End date must be after start date");
    endD.focus();
    endD.style.borderColor = "red";
    startD.style.borderColor = "red";
    startD.addEventListener("input", function () {
      startD.style.borderColor = ""; // set to default border color
    });
    endD.style.borderColor = "red";
    endD.addEventListener("input", function () {
      endD.style.borderColor = ""; // set to default border color
    });
  } else {
    checkDate = true;
  }
  if (checkDate && checkid) {
    event.preventDefault();
    alert("Vacation Submitted");
    window.location.href = "H Home.html";
  }
  // console.log("Checking date is : " + start)
  // console.log("Checking date is : " + end)
};
