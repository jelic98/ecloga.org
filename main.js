$(document).ready(function() {
    $("p").fadeTo(1500, 0.5);
	
	$("p").on({
		mouseenter: function(e) {
        	$(e.target).finish().fadeTo(500, 1);
        },
        mouseleave: function(e) {
            $(e.target).finish().fadeTo(500, 0.5);
        }
    });

    $(document).mousemove(function(e) {
    	$("#pointer").css({
        	left: e.pageX,
            top: e.pageY
        });
    });
});

