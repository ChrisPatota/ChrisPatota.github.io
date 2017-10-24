var total = 0;

$('#a10').click(add10);
$('#a20').click(add20);
$('#a30').click(add30);
$('#n10').click(sub10);
$('#n20').click(sub20);
$('#n30').click(sub30);

function add10() {
	total = total + 10;
	$('#out').html(total);
}

function add20() {
	total = total + 20;
	$('#out').html(total);
}

function add30() {
	total = total + 30;
	$('#out').html(total);
}

function sub10() {
	total = total - 10;
	$('#out').html(total);
}

function sub20() {
	total = total - 20;
	$('#out').html(total);
}

function sub30() {
	total = total - 30;
	$('#out').html(total);
}

$('#red').click(redBackground)
$('#blue').click(blueBackground)
$('#out').click(backgroundReset)

function redBackground() {
	$('#out').css('background-color','red')
}

function blueBackground() {
	$('#out').css('background-color','blue')
}

function backgroundReset() {
	$('#out').css('background-color','white')
	total = 0
	$('#out').html(total)
}

