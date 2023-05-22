window.localStorage.setItem("Ahmed_Reda", "Ahmed45##");
window.localStorage.setItem("Nate F", "12345678");
window.localStorage.setItem("Arthur Morgan", "password"); // Manager
window.localStorage.setItem("Dutch", "dutch7890"); // Manager
window.localStorage.setItem("MaryBeth", "Mary1254");
window.localStorage.setItem("John Marston", "AbigailandJack");
console.log("HEY");
// Get all keys from local storage
const keys = Object.keys(localStorage);

let usrname = document.querySelector("[name=Username]");
let pass = document.querySelector("[name=password]");

window.onload = function () {
	usrname.focus();
};
// Onblur means when leaving the focused element (bluring the focus or quiting focus mode to blur mode)
usrname.onblur = function () {
	pass.focus();
};

// Array of Managers' Names
const ManagerNames = ["Arthur Morgan", "Dutch"];

document.forms[0].onsubmit = function (event) {
	let usrValid = false;
	let passValid = false;
	let isManager = false;

	if (usrname.value.length < 30 && usrname.value.length >= 4) {
		for (let i = 0; i < window.localStorage.length; i++) {
			// Get the the key (Username) from localStorage
			if (usrname.value == window.localStorage.key(i)) {
				usrValid = true;
				for (let j = 0; j < ManagerNames.length; ++j) {
					if (usrname.value === ManagerNames[j]) {
						isManager = true;
					}
				}
				break;
			}
		}
	}

	if (!usrValid) {
		alert("The username is not valid, Please try again");
		event.preventDefault();
	}

	if (pass.value.length < 50 && pass.value.length >= 8) {
		//console.log(pass.value.length);
		for (let i = 0; i < window.localStorage.length; i++) {
			//console.log(window.localStorage.getItem(keys[i]));
			// Get the value of the key (Password) from localStorage
			if (pass.value === window.localStorage.getItem(keys[i])) {
				passValid = true;
				break;
			}
		}
	}

	if (!passValid) {
		alert("The password is not valid, Please try again");
		event.preventDefault();
	}

	if (passValid && usrValid) {
		event.preventDefault();
		if (isManager) {
			window.location.href = "/MHome"; // name of view
		} else {
			window.location.href = "/HrHome";
		}
	}
};
