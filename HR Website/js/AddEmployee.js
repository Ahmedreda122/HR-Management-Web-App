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
	let stdPhoneNum = /^(\+)?(010|011|012|015)\d{8}$/;
	// If the user's phone number following the regex form return true, false otherwise
	return stdPhoneNum.test(phoneNum);
}

document.forms[0].onsubmit = function (event) {
	let email = document.querySelector("[name=Email]");
	let phoneNum = document.querySelector("[name=PhoneNumber]");
	let EmlValid = isValidEmail(email.value);
	let phoneValid = isValidPhNum(phoneNum.value);

	if (!EmlValid) {
		event.preventDefault();
		alert("The Email is not valid, Please try again");
	} else if (!phoneValid) {
		event.preventDefault();
		alert("The Phone Number is not valid, Please try again");
	}
};
