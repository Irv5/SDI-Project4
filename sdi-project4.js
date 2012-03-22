// SDI Project4
// Author: Irvin Reaves
// Created for: SDI Online

// Number: Format a number to use a specific number of decimal places, as for money: 2.1 → 2.10


var nDecPlaceAdded = function (number) {
	var numberWithDec;

	numberWithDec = number.toFixed(2);

	return (number + " rounded to " + numberWithDec);	
}

// Boolean: Does a string follow a 123-456-7890 pattern like a phone number?

var bPhoneNumberCheck = function (phoneNumber) {
	var number = phoneNumber,
		regExpPattern = /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/, // This regExpPattern allowes 10 digits with or without hyphens.
		check;

	check = regExpPattern.test(number);

	if (check) {
		return (true + " valid phone number.");
	}
	else {
		return (false + " not a valid phone number.");
	}
}

// String: Does a string follow an aaa@bbb.ccc pattern like an email address?

var sCheckEmailAddress = function (localEmail) {
	var email = localEmail,
		checkAt = 0,
		checkDot = 0;

	checkAt = email.indexOf("@");
	checkDot = email.indexOf(".");

	if (checkAt != -1 && checkDot != -1) {
		if (checkAt < checkDot) {
			if (checkDot - checkAt != 1) {
				return (email + " is a valid email.");
			}
			else {
				return (email + " is not a valid email.");
			}
		}
		else {
			return (email + " is not a valid email.");
		}
	}
	else {
		return (email + " is not a valid email.");
	}	
}

	
	console.log(nDecPlaceAdded(3.6));
	console.log(nDecPlaceAdded(9.9));
	
	console.log(bPhoneNumberCheck("314-583-0268"));
	console.log(bPhoneNumberCheck("7046379381"));
	
	console.log(sCheckEmailAddress("irv5@fullsail.edu"));
	console.log(sCheckEmailAddress("testemail.com"));