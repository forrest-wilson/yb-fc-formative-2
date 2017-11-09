// Use Strict JS
"use strict";

// IIFE
(function() {
    // Variable declarations
    var imgSelect = document.getElementById("image"),
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

    // Changes the image on the card
    function changeImage() {
        // Gets the selected images value and assigns it to a variable
        var imgVal = getValue(imgSelect);

        // Changes the image path using the imgVal variable
        card.children[0].children[0].attributes[0].textContent = "assets/" + imgVal + ".jpg";
    }

    // Changes the background color of the card
    function changeBGColor() {
        // Gets the selected backgrounds value and assigns it to a variable
        var bgVal = getValue(bgSelect);

        // Removes the 2nd item in the card classList
        card.classList.remove(card.classList[1]);
        // Adds a background class to the card classList using the
        // bgVal variable and concatenation
        card.classList.add(bgVal + "Background");
    }

    // Changes the font of the message in the card
    function changeFont() {
        // Gets the selected fonts value and assigns it to a variable
        var fontVal = getValue(fontSelect);

        // Emptys the classList array to make sure there
        // won't be any conflicting classes
        card.children[1].children[0].classList = [];
        // Adds the fontVal variable to the classList
        card.children[1].children[0].classList.add(fontVal);
    }

    // Changes the border of the message in the card
    function changeBorder() {
        // Gets the selected border value and assigns it to a variable
        var brdrVal = getValue(brdrSelect);

        // Switches on the brdrValue variable because the CSS
        // classes aren't the same as the value returned
        // by the getValue function
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

        // Emptys the classList array to make sure there
        // won't be any conflicting classes
        card.children[1].classList = [];
        // Adds a border class to the card classList using the
        // brdrVal variable and concatenation
        card.children[1].classList.add(brdrVal + "Border");
    }

    // Changed the text in the card to whatever the user enters
    function changeText() {
        // Assigns the message entered by the user to a variable
        var msg = message.value;

        // Checks to see whether the message is empty
        if (msg === "") {
            // If the message is empty, alert the user with a message
            alert("Please enter a message to add to the card.");
        } else {
            // Otherwise append the message to the card
            card.children[1].children[0].textContent = message.value;
        }   
    }

    // Adds a listener to the submit button
    subBtn.addEventListener("click", function(e) {
        // Prevents the page from being redirected
        e.preventDefault();

        // Calls the above functions and executes them
        changeImage();
        changeBGColor();
        changeFont();
        changeBorder();
        changeText();
    });
})();