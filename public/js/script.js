function Game() {
	this.party = "";
	this.hits = 0;
	// this.playing = "";
	// this.isPlaying = true;
}

function timer() {
	// if (isPlaying === true) {
		var footer = $('#footer').height();
		var body = $(window).height();
		if (footer < body) {
			$('#footer').css('height','+=10px');
		} 
	// } 
	// else {
	// 	clearInterval(play);
	// 	$('#footer').css('height', '100px');
	// }
}

Game.prototype.playGame = function() {
	$('body').css('opacity', 1);
	// this.isPlaying = true;
	var playing = setInterval(timer, 400);
};

Game.prototype.pause = function() {
	this.isPlaying = false;
	// clearInterval(this.playing);
	$('body').css('opacity', 0.6);
};

function newGame() {
	return new Game();
}

$(document).ready(function() {

	var gameplay = newGame();

	$('.allfaces').click(function(e) {
	// $('.col-sm-2').click(function(e) {
		// $(this).animate({ width: "0%" }, 200);
		// if(if display prop of any div within #main is ) {

		// } else {
			$(this).toggle();
			$('#footer').css('height','-=5px');
			$('body').css('cursor', 'url(pow.png), auto');
			$(this).on('mouseleave', function() {
				$('body').css('cursor', 'url(boxingglove.png), auto');
			});
		// }
	});

	$('.facebonus').on('click', function() {
		$('#footer').css('height','-=100px');
	});

	$(document).keypress(function(event) {
		if (event.which === 13) {
			// gameplay.playGame();
			$('body').css('opacity', 1);
			// this.isPlaying = true;
			var playing = setInterval(timer, 400);
		}
	});

	$(document).keypress(function(event) {
		if (event.which === 32) {
			gameplay.pause();
		}
	});

});