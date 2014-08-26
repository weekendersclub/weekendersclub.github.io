jQuery(document).ready(function($) {
    $('#wcSlide').bjqs({
        'height' : ($(window).height()),
        'width' : ($(window).width()),
        'responsive' : true,
        'automatic' : true,
        'animduration' : 450,
        'animspeed' : 4000,
        'nexttext' : '&rarr;',
        'prevtext' : '&larr;',
        'hoverpause' : false
    });
});

$(document).ready(function() {
	$('#wcSplash').css({
		'height' : ($(window).height()),
		'width' : ($(window).width())
	});
});
$(window).resize(function() {
	$('#wcSlide').css({
		'height' : ($(window).height()),
		'width' : ($(window).width())
	});
});