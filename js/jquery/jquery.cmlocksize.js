(function($) {

    $.fn.cmlocksize = function(options) {
        var opts = $.extend({},
        $.fn.cmlocksize.defaults, options);
        initLocksize(opts.targetID);

        return this.each(function() {
            var $this = $(this);
            $this.wrap('<div id="cmLockContainer"><div id="cmLockSubContainer" /></div>');
        });
    };

    // private function for initializing
    function initLocksize(id) {
        //nothing
        }

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
        targetID: ""
    };

})(cmg.query);