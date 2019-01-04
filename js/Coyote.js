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
	prev_state : 'right', // Stores the previous state
	state : 'right', // left, right, whirl, jump_right, jump_left
	maxy : 240,
	y : 0,   // y position for jump
	vy_start: 18, // initial velocity in vy
	vy : 0,  // velocity for jump in y
	vymax : 52, // max velocity in y
	a : -1,  // Acceleration for jump
    x : 0, // position in x 
    vx : -12,  // velocity in x
    images : { 	left : "img/Coyote_left.gif", 
				right : "img/Coyote_right.gif", 
				whirl : "img/Coyote_whirls.gif",
				jump_right : "img/Coyote_jump_right.gif",
				jump_left : "img/Coyote_jump_left.gif" 
			},
    $sprites: null,
	width: null,
	init : function( width ) {
        // Put the coyote on the screen
		this.width = width;
		this.$sprites = $.preload( this.images );
        $('div#Coyote').empty().append(this.$sprites['right']);
    },
	change_image : function( img ) {
		var last; 
		if ( img !== last ) 
			$('div#Coyote').empty().append(this.$sprites[img]);
		last = img;
	},
	go_whirl : function() {	
		this.prev_state = this.state;
		this.state = 'whirl'; 
	},
	stop_whirl : function() { this.state = this.prev_state; },		
	go_left : function() {	this.state = 'left'; },
	go_right : function() {	this.state = 'right' },	
	jump_right : function() { this.state = 'jump_right' },
	jump_left : function() { this.state = 'jump_left' },
	jump : function() { 
		if ( this.state !== 'whirl' && this.vy <= this.vymax ) {
			this.vy += this.vy_start;
			if ( this.state === 'left' ) this.jump_left();
			else if ( this.state === 'right' ) this.jump_right();	
		}
	},
  change_direction : function() {
    this.vx *= -1.0;
    if ( this.state === 'right' ) this.go_left();
    else if ( this.state === 'left' ) this.go_right();
    else if ( this.state === 'jump_right' ) this.jump_left();
    else if ( this.state === 'jump_left' ) this.jump_right();
    // show whirlwind then switch to new image
    this.go_whirl();
    setTimeout( this.stop_whirl.bind(this), 200);
  },
    run : function() {
      if ( this.state === 'jump_left' || this.state === 'jump_right' ) {
        this.y = this.a + this.vy + this.y;
        this.vy = this.a + this.vy;
        // limit y value for jump
        if ( this.y > this.maxy ) this.y = this.maxy;
        // Check to see if the jump is finished
        if ( this.y < 0  && this.state === 'jump_right' ) {
          this.vy = 0;
          this.go_right();
        } else if ( this.y < 0  && this.state === 'jump_left' ) {
          this.vy = 0;
          this.go_left();	
        }
      }
      // Check to see if all the background images have wrapped around
      if (this.x * (1.0 / 12.0) <= -this.width || this.x * (1.0 / 12.0) >= this.width) {
        this.x = 0;
      }
		
      // update the x position of the coyote
      this.x = this.x + this.vx;
		
      // Switch to the appropriate image based on the state of the coyote
      this.change_image( this.state );
		
      // move the current coyote image into position
      $('#Coyote').css('top', (this.maxy-this.y) );
    }
}

