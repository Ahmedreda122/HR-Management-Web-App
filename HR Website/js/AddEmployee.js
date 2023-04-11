// IF ID not Exists
if (window.localStorage.getItem("ID") === null) {
	// Create the intial value of ID
	window.localStorage.setItem("ID", 20230000);
}
// Get The current stored value of the ID in the local storage
let nextID = window.localStorage.getItem("ID");
// Increment the value of Current ID by 1 to be the Next ID
++nextID;
// Display the Next ID In the input field
document.getElementById("ID").setAttribute("value", nextID);

function isValidEmail(email) {
	// A Form of E-mail following IETF standards
	let regex =
		/^[^@.]+(.[^@.]+)?(@[A-Za-z0-9]+)(\\-[A-Za-z0-9]+)?(.[0-9]*[A-Za-z]+[0-9]*(\\-[A-Za-z0-9]+)?)+$/;
	// IF the user's email following the regex form return true, false otherwise
	return regex.test(email);
}

function isValidPhNum(phoneNum) {
	// Standard form of Egyptain phone number
	//  The ^ and $ characters indicate the beginning and end of the string
	let stdPhoneNum = /^(\+[2])?(010|011|012|015)\d{8}$/;
	// If the user's phone number following the regex form return true, false otherwise
	return stdPhoneNum.test(phoneNum);
}

document.forms[0].onsubmit = function (event) {
	let email = document.querySelector("[name=Email]");
	let phoneNum = document.querySelector("[name=PhoneNumber]");
	let BrthDate = new Date(document.querySelector(".Date").value);
	let nVacc = document.querySelector("[name=VacationDays]");
	const MAX_VACATIONS_NUM = 10;
	let EmlValid = isValidEmail(email.value);
	let phoneValid = isValidPhNum(phoneNum.value);

	if (!EmlValid) {
		event.preventDefault();
		alert("The Email is not valid, Please try again");
	} else if (!phoneValid) {
		event.preventDefault();
		alert("The Phone Number is not valid, Please try again");
	}

	// His Age higher than 18 Years
	if (BrthDate.getFullYear() > 2005) {
		event.preventDefault();
		alert("Birth Date is not Allowed (Age > 18), Please try again");
	}

	if (nVacc.value > MAX_VACATIONS_NUM) {
		event.preventDefault();
		alert("Max Vacations Days Are 10 Days per Month, Please try again");
	}

	/* If the Form was Submitted Successfully 
	Update the value of the Current Stored ID with the Next ID in the Local Storage */
	if (!event.defaultPrevented) {
		window.localStorage.setItem("ID", nextID);
	}
};
