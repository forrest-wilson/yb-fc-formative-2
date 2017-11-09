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

    // Generic function for getting the value property from the select list
    function getValue(select) {
        var opt = select.children,
            val = "";

        for (var i = 0; opt.length; i++) {
            if (opt[i].selected === true) {
                return val = opt[i].value;
            }
        }
    }

    function changeImage() {
        var imgVal = getValue(imgSelect);

        card.children[0].children[0].attributes[0].textContent = "assets/" + imgVal + ".jpg";
    }

    function changeBGColor() {
        var bgVal = getValue(bgSelect);

        card.classList.remove(card.classList[1]);
        card.classList.add(bgVal + "Background");
    }

    function changeFont() {
        var fontVal = getValue(fontSelect);

        card.children[1].children[0].classList = []; // Empty the classList array
        card.children[1].children[0].classList.add(fontVal);
    }

    function changeBorder() {
        var brdrVal = getValue(brdrSelect);

        switch (brdrVal) {
            case "thin":
                brdrVal = "small";
                break;
            case "thick":
                brdrVal = "big";
                break;
            default:
                break;
        }

        card.children[1].classList = [];
        card.children[1].classList.add(brdrVal + "Border");
    }

    function changeText() {
        card.children[1].children[0].textContent = message.value;
    }

    subBtn.addEventListener("click", function(e) {
        e.preventDefault();
        changeImage();
        changeBGColor();
        changeFont();
        changeBorder();
        changeText();
    });
})();