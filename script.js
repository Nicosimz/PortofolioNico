document.addEventListener('DOMContentLoaded', function() {
    // Get the element to be faded in
    var fadeElement = document.querySelector('.fade-in-element');
    var nameElement = document.querySelector('.fade-in-element.left');
    var imageElement = document.querySelector('.fade-in-element.right');

    // Function to check if an element is in the viewport
    function isInViewport(element) {
        var rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

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
