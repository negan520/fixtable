window.setTimeout(function () {
  var scrollTop;
  if($('.fixheader').length)
  {
    var headerTop=$('.fixheader').offset().top-54
    $('#scrolv').unbind('scroll').bind('scroll',function () {
      scrollTop = this.scrollTop-headerTop;
      if($('.fixheader').length)
      {
        if($('.fixheader').offset().top<56)
        {
          $(this).find('.fixheader th').css({
            '-webkit-transform': 'translate(0, '+scrollTop+'px)',
            '-ms-transform': 'translate(0, '+scrollTop+'px)',
            'transform': 'translate(0, '+scrollTop+'px)'
          });
        }
        else {
          $(this).find('.fixheader th').css({
            '-webkit-transform': 'translate(0,0px)',
            '-ms-transform': 'translate(0,0px)',
            'transform': 'translate(0,0px)'
          });
        }
      }
    })
  }
  /* $(window).resize(function() {
   if($('.fixheader').length)
   {
   $('#scrolv').scrollTop(0)
   headerTop=$('.fixheader').offset().top-54
   }
   });*/
},500)
