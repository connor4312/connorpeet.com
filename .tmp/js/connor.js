(function() {
  $(document).ready(function() {
    var $heightmatches, $introDesign, $introDesignparent, controller, introStuff, updateHeight, windowHeight, windowWidth;
    $heightmatches = $('[data-match-height]');
    $introDesign = $('#intro .design');
    $introDesignparent = $introDesign.parent();
    windowHeight = 0;
    windowWidth = 0;
    (updateHeight = function() {
      windowHeight = $(window).height();
      windowWidth = $(window).width();
      return $heightmatches.each(function() {
        var multiplier, _ref;
        multiplier = (_ref = $(this).attr('data-match-height')) != null ? _ref : 1;
        return $(this).css('height', windowHeight * multiplier);
      });
    })();
    (introStuff = function() {
      var getLength, setLength;
      getLength = function() {
        return $introDesign.height() / Math.cos(Math.PI / 6);
      };
      setLength = function(val, right) {
        var h;
        if (right == null) {
          right = 0;
        }
        h = Math.cos(Math.PI / 6) * val;
        $introDesign.css({
          height: h,
          top: 0
        });
        return $introDesign.css('top', (-1 * $('> div', $introDesign).offset().top) + 'px');
      };
      return setLength($(window).width());
    })();
    $(window).resize(_.throttle(updateHeight, 20));
    controller = $.superscrollorama({
      triggerAtCenter: false,
      playoutAnimations: true,
      reverse: true
    });
    return controller.addTween('#intro', TweenMax.fromTo($introDesign, 1, {
      css: {
        right: -(windowWidth * 2 / Math.sqrt(3))
      },
      immediateRender: true
    }, {
      css: {
        right: -(windowWidth * 2)
      }
    }), windowHeight, 0);
  });

}).call(this);
