// localStorage.removeItem("ID");
// localStorage.removeItem("employees");
// IF ID not Exists
if (window.localStorage.getItem("ID") === null) {
	// Create the intial value of ID
	window.localStorage.setItem("ID", 20230000);
}
// Increment the value of the current ID by 1 to be the Next ID
const nextID = localStorage.getItem("ID") - -1;
// Display the Next ID In the input field by changing the value
document.getElementById("ID").setAttribute("value", nextID);

function addEmployee(e) {
	// save the Next ID in localStorage
	window.localStorage.setItem("ID", nextID);

	// get the values of the form fields
	const ID = localStorage.getItem("ID");
	const username = document.querySelector("input[name=EUserName]").value;
	const email = document.querySelector("input[name=Email]").value;
	const address = document.querySelector("input[name=Address]").value;
	const phoneNumber = document.querySelector("input[name=PhoneNumber]").value;
	const gender = document.querySelector("select[name=gender]").value;
	const maritalStatus = document.querySelector(
		"select[name=MaritalStatus]"
	).value;
	const birthDate = document.querySelector("input[name=Birth_Date]").value;
	const jobTitle = document.querySelector('input[name="Job Title"]').value;
	const salary = document.querySelector("input[name=Salary]").value;
	const vacationDays = document.querySelector("input[name=VacationDays]").value;
	const approvedVacationDays = 0;

	// create an object with the form values
	const employee = {
		ID,
		username,
		email,
		address,
		phoneNumber,
		gender,
		maritalStatus,
		birthDate,
		jobTitle,
		salary,
		vacationDays,
		approvedVacationDays,
	};
	// get the array of employees from local storage, or create a new empty array if none exists
	let employees = JSON.parse(localStorage.getItem("employees")) || [];
	// add the new employee object to the array
	employees.push(employee);

	// save the updated array back to local storage
	localStorage.setItem("employees", JSON.stringify(employees));
}

function isValidUsername(username) {
	// A Form of user name that The name should start with a letter at lease
	// Only accepts spaces, ( - ) and ( _ ) between characters
	// Char ( ^ ) to indicate the beginning of a string.
	// Chars ( *& ) to match any string that ends with zero or more occurrences of the characters.
	const regex = /^[a-zA-Z][a-zA-Z0-9]*([ _-][a-zA-Z0-9]+)*$/;
	// If the user's username follow the regex form, return true or false otherwise
	return regex.test(username);
}

function isValidEmail(email) {
	// A Form of E-mail following IETF standards
	const regex =
		/^[^@.]+(.[^@.]+)?(@[A-Za-z0-9]+)(\\-[A-Za-z0-9]+)?(.[0-9]*[A-Za-z]+[0-9]*(\\-[A-Za-z0-9]+)?)+$/;
	// If the user's email following the regex form return true, false otherwise
	return regex.test(email);
}

function isValidPhNum(phoneNum) {
	// Standard form of Egyptians phone number
	//  The ^ and $ characters indicate the beginning and end of the string
	const stdPhoneNum = /^(\+[2])?(010|011|012|015)\d{8}$/;
	// If the user's phone number following the regex form return true, false otherwise
	return stdPhoneNum.test(phoneNum);
}

document.forms[0].onsubmit = function (event) {
	let username = document.querySelector("[name = EUserName");
	let email = document.querySelector("[name=Email]");
	let phoneNum = document.querySelector("[name=PhoneNumber]");
	let BrthDate = new Date(document.querySelector(".Date").value);
	let nVacc = document.querySelector("[name=VacationDays]");

	const MAX_VACATIONS_NUM = 10;

	let usrnmValid = isValidUsername(username.value);
	let EmlValid = isValidEmail(email.value);
	let phoneValid = isValidPhNum(phoneNum.value);

	if (!usrnmValid) {
		event.preventDefault();
		alert("The User Name is not valid, Please try again");
		username.style.borderColor = "red"; // change border color to red
		username.focus(); // move focus to the input field
		username.addEventListener("input", function () {
			username.style.borderColor = ""; // set to default border color
		});
	}

	if (!EmlValid) {
		event.preventDefault();
		alert("The Email is not valid, Please try again");
		email.style.borderColor = "red"; // change border color to red
		email.focus(); // move focus to the input field
		email.addEventListener("input", function () {
			email.style.borderColor = ""; // set to default border color
		});
	}
	if (!phoneValid) {
		event.preventDefault();
		alert("The Phone Number is not valid, Please try again");
		phoneNum.style.borderColor = "red"; // change border color to red
		phoneNum.focus(); // move focus to the input field
		phoneNum.addEventListener("input", function () {
			phoneNum.style.borderColor = ""; // set to default border color
		});
	}

	// His Age is should be higher than 18 Years
	if (BrthDate.getFullYear() > 2005) {
		event.preventDefault();
		alert("Birth Date is not Allowed (Age > 18), Please try again");
		BrthDate.style.borderColor = "red"; // change border color to red
		BrthDate.focus(); // move focus to the input field
		BrthDate.addEventListener("input", function () {
			BrthDate.style.borderColor = ""; // set to default border color
		});
	}

	if (nVacc.value > MAX_VACATIONS_NUM) {
		event.preventDefault();
		alert("Max Vacations Days Are 10 Days per Month, Please try again");
		nVacc.style.borderColor = "red"; // change border color to red
		nVacc.focus(); // move focus to the input field
		nVacc.addEventListener("input", function () {
			nVacc.style.borderColor = ""; // set to default border color
		});
	}

	/* If the Form was Submitted Successfully
	  Update the value of the Current Stored ID in the Local Storage with the Next ID */
	if (!event.defaultPrevented) {
		event.preventDefault();
		addEmployee();
		// reset the form fields
		window.location.reload();
		alert("Employee has been added successfully");
	}
};
