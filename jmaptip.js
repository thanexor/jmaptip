(function($) {
    $.fn.jmaptip = function(options) {
        var areas = this.children('area');
        var tips = this.children('area + *');
        var tip;
        var tippy = false;
        
        $(this).parent().css('position', 'relative');
        
        // HIDE TOOLTIP ELEMENTS
        tips.hide();
        
        // SET DEFAULTS
        var defaults = {  
            offset: '0,0',
            speed: 200,
            animation: 'toggle'
        };  
        var options = $.extend(defaults, options);
        
        areas.mouseenter(function(event){
            tips.hide();
            $(this).stop();
            var coords = this.coords.split(',');
            var coordsLength = coords.length-1;
            tip = $(this).next().unbind();
            
            var xMin = 100000;
            var xMax = 0;
            var yMin = 100000;
            var yMax = 0;
            
            //GETS X MIN and MAX
            for(i=0; i<=coordsLength; i=i+2) {
                xCoordNumber = parseFloat(coords[i]);
                xCoordNumber > xMax ? xMax = xCoordNumber : xMax = xMax;
                xCoordNumber < xMin ? xMin = xCoordNumber : xMin = xMin;
            }
            //GETS Y MIN and MAX
            for(i=1; i<=coordsLength; i=i+2) {
                yCoordNumber = parseFloat(coords[i]);
                yCoordNumber > yMax ? yMax = yCoordNumber : yMax = yMax;
                yCoordNumber < yMin ? yMin = yCoordNumber : yMin = yMin;
            }
            
            var xCenter = xMin + ((xMax - xMin)/2);
            var yCenter = yMin + ((yMax - yMin)/2);
            
            var xPopOffset = (tip.outerWidth()/2)+parseInt(options.offset.split(',')[0]);
            var yPopOffset = (tip.outerHeight()/2)+parseInt(options.offset.split(',')[1]);
            
            tip.css({ "left":(xCenter-xPopOffset ) + "px", "top":(yCenter-yPopOffset) + "px" } );
            switch (options.animation) {
                case 'toggle':
                    tip.stop(true, true).show();
                    break;
                case 'fadeToggle':
                    tip.stop(true, true).fade(options.speed);
                    break;
                case 'slideToggle':
                    tip.stop(true, true).slide(options.speed);
                    break;
            }
        });
        $(this).mouseleave(function(){
            tips.hide();
        });
    };
})(jQuery);