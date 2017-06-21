function Game() {
	this.party = "";
	this.hits = 0;
}

function timer(difficulty) {
	console.log(this);
	var footer = $('#footer').height();
	var body = $(window).height();
	if (footer < body) {
		$('#footer').css('height','+=' + difficulty + 'px');
	} else {
		alert("YOU LOSE!");
		location.reload();
	}
}

function newGame() {
	return new Game();
}

$(document).ready(function() {

	var difficulty = $('#difficulty').val();

	$(document).on('change', '#difficulty', function(e) {
		console.log("DIFF");
    difficulty = $(this[this.selectedIndex]).val();
	});

	alert("Hit ENTER key to start!");

	var gameplay = newGame();
	var numberOfFaces = 36;
	var win = false;

	$(document).keypress(function(event) {
		/////////////
		// START ////////>>>>
		/////////////
		if (event.which === 13) {
				$('body').css('cursor', 'url(boxingglove.png), auto');
				$('body').css('opacity', 1);
				$('body').css('background-image', 'none');
				var playing = setInterval(timer.bind(this, difficulty), 400);
				$('.allfaces').click(function(e) {
					if (gameplay.hits <= numberOfFaces) {
						$(this).toggle();
						$('#footer').css('height','-=5px');
						$('body').css('cursor', 'url(pow.png), auto');
						$(this).on('mouseleave', function() {
							$('body').css('cursor', 'url(boxingglove.png), auto');
						});
						gameplay.hits += 1;
						if (gameplay.hits === numberOfFaces) {
							$('body').css('background-color', 'black');
							win = true;
						}
					} 
					if (win) {
						setTimeout(function() {
							clearInterval(playing);
							$('body').css('opacity', 0.6);
							alert("YOU WIN!")
							location.reload();
						}, 200)
					}
				});

				$('.facebonus').on('click', function() {
					$('#footer').css('height','-=100px');
				});

		}
	});

	$(document).keypress(function(event) {
		if (event.which === 32) {
			gameplay.pause();
		}
	});

});