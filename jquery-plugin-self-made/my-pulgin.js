;(function($) {
  $.fn.myPulgin = function(options) {
    const defaults = {
      title: 'foo',
      border: '1px solid #000'
    };

    const {
      title,
      border
    } = $.extend(defaults, options);

    $(this).text(title);
    $(this).css({
      border
    })

    return this;
  };
})(jQuery);