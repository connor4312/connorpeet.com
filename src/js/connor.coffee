$(document).ready ->

	$heightmatches = $('[data-match-height]')
	$introDesign = $('#intro .design')

	$introDesignparent = $introDesign.parent()

	do updateHeight = ->
		windowHeight = $(window).height();
		windowWidth = $(window).width();

		$heightmatches.each ->
			multiplier = $(@).attr('data-match-height') ? 1;
			$(@).css 'height',  windowHeight * multiplier

	do introStuff = ->
		getLength = -> $introDesign.height() / Math.cos(Math.PI/6)
		setLength = (val, right = 0) ->
			h = Math.cos(Math.PI/6) * val
			$introDesign.css
				height: h
				top: 0
			$introDesign.css 'top', (-1 * $('> div', $introDesign).offset().top) + 'px'

		setLength $(window).width() * 0.5

	$(window).resize _.throttle(updateHeight, 20)

	controller = $.superscrollorama {
		triggerAtCenter: false
		playoutAnimations: true
	}
