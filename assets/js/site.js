(function(){
    "use strict";
    
    //Fade in elements on page load
    var fadeable_elements = document.getElementsByClassName('fadeable'),
        data_attribute;

    for (var i = 0; i < fadeable_elements.length; ++i) {

        data_attribute = fadeable_elements[i].getAttribute('data-img-src');
        
        if(data_attribute) {
            fadeable_elements[i].setAttribute("src", data_attribute);
        }
        fadeable_elements[i].classList.add('show');
    }
}());
