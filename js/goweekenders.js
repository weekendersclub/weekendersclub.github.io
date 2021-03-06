$(window).load(function() {
    $('#wcSlide').bjqs({
        'height' : $(window).height() - 50,
        'width' : $(window).width(),
        'responsive' : true,
        'automatic' : true,
        'animduration' : 450,
        'animspeed' : 6000,
        'nexttext' : '<span class="fa fa-chevron-right"></span>',
        'prevtext' : '<span class="fa fa-chevron-left"></span>',
        'hoverpause' : false,
        'showmarkers' : false,
        'randomstart' : true
    });
});

function recalcSlider() {
	$('#wcSplash').css({
		'height' : $(window).height() - 50,
		'width' : $(window).width()
	});
	$('#wcSlide').css({
		'height' : $(window).height() - 50,
		'width' : $(window).width()
	});
}

$(window).load(function() {
	recalcSlider();
});
$(window).resize(function() {
	recalcSlider();
	$('#wcSlide').css('max-width', $(window).width());
});

$(document).ready(function() {
	$('.couch a').click(function(e) {
		e.preventDefault();
		$('.couchToggle').toggle();
		$(this).toggleClass('couchOff');
	});
});