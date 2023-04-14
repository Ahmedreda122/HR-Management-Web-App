const srchInput = document.querySelector(".srchfield"); // search input field
const tableRows = document.querySelector(".table"); // whole table
const rows = tableRows.getElementsByTagName("tr"); // array of rows (tr)
const cption = document.querySelector(".caption"); // caption

srchInput.addEventListener("input", function () {
  let found = false;
  const item = srchInput.value.toLowerCase();
  for (let i = 2; i < rows.length; i++) {
    // start from 1 as we don't need to include the thead (table header)
    const name = rows[i]
      .getElementsByTagName("td")[1]
      .textContent.toLocaleLowerCase();
    //textContent only applies to elements that can contain text, such as <p> or <span>
    // value returns the current value entered by the user
    // loop through table on column name which is column 1 and get its textContent
    if (name.includes(item)) {
      rows[i].style.display = "";
      found = true;
    } else {
      rows[i].style.display = "none"; // hide other rows that don't match with the input
    }
  }
  if (!found) {
    cption.style.display = "none";
    rows[1].style.display = "none"; // hide the table header
    rows[0].style.display = "block"; // display the word NOT FOUND!
    rows[0].style.fontSize = "20px";
}
});
