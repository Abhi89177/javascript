document.addEventListener("DOMContentLoaded", function() {
    // Get all elements with class "color"
       const colorElements = document.querySelectorAll('.color');

    colorElements.forEach(function(colorElement) {
        colorElement.addEventListener('click', function() {

            const colorId = this.id;
            document.body.style.backgroundColor = colorId;
        });
    });
});
