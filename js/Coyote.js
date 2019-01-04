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
  // Initial speed and position of background
  var position = 0;   
  var speed = 6;      
  
  // Use jQuery to get the background element
  var $background = $("#CoyoteBackground");  
  
  // IFFY function to figure out best animation function and store it
  var requestAnimFrame = ( function() {
    if (window.requestAnimationFrame) return window.requestAnimationFrame;
    if (window.webkitRequestAnimationFrame) return window.webkitRequestAnimationFrame;
    if (window.mozRequestAnimationFrame) return window.mozRequestAnimationFrame;
    if (window.oRequestAnimationFrame) return window.oRequestAnimationFrame;
    if (window.msRequestAnimationFrame) return window.msRequestAnimationFrame;
    else return  function( callback, element ){
        window.setTimeout(callback, element);
    };
  })();

  // Callback function to move the background 
  function draw() {
    // request another animation frame
    requestAnimFrame(draw,25);
    // reset position to 0 once the image has scrolled far enough
    if ( position < -$background.width() ) {
        position = 0;
    }
    // Set actual background position 
    $('#CoyoteBackground').css('background-position',position );
    
    // Update the background position by the speed
    position = position - speed;
  }
  // Start the animation
  draw();
  
})(jQuery);