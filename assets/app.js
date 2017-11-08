// Use Strict JS
"use strict";

// IIFE
(function() {
    // Variable declarations
    var form = document.getElementsByTagName("form")[0],
        imgSelect = document.getElementById("image"),
        bgSelect = document.getElementById("background"),
        fontSelect = document.getElementById("font"),
        brdrSelect = document.getElementById("border"),
        message = document.getElementById("message"),
        subBtn = document.getElementsByTagName("input")[0],
        card = document.getElementsByClassName("card")[0];

    // Get the image the user wants
    function changeImage() {
        var imgOptions = imgSelect.children, // Gets all the children of the imgSelect object
            imgStr = ""; // Initializes an empty string every time this function is called

        for (var i = 0; i < imgOptions.length; i++) {
            if (imgOptions[i].selected === true) {
                imgStr = imgOptions[i].value;
                card.children[0].children[0].attributes[0].textContent = "assets/" + imgStr + ".jpg";
            }
        }
    }

    function changeBGColor() {
        var bgOptions = bgSelect.children, // Gets all the children of the bgSelect element
            bgValue = ""; // Initializes an empty string every time this function is called
        
        for (var i = 0; i < bgOptions.length; i++) {
            if (bgOptions[i].selected === true) {
                bgValue = bgOptions[i].value;
            }
        }

        card.classList.remove(card.classList[1]);
        card.classList.add(bgValue + "Background");
    }

    subBtn.addEventListener("click", function(e) {
        e.preventDefault();
        changeImage();
        changeBGColor();
    });
})();