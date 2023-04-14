const srchInput = document.querySelector(".srchfield"); // search input field
const tableRows = document.querySelector(".table"); // whole table
const rows = tableRows.getElementsByTagName("tr"); // array of rows (tr)
const cption = document.querySelector(".caption"); // caption

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

const rmvbtn = document.getElementsByClassName("remove"); // array of all remove buttons
for (let i = 0; i < rmvbtn.length; i++) {
  rmvbtn[i].onclick = function () {
    if (confirm("Are you sure to remove this employee?")) {
      rows[i + 2].remove();
    }
  };
}
// const rmvbtn = document.getElementsByClassName("remove"); // array of all remove buttons
// for (let i = 0; i < rmvbtn.length; i++) {
//   rmvbtn[i].onclick = function () {
//     if (confirm("Are you sure to remove this employee?")) {
//       rmvbtn[i].closest("tr").parentNode.removeChild(rmvbtn[i].closest("tr"));
//     }
//   };
// }
