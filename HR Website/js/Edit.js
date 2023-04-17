// Retrieve the stored ID value from localStorage
const id = localStorage.getItem('employeeId');

// Set the value of the ID field to the retrieved value
document.querySelector('#id').value = id;

// Clear the stored ID value from localStorage as we don't need it again
localStorage.removeItem('employeeId');