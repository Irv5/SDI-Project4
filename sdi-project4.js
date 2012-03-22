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


	
	console.log(nDecPlaceAdded(3.6));
	console.log(nDecPlaceAdded(9.9));
	
	console.log(bPhoneNumberCheck("314-583-0268"));
	console.log(bPhoneNumberCheck("7046379381"));