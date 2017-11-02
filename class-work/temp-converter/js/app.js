// Fahrenheit = Celsius * 1.8 + 32
// 	Celsis = (Fahrenheit - 32) / 1.8

var cTemp = 0;
var fTemp = 0;

$('#f-temp-button').click(fTempConvert);

function fTempConvert() {
	var fTempInput = $('#f-temp').val();
	fTemp = parseInt(fTempInput);
	cTemp = (fTemp - 32) / 1.8;
	$('#c-temp').val(cTemp);
	console.log(fTemp);
}

$('#c-temp-button').click(cTempConvert);

function cTempConvert() {
	var cTempInput = $('#c-temp').val();
	cTemp = parseInt(cTempInput);
	fTemp = cTemp * 1.8 + 32;
	$('#f-temp').val(fTemp);
	console.log(cTemp);
}

$('#f-temp').click(fTempReset);

function fTempReset() {
	$('#f-temp').val('')
}

$('#c-temp').click(cTempReset);

function cTempReset() {
	$('#c-temp').val('')
}



