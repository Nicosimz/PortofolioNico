document.addEventListener('DOMContentLoaded', function() {
    // Get the element to be faded in
    var fadeElement = document.querySelector('.fade-in-element');

    // Function to check if an element is in the viewport
   

    // Function to handle scroll events
    function handleScroll() {
        if (isInViewport(fadeElement)) {
            fadeElement.classList.add('show');
        } else {
            fadeElement.classList.remove('show');
        }
        
         if (isInViewport(imageElement)) {
            imageElement.classList.add('show');
        } else {
            imageElement.classList.remove('show');
        }
    }
    // Attach the handleScroll function to the scroll event
    window.addEventListener('scroll', handleScroll);

    // Initial check to see if the element is in the viewport on page load
    handleScroll();
});
