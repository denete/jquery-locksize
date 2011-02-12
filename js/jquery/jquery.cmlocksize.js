(function($) {
    
    var methods = {
        init: function(options) {
            var opts = $.extend({},
            $.fn.cmlocksize.defaults, options);
            initLocksize(opts.targetID);
        },
        lockOn: function(){
            //not sure if this next block goes in init or here
            return this.each(function() {
                var $this = $(this);
                $this.wrap('<div id="cmLockContainer"><div id="cmLockSubContainer" /></div>');
            });

            prevHeight = cmg.query('#cmLockSubContainer').height();
            prevWidth = cmg.query('#cmLockSubContainer').width();
            console.log('prevHeight: ' + prevHeight + ', prevWidth: ' + prevWidth);
            //console.log("subcontainer prevHeight: " + prevHeight);

            cmg.query('#cmLockContainer').css({height: prevHeight, width: prevWidth});
            pointer++;
            pointer = pointer == images.length ? 0 : pointer;


            cmg.query('#cmImage').fadeTo(500, 0, function () {
                cmg.query(this).attr('src','img/' + images[pointer]);
                cmg.query(this).fadeTo(500, 1);
                cmg.query('#cmLockContainer').animate({
                    width: cmg.query(this).width(),
                    height: cmg.query(this).height()
                }, 500, function() {
                    //cmg.query('#cmImageContainer').css('height','auto');
                });
            });
        },
        lockOff: function( ) {}
      };

    $.fn.cmlocksize = function(method) {
        if ( methods[method] ) {
            return methods[method].apply( this, Array.prototype.slice.call( arguments, 1 ));
        } else if ( typeof method === 'object' || ! method ) {
            return methods.init.apply( this, arguments );
        } else {
            $.error( 'Method ' +  method + ' does not exist on jQuery.cmlocksize' );
        }
    };

    // private function for debugging
    function debug(data) {
        if (window.console && window.console.log) {
            window.console.log(data.replace(/<br>/g, "\n"));
        } else {
            alert(data.replace(/\n/g, "<br>"));
        }
    };

    // set defaults for the plugin
    $.fn.cmlocksize.defaults = {
        animSpeed: 500,
        delay: 250,
        targetID: ""
    };

})(cmg.query);