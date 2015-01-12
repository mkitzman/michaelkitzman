/*global document, $, window */

$( document ).ready(function() {

    "use strict";

    var avatar = $(".avatar"),
        navbar = $(".navbar"),
        height,
        fadeable_elements = document.getElementsByClassName('fadein-onload'),
        data_attribute,
        i;

    //Show all elements hidden on load
    for (i = 0; i < fadeable_elements.length; i = i + 1) {

        //Swap screen shot images
        data_attribute = fadeable_elements[i].getAttribute('data-img-src');
        if(data_attribute) {
            fadeable_elements[i].setAttribute("src", data_attribute);
        }

        fadeable_elements[i].classList.add('show');        
    }

    //Scroll listener  for showing nav bar and pinning avatar
    $(window).scroll(function() {
        
        height = $(window).scrollTop();

        if (height > 150) { 
            navbar.addClass("show");
        } else {
            navbar.removeClass("show");
        }

        if (height > 275) {
            avatar.addClass("static");
        } else {
            avatar.removeClass("static");
        }

    });
});

