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
    var speed = 12;
    var $background = $("#DesertBackground_back");

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

    function draw() {
      requestAnimFrame(draw,25);
      
      // Update the position of each background layer
      $('#DesertBackground_clouds_2').css('background-position', (position * (1.0/12.0)) );
      $('#DesertBackground_mid').css('background-position', (position * (1.0/6.0)) );
      $('#DesertBackground_clouds_1').css('background-position', (position * (1.0/3.0)) );
      $('#DesertBackground_front').css('background-position',position  );

      // Update position
      position = position - speed;

      // Once the slowest moving background has wrapped, reset position
      if ( position* (1.0/12.0) < -$background.width() ) {
          position = 0;
      }
    }
    
    // Start the animation
    draw();
})(jQuery);