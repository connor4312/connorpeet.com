(function() {
  $(document).ready(function() {
    var $heightmatches, $introDesign, $introDesignparent, controller, introStuff, updateHeight;
    $heightmatches = $('[data-match-height]');
    $introDesign = $('#intro .design');
    $introDesignparent = $introDesign.parent();
    (updateHeight = function() {
      var windowHeight, windowWidth;
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
      setLength = function(val, left) {
        var h, r;
        if (left == null) {
          left = 0;
        }
        h = Math.cos(Math.PI / 6) * val;
        r = Math.tan(Math.PI / 6) * 700;
        $introDesign.css({
          height: h,
          right: r,
          top: 0
        });
        return $introDesign.css('top', (-1 * $('> div', $introDesign).offset().top) + 'px');
      };
      return setLength($(window).width() * 0.5);
    })();
    $(window).resize(_.throttle(updateHeight, 20));
    return controller = $.superscrollorama({
      triggerAtCenter: false,
      playoutAnimations: true
    });
  });

}).call(this);
