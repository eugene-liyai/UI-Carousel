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
   if (window.IScroll) {
       $('ui_searchlist > div[id][data-scroll]').each(function () {
           var id = $(this).attr('id');
           var size = $(this).attr('data-scroll');

           $(this).attr('style', 'height: '+size+'px;');
       })
   }
});