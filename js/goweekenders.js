jQuery(document).ready(function($) {
    $('#wcSlide').bjqs({
        'height' : ($(window).height()) - 50,
        'width' : ($(window).width()),
        'responsive' : true,
        'automatic' : true,
        'animduration' : 450,
        'animspeed' : 4000,
        'nexttext' : '<span class="fa fa-chevron-right"></span>',
        'prevtext' : '<span class="fa fa-chevron-left"></span>',
        'hoverpause' : false
    });
});

$(document).ready(function() {
	$('#wcSplash').css({
		'height' : ($(window).height()) - 50,
		'width' : ($(window).width())
	});
});
$(window).resize(function() {
	$('#wcSplash').css({
		'height' : ($(window).height()) - 50,
		'width' : ($(window).width())
	});
});