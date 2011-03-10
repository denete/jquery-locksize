/**
 * Plugin: jQuery Locksize, jquery.cmlocksize.js
 * Copyright: Copyright (c) 2011 CMGdigital
 * Version: 1.0.0
 * Author: David A. Enete
 * Date: 2011-02-14
 * Description: jQuery Locksize plugin - holds the size of an element on a page while the element is modified then the lock is released
 */

(function($) {
    
    var methods = {
        init: function(options) {
            return this.each(function() {
                $this = $(this);
                data = $this.data('cmlocksize');
                if(!data){
                    $this.wrap('<div class="cmLockContainer" style="overflow:hidden;"><div class="cmLockSubContainer" style="overflow:hidden;" /></div>');
                    $this.parents('.cmLockContainer').css({width: $this.width(),height: $this.height()});
                    opts = $.extend({}, $.fn.cmlocksize.defaults, options);
                    $this.data('cmlocksize', opts);
                }
            });
        },
        destroy: function(){
            return this.each(function(){
                $this = $(this);
                data = $this.data('cmlocksize');
                if(data){
                    $this.unwrap().unwrap();
                    $this.removeData('cmlocksize');
                }
            })
        },
        lockOn: function(){
            prevHeight = $this.parent().height();
            prevWidth = $this.parent().width();
            //if(!opts.fade) opts.animSpeed = 100;

            $this.fadeTo(opts.animSpeed, 0, function(){
                $this.parents('.cmLockContainer').css({height: prevHeight, width: prevWidth});
                opts.onLock.call(this);
                
                if(opts.autoUnlock){
                    $this.cmlocksize('lockOff');
                }
            });
        },
        lockOff: function(){
            $this.delay(opts.delay).fadeTo(opts.animSpeed, 1, function(){
                $this.parents('.cmLockContainer').animate({
                    width: $this.width(),
                    height: $this.height()
                }, opts.animSpeed, function() {
                    opts.onUnlock.call(this);
                });
            });
        }
    };

    $.fn.cmlocksize = function(method) {
        if ( methods[method] ) {
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
        onLock: function(){},
        onUnlock: function(){},
        fade: true,
        autoUnlock: true
    };

})(jQuery);