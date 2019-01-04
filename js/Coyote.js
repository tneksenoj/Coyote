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

var Coyote = {
    position : 0,
    speed : -12,
    images : ["img/Coyote_right.gif", "img/Coyote_left.gif", "img/Coyote_whirls.gif"],
    $sprites: null,
	width: null,
    init : function( width ) {
        // Put the coyote on the screen
		this.width = width;
		this.$sprites = $.preload( this.images );
        $('div#Coyote').empty().append(this.$sprites[0]);
    },
	go_whirl : function() {
		$('div#Coyote').empty().append(this.$sprites[2]);
	},	
	go_left : function() {
		$('div#Coyote').empty().append(this.$sprites[1]);
	},
	go_right : function() {
		$('div#Coyote').empty().append(this.$sprites[0]);
	},	
    change_direction : function() {
        this.speed *= -1.0;
        // show whirlwind then switch to new image
        this.go_whirl();
        if (this.speed > 0)
            setTimeout( this.go_left.bind(this), 200);
        else
            setTimeout( this.go_right.bind(this), 200);
    },
    run : function() {
        if (this.position * (1.0 / 12.0) <= -this.width || this.position * (1.0 / 12.0) >= this.width) {
            this.position = 0;
        }
        this.position = this.position + this.speed;
    }
}

