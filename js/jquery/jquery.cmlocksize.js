(function($) {
    
    var methods = {
        init: function(options) {
            //opts = $.extend({}, $.fn.cmlocksize.defaults, options);
            return this.each(function() {
                var $this = $(this);
                data = $this.data('cmlocksize');
                if(!data){
                    console.log('init, data: ' + data);
                    $this.wrap('<div id="cmLockContainer"><div id="cmLockSubContainer" /></div>');
                    $('#cmLockContainer').css({width: $(this).width(),height: $(this).height()});
                    opts = $.extend({}, $.fn.cmlocksize.defaults, options);
                    $this.data('cmlocksize', opts);
                }
            });
        },
        destroy: function(){
            return this.each(function(){
                var $this = $(this);
                data = $this.data('cmlocksize');
                //$(window).unbind('.???');
                $this.unwrap().unwrap();
                data.cmlocksize.remove();
                $this.removeData('cmlocksize');
            })
        },
        lockOn: function(){
            //not sure if this next block goes in init or here

            prevHeight = cmg.query('#cmLockSubContainer').height();
            prevWidth = cmg.query('#cmLockSubContainer').width();
            //prevHeight = $(this).height();
            //prevWidth = $(this).width();
            //console.log('prevHeight: ' + prevHeight + ', prevWidth: ' + prevWidth);
            //console.log("subcontainer prevHeight: " + prevHeight);

            $(this).fadeTo(opts.animSpeed, 0, function(){
                $('#cmLockContainer').css({height: prevHeight, width: prevWidth});
                opts.onLock.call(this);
                $(this).fadeTo(opts.animSpeed, 1, function(){
                    $('#cmLockContainer').animate({
                        width: $(this).width(),
                        height: $(this).height()
                    }, 500, function() {
                        //cmg.query('#cmImageContainer').css('height','auto');
                    });
                });
            });
            /*
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
            */
        },
        lockOff: function(){
            //console.log('new width:' + $(this).width());
            /*$('#cmLockContainer').animate({
                width: $(this).width(),
                height: $(this).height()
            }, 500, function() {
                $(this).fadeTo(opts.animSpeed, 1);
            });*/
            $(this).fadeTo(opts.animSpeed, 1, function(){
                $('#cmLockContainer').animate({
                    width: $(this).width(),
                    height: $(this).height()
                }, 500, function() {
                    //cmg.query('#cmImageContainer').css('height','auto');
                });
            });
        }
      };

    $.fn.cmlocksize = function(method) {
        if ( methods[method] ) {
            //console.log('method: ' + method);
            return methods[method].apply( this, Array.prototype.slice.call( arguments, 1 ));
        } else if ( typeof method === 'object' || ! method ) {
            return methods.init.apply( this, arguments );
        } else {
            console.log( 'Method ' +  method + ' does not exist on jQuery.cmlocksize' );
        }
    };

    // set defaults for the plugin
    $.fn.cmlocksize.defaults = {
        animSpeed: 500,
        delay: 250,
        targetID: "",
        onLock: function(){}
    };

})(cmg.query);