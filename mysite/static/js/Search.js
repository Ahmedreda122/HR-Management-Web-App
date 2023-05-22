const srchInput = document.querySelector(".srchfield"); // search input field
const tableRows = document.querySelector(".table"); // whole table
const rows = tableRows.getElementsByTagName("tr"); // array of rows (tr)
const cption = document.querySelector(".caption"); // caption

srchInput.addEventListener("input", function () {
  let icon = document.getElementsByTagName("svg")[0];
  if (srchInput.value === "") {
    icon.style.display = ""; // Show the icon again when there is no input
  } else {
    icon.style.display = "none"; // Hide the icon when the user type anything
  }
});

srchInput.addEventListener("input", function () {
  let found = false;
  const item = srchInput.value.toLowerCase();
  for (let i = 2; i < rows.length; i++) {
    // start from 2 as we don't need to include the thead (table header)
    const name = rows[i]
      .getElementsByTagName("td")[1]
      .textContent.toLocaleLowerCase();
    // textContent only applies to elements that can contain text, such as <p> or <span>
    // value returns the current value entered by the user
    // loop through table on column name which is column 1 and get its textContent
    if (name.includes(item)) {
      rows[i].style.display = ""; // default
      found = true;
    } else {
      rows[i].style.display = "none"; // hide other rows that don't match with the input
    }
  }
  if (!found) {
    cption.style.display = "none";
    rows[1].style.display = "none"; // hide the table header
    rows[0].style.display = "block"; // display the word NOT FOUND!
  } else {
    // return caption and table header to its default styles
    cption.style.display = "";
    rows[1].style.display = "";
    rows[0].style.display = "";
  }
});
const vacations = JSON.parse(window.localStorage.getItem("vacations"));
const rmvbtn = document.getElementsByClassName("remove"); // array of all remove buttons
for (let i = 0; i < rmvbtn.length; i++) {
  rmvbtn[i].onclick = function (event) {
    if (confirm("Are you sure to remove this employee?")) {
      event.preventDefault();
      const ID = event.target.closest("tr").querySelector("#ID").innerHTML;
      for (let j = 0; j < employees.length; j++) {
        if (employees[j].ID == ID) {
          // const nextID = localStorage.getItem("ID") - 1; // decrement ID from local storage
          // window.localStorage.setItem("ID", nextID); // (save changes)
          employees.splice(j, 1); // remove the element at index j then shift to fill the gap.
          // number 1 represents the number of elements to remove from the array from index j
          localStorage.setItem("employees", JSON.stringify(employees)); // (save changes)
          location.reload();
          break;
        }
      }
      for (let i = 0; i < vacations.length; i++) {
        if (vacations[i].employeeID === ID) {
          vacations.splice(i, 1); // remove the element at index i then shift to fill the gap
          i--;
        }
      }
      localStorage.setItem("vacations", JSON.stringify(vacations)); // (save changes)
    }
  };
}

if (rmvbtn.length == 0) {
  //if there is no remove buttons then there is no data
  // so hide the header table to make it looks good
  rows[1].style.display = "none";
}

const editbtn = document.querySelectorAll(".edit");
editbtn.forEach((button) => {
  button.addEventListener("click", (event) => {
    // Extract the ID value of the corresponding row
    // dataset property is used to show the data-id attribute of the tr element
    const currentEmployeeID = event.target
      .closest("tr")
      .querySelector("#ID").innerHTML;
    localStorage.setItem("currentEmployeeID", currentEmployeeID);
    // Redirect the user to the update page
    window.location.href = "Update-Delete Employee.html";
  });
});
