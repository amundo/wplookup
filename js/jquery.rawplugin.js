(function($) {
  $.fn.translate = function(options) {

   var opts = $.extend({}, $.fn.translate.defaults, options);

   return this.each(function() {
     $this = $(this);
     var o = $.meta ? $.extend({}, opts, $this.data()) : opts;
     $this.css({
       backgroundColor: o.background,
       color: o.foreground
     });
  
     var markup = $this.html();
     markup = $.fn.translate.format(markup);
     $this.html(markup);
     });
   };
  
    $.fn.translate.format = function(txt) {
      return '<strong>' + txt + '</strong>';
    };

    $.fn.translate.defaults = {
      foreground: 'red',
      background: 'yellow'
    };

})(jQuery);
