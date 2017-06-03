$(function () {
   if($().swipe){
        $('.ui_navlist li').swipe({
            threshold: 0,
            swipeRight: function () {
                $(this).find('div').addClass('show')
            },
            swipeLeft: function () {
                $(this).find('div').removeClass('show')
            }
        });
   }
});