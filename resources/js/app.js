import * as THREE from 'three';
import '../js/components/3d';
import '../js/components/country_filter';
import '../js/components/google_sheets';

$(function() {
    function createImageAndCheckIfLoaded(url, parent) {
        // let defaultUrl = "img/1.png";
        // let image = $('<img>').attr({"src": url, "alt": "image"});
        
        // image.on('error', function() {
        //     $(this).attr('src', defaultUrl);
        // });

        // image.on('load', function() {
        //     parent.append(image);
        // });

        let image = document.createElement('img'),
            defaultUrl = "img/1.png",
            alt = "image";

        image.src = url;
        image.alt = alt;

        image.onerror = function() {
            image.src = defaultUrl;
        }

        image.onload = function() {
            parent.appendChild(image);
        }
    }

    createImageAndCheckIfLoaded("img/url.jpg", document.querySelector('.js-parent'));

});