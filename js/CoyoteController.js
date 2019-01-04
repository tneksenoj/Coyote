//////////////////////////////////////////////////////////////////////
// Author: Kent Jones
// Created by kjones on 12/18/2014
// Purpose: Coyote Controller Class
// Resources Used:
//  http://www.htmlandcssbook.com/
//  http://javascriptbook.com/ 
//  parallax scrolling tutorials: 
//      https://webdesign.tutsplus.com/categories/parallax-scrolling
// License: MIT License: https://opensource.org/licenses/MIT 
///////////////////////////////////////////////////////////////////////

var CoyoteController = {
    // Variables
    $background : null,
    $coyote : null,
    init : function() {
		this.$background = $("#DesertBackground_back");
		this.$coyote = Object.create(Coyote);
		this.$coyote.init(this.$background.width());
        $("body").click( this.$coyote.change_direction.bind(this.$coyote) );
    },
    draw : function() {
        requestAnimFrame( CoyoteController.draw.bind(this), 25);
		if ( typeof this.$coyote != "undefined" ) {
			this.$coyote.run();
			var pos = this.$coyote.position;
			$('#DesertBackground_clouds_2').css('background-position', (pos * (1.0 / 12.0)));
			$('#DesertBackground_mid').css('background-position', (pos * (1.0 / 6.0)));
			$('#DesertBackground_clouds_1').css('background-position', (pos * (1.0 / 3.0)));
			$('#DesertBackground_front').css('background-position', pos);
		}
    }
};

$(document).ready(function () {
    CoyoteController.init();
    CoyoteController.draw();
});