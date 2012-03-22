// SDI Project4
// Author: Irvin Reaves
// Created for: SDI Online

// Number: Format a number to use a specific number of decimal places, as for money: 2.1 → 2.10


var nDecPlaceAdded = function (number) {
	var numberWithDec;

	numberWithDec = number.toFixed(2);

	return (number + " rounded to " + numberWithDec);	
}



	
	console.log(nDecPlaceAdded(3.6));
	console.log(nDecPlaceAdded(9.9));