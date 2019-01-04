//////////////////////////////////////////////////////////////////////
// Author: Kent Jones
// Created by kjones on 12/18/2014
// Purpose: Coyote Utilities Functions
// Resources Used:
//  http://www.htmlandcssbook.com/
//  http://javascriptbook.com/ 
//  parallax scrolling tutorials: 
//      https://webdesign.tutsplus.com/categories/parallax-scrolling
// License: MIT License: https://opensource.org/licenses/MIT 
///////////////////////////////////////////////////////////////////////

// Function that will setup an animation frame
requestAnimFrame = (function(){
    if (window.requestAnimationFrame) return window.requestAnimationFrame;
    if (window.webkitRequestAnimationFrame) return window.webkitRequestAnimationFrame;
    if (window.mozRequestAnimationFrame) return window.mozRequestAnimationFrame;
    if (window.oRequestAnimationFrame) return window.oRequestAnimationFrame;
    if (window.msRequestAnimationFrame) return window.msRequestAnimationFrame;
    else return  function( callback, element ){
        window.setTimeout(callback, element);
    };
})();

// jQuery plugin function to preload images
$.preload = function( arr ) {
    return $.map(arr, function( val ){
        var $img = $('<img/>');
        $img[0].src = val;
        return $img[0];
    });
}

if ( typeof Object.create !== 'function' ) {
    Object.create = function(o) {
        var F = function() {};
        F.prototype = o;
        return new F();
    }
}