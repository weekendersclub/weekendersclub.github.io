jQuery(document).ready(function($) {
    $('#wcSlide').bjqs({
        'height' : ($(window).height()),
        'width' : ($(window).width()),
        'responsive' : true
    });
});

$(document).ready(function() {
	$('#wcSplash').css({
		'height' : ($(window).height()),
		'width' : ($(window).width())
	});
});
$(window).resize(function() {
	$('#wcSplash').css('height', $(window).height());
});