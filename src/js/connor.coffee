$(document).ready ->

	$heightmatches = $('[data-match-height]')
	$introDesign = $('#intro .design')

	$introDesignparent = $introDesign.parent()

	windowHeight = 0;
	windowWidth = 0;

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

		setLength $(window).width()

	$(window).resize _.throttle(updateHeight, 20)

	controller = $.superscrollorama {
		triggerAtCenter: false
		playoutAnimations: true
		reverse: true
	}

	controller.addTween(
		'#intro',
		TweenMax.fromTo($introDesign, 1, {css:{right: -(windowWidth * 2/Math.sqrt(3)) }, immediateRender:true}, {css:{right: -(windowWidth *2)}}),
		windowHeight,
		0
	)