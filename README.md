Locksize plugin for jQuery
===========================

A jQuery plugin to allow elements on a page to be switched out in an AJAXy manner without having screen jump due to elements being removed and restored, etc. It will work with any page element, but has not been tested on mass instances. 

Locksize 1.0.0 requires jQuery 1.4 or higher.

## Demo

View the [demo page](http://coxmediagroup.github.com/jquery-locksize/ "on github").

***

## Usage

>        $('#cmImage').cmlocksize({
>                animSpeed: 250, // speed of fade and resize animations in milliseconds
>                delay: 100, // delay before resizing in milliseconds
>                onLock: function(){ // a function to be run once the element size is locked
>                        $(this).attr('src','img/' + images[pointer]);
>                    },
>                onUnlock: function(){ // a function to be run once the resizing has finished
>                    //nothing
>                    },
>                fade: true, // fade the element out / in and animate the resize * true is recommended for current code *
>                autoUnlock: true // if set to false, you can call the unlock method when you want to
>                });

## Methods

>        $('#cmImage').cmlocksize('lockOn'); // instantiate the lock
>        $('#cmImage').cmlocksize('lockOff'); // programmatically release the lock
>        $('#cmImage').cmlocksize('destroy'); // destroy the instance of cmlocksize

***
## License

jquery-locksize is licensed under the MIT License. The project is founded by [CMGdigital](http://www.cmgdigital.com).