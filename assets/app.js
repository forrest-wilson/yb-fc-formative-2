// Use strict rules
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
        // Assigns the arguments children to a variable
        var opt = select.children;

        // Loops through each item in the opt variable and returns
        // the value at the index where the selected property is true
        for (var i = 0; opt.length; i++) {
            if (opt[i].selected === true) {
                return opt[i].value;
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

    // Helper method for creating the error message element
    function createErrorEl() {
        // Creates an element
        var erMsg = document.createElement("span");
        
        // Adds id and style attributes to the element
        erMsg.setAttribute("id", "errorMessage");
        erMsg.setAttribute("style", "color: red");

        // Sets the element text
        erMsg.textContent = "Please enter a message";

        // Appends the newly created element to the document
        message.parentNode.insertBefore(erMsg, message.nextSibling);
    }

    // Change the text in the card to whatever the user enters
    function changeText() {
        var msg = message.value,
            erMsgEl = document.getElementById("errorMessage");

        if (msg === "" && !erMsgEl) {
            // If the message is empty and there isn't an
            // errorMessage element in the doc, run this
            createErrorEl();
        } else if (msg === "" && erMsgEl) {
            // If the message is empty and the erMsgEl
            // element exists, don't do anything
        } else if (msg !== "" && erMsgEl) {
            // If the message is not empty and the erMsgEl
            // element exists, remove the erMsgEl element
            erMsgEl.parentElement.removeChild(erMsgEl);
        }

        // Add the text to the card. Blank or with message
        // as to not be render blocking
        card.children[1].children[0].textContent = msg;
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