const validIds =
  "20230000,20230001,20230002,20230003,20230004,20230005,20230006,20230007";
localStorage.setItem("validIds", validIds);

const hidden = document.getElementsByClassName("hidden-div");

// Find the submit button
const submitBtn = document.getElementById("submitBtn");
// Find the input field for the ID
const idInput = document.getElementById("idInput");

// Add a click event listener to the submit button
submitBtn.addEventListener("click", () => {
  // Check if the input ID is in the list of valid IDs
  if (validIds.includes(idInput.value)) {
    // hidden[0].style.display = "block";
    alert("Vacation Submitted");
  } else {
    // ID is invalid, show an error message
    alert("Invalid ID");
  }
});
