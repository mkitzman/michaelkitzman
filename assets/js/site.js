$( document ).ready(function() {

    (function(){
        "use strict";
        
        //Fade in elements on page load
        var fadeable_elements = document.getElementsByClassName('fadein-onload'),
            data_attribute;

        for (var i = 0; i < fadeable_elements.length; ++i) {

            data_attribute = fadeable_elements[i].getAttribute('data-img-src');

            fadeable_elements[i].classList.add('show');

            if(data_attribute) {
                fadeable_elements[i].setAttribute("src", data_attribute);
            }
            
        }
    }());


    var wrap = $(".avatar");
    var navbar = $(".navbar");
    var height;

    $(window).scroll(function() {
        
        height = $(window).scrollTop();
        console.log(height);
        if (height > 150) { 
            navbar.addClass("show");
        } else {
            navbar.removeClass("show");
        }

        if (height > 275) {
            wrap.addClass("static");
        } else {
            wrap.removeClass("static");
        }

    });
});

