// IIFE
(function() {
    // Variable declarations
    var form = document.getElementsByTagName("form"),
        imgSelect = document.getElementById("image"),
        bgSelect = document.getElementById("background"),
        fontSelect = document.getElementById("font"),
        brdrSelect = document.getElementById("border"),
        message = document.getElementById("message"),
        subBtn = document.getElementsByTagName("input")[0],
        card = document.getElementsByClassName("card")[0],
        baseDir = "assets/";

    // Get the image the user wants
    function getImage() {
        var imgOptions = imgSelect.children,
            imgStr = ""; // Initializes empty string every time this function is called

        for (i = 0; i < imgOptions.length; i++) {
            if (imgOptions[i].selected === true) {
                imgStr = imgOptions[i].value;
                card.children[0].children[0].attributes[0].textContent = baseDir + imgStr + ".jpg"
            }
        }
    }

    subBtn.addEventListener("click", function(e) {
        e.preventDefault();
        getImage();
    });
})();