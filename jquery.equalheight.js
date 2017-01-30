/*

 Version: 0.1
  Author: Varin aka Kamil Kuklinski
 Website:
    Docs:
    Repo:
  Issues:

 */

 (function($){

  	$.fn.extend({

  		equalHeight: function() {
        var item = this;

     		return this.each(function() {

        var maxHeight = 0;
          $(item).each(function () {

            var singleHeight = $(this).outerHeight();

            if  (singleHeight > maxHeight) {
              maxHeight = singleHeight;
            }

          });

        console.log(maxHeight);
         $(item).parent().css('min-height', maxHeight);

      //  $(item).parent().css('min-height', (maxHeight + ($(item).parent().outerHeight()) - ($(item).parent().height())) );

     		});

     	}
 	});
 })(jQuery);
