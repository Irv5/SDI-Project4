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

// Array: Find the smallest value in an array that is greater than a given number

var aSmallestValue = function(numArray, number) {
	var largerNums = [],
		smallestNum;

	for (i = 0; i < numArray.length; i++) {
		if (numArray[i] > number) {
			largerNums.push(numArray[i]);
		}
	}

	smallestNum = largerNums[0];

	for (j = 0; j < largerNums.length; j++) {
		if (smallestNum > largerNums[j]) {
			smallestNum = largerNums[j];
		}
	}

	return ("The smallest number that is greater than " + number + " is " + smallestNum + ".");
}

// Given a string that is a list of things separated by a given string, as well as another string separator, return a string with the first separator changed to the second: "a,b,c" + "," + "/" → "a/b/c".

var sCharChanged = function (string, firstChar, secondChar) {
	var myString = string,
		first = new RegExp(firstChar, "g"); // The "g" stands for "global", which replaces all matches, and not just the first one.

	myString = myString.replace(first, secondChar);

	return myString;
}

// Is the string a URL? (Does it start with http: or https:?)

var sUrlCheck = function (string) {
	var url = string,
		check = "",
		checkArray = [],
		end = url.indexOf(":");

	checkArray[0] = "http:";
	checkArray[1] = "https:";

	check = url.substring(0, end + 1);

	if (check === checkArray[0]) {
		return (url + " is a valid URL.");
	}
	else if (check === checkArray[1]) {
		return (url + " is a valid URL.");
	}
	else {
		return (url + " is not a valid URL.");
	}
}
	
	console.log(nDecPlaceAdded(3.6));
	console.log(nDecPlaceAdded(9.9));
	
	console.log(bPhoneNumberCheck("314-583-0268"));
	console.log(bPhoneNumberCheck("7046379381"));
	
	console.log(sCheckEmailAddress("irv5@fullsail.edu"));
	console.log(sCheckEmailAddress("testemail.com"));
	
	var numArray = [6, 17, 24]
	console.log(aSmallestValue(numArray, 7));
	
	console.log(sCharChanged("a, b, c," ,",","/"));
	
	console.log(sUrlCheck("http://www.fullsail.com/"));
	console.log(sUrlCheck("https://fullsail.com"));