//////////////////////////////////////////////////////////////////////
// Author: Kent Jones
// Created by kjones on 12/18/2014
// Purpose: Main Coyote JavaScript Class
// Resources Used:
//  http://www.htmlandcssbook.com/
//  http://javascriptbook.com/ 
//  parallax scrolling tutorials: 
//      https://webdesign.tutsplus.com/categories/parallax-scrolling
// License: MIT License: https://opensource.org/licenses/MIT 
///////////////////////////////////////////////////////////////////////


(function($){
  var position = 0;
  var speed = -12;
  
  // Create an image element for coyote going right
  var $coyote_right = $('<img/>');
  $coyote_right[0].src = "img/Coyote_right.gif";
  
  // Create an image element for coyote going left
  var $coyote_left = $('<img/>');
  $coyote_left[0].src = "img/Coyote_left.gif";
  
  // Default the Coyote div to the image going right
  $('div#Coyote').empty().append($coyote_right);
  var $background = $("#DesertBackground_back");

  // Function that will setup an animation frame
  var requestAnimFrame = (function(){
    if (window.requestAnimationFrame) return window.requestAnimationFrame;
    if (window.webkitRequestAnimationFrame) return window.webkitRequestAnimationFrame;
    if (window.mozRequestAnimationFrame) return window.mozRequestAnimationFrame;
    if (window.oRequestAnimationFrame) return window.oRequestAnimationFrame;
    if (window.msRequestAnimationFrame) return window.msRequestAnimationFrame;
    else return  function( callback, element ){
        window.setTimeout(callback, element);
    };
  })();

  $( "body" ).click(function() {
    speed *= -1.0;
    if ( speed > 0 )
        $('div#Coyote').empty().append($coyote_left);
    else
        $('div#Coyote').empty().append($coyote_right);
    $('div#Coyote').show();
  });


  function draw()  {
    requestAnimFrame(draw,25);

    $('#DesertBackground_clouds_2').css('background-position', (position * (1.0/12.0)) );
    $('#DesertBackground_mid').css('background-position', (position * (1.0/6.0)) );
    $('#DesertBackground_clouds_1').css('background-position', (position * (1.0/3.0)) );
    $('#DesertBackground_front').css('background-position',position  );

    position = position + speed;
    if ( position* (1.0/12.0) <= -$background.width() || position* (1.0/12.0) >= $background.width() ) {
      position = 0;
    }
  }

  draw();
})(jQuery);