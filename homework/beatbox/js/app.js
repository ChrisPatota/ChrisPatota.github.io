$(document).on('keydown', function(q) {
	if (q.which === 81) {
		playKick()
	}
})

function playKick() {
	var sound = new Howl({
  	src: ['assets/kick.mp3']
	});
	sound.once('load', function(){
  	sound.play();
	});
	$('#kick').removeClass('inactive')
	$('#kick').addClass('active')
	console.log('click')
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

$(document).on('keydown', function(w) {
	if (w.which === 87) {
		playHihat()
	}
})

function playHihat() {
	var sound = new Howl({
  	src: ['assets/hihat.mp3']
	});
	sound.once('load', function(){
  	sound.play();
	});
	$('#hi-hat').removeClass('inactive')
	$('#hi-hat').addClass('active')
	console.log('click')
}

$(document).on('keyup', function(w) {
	if (w.which === 87) {
		resetHihat()
	}
})

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
	sound.once('load', function(){
  	sound.play();
	});
	$('#snare').removeClass('inactive')
	$('#snare').addClass('active')
	console.log('click')
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

$(document).on('keydown', function(s) {
	if (s.which === 83) {
		playCrash()
	}
})

function playCrash() {
	var sound = new Howl({
  	src: ['assets/crash.mp3']
	});
	sound.once('load', function(){
  	sound.play();
	});
	$('#crash').removeClass('inactive')
	$('#crash').addClass('active')
	console.log('click')
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
