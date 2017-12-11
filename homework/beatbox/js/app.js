// keydown and keyup handlers for beatbox
// sound files are pulled from open freesound.org
// I used the howler.js library to call and play the sounds

$(document).on('keydown', function(q) {
	if (q.which === 81) {
		playKick()
	}
})

function playKick() {
	var sound = new Howl({
  	src: ['assets/kick.mp3']
	});
  	sound.play();
	$('#kick').removeClass('inactive')
	$('#kick').addClass('active')
	console.log('boom')
}

$(document).on('keyup', function(q) {
	if (q.which === 81) {
		resetKick()
	}
})

function resetKick() {
	$('#kick').removeClass('active')
	$('#kick').addClass('inactive')
}

// these handle clicks on buttons for mobile

$('#kick').click(kickClick)

function kickClick() {
	playKick();
	resetKick();
}

$(document).on('keydown', function(w) {
	if (w.which === 87) {
		playHihat()
	}
})

function playHihat() {
	var sound = new Howl({
  	src: ['assets/hihat.mp3']
	});
  	sound.play();
	$('#hi-hat').removeClass('inactive')
	$('#hi-hat').addClass('active')
	console.log('tick')
}

$(document).on('keyup', function(w) {
	if (w.which === 87) {
		resetHihat()
	}
})

$('#hi-hat').click(hihatClick)

function hihatClick() {
	playHihat();
	resetHihat();
}

function resetHihat() {
	$('#hi-hat').removeClass('active')
	$('#hi-hat').addClass('inactive')
}

$(document).on('keydown', function(a) {
	if (a.which === 65) {
		playSnare()
	}
})

function playSnare() {
	var sound = new Howl({
  	src: ['assets/snare.mp3']
	});
  	sound.play();
	$('#snare').removeClass('inactive')
	$('#snare').addClass('active')
	console.log('pop')
}

$(document).on('keyup', function(a) {
	if (a.which === 65) {
		resetSnare()
	}
})

function resetSnare() {
	$('#snare').removeClass('active')
	$('#snare').addClass('inactive')
}

$('#snare').click(snareClick)

function snareClick() {
	playSnare();
	resetSnare();
}

$(document).on('keydown', function(s) {
	if (s.which === 83) {
		playCrash()
	}
})

function playCrash() {
	var sound = new Howl({
  	src: ['assets/crash.mp3']
	});
  	sound.play();
	$('#crash').removeClass('inactive')
	$('#crash').addClass('active')
	console.log('pshhh')
}

$(document).on('keyup', function(s) {
	if (s.which === 83) {
		resetCrash()
	}
})

function resetCrash() {
	$('#crash').removeClass('active')
	$('#crash').addClass('inactive')
}

$('#crash').click(crashClick)

function crashClick() {
	playCrash();
	resetCrash();
}

$('#first-loop').on('click', playRhodes)

function playRhodes() {
	var sound = new Howl({
  	src: ['assets/rhodes.mp3'],
  	loop: true,
	});
	sound.play();
	$('#first-loop').removeClass('inactive')
	$('#first-loop').addClass('active')
	console.log('click')
}

$('#second-loop').on('click', playOtherRhodes)

function playOtherRhodes() {
	var sound = new Howl({
  	src: ['assets/nice-bird.mp3'],
  	loop: true,
	});
	sound.play();
	$('#second-loop').removeClass('inactive')
	$('#second-loop').addClass('active')
	console.log('click')
}

$('#reset').on('click', reloadPage)

function reloadPage() {
	location.reload();
}
