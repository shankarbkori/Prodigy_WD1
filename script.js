// 1. Function to change Navbar color when scrolling
window.onscroll = function() {
    var nav = document.getElementById("navbar");
    
    // If the user scrolls down more than 50 pixels
    if (window.pageYOffset > 50) {
        nav.classList.add("scrolled");
    } else {
        nav.classList.remove("scrolled");
    }
};

// 2. Simple alert when the form is submitted
var contactForm = document.getElementById("contactForm");

if (contactForm) {
    contactForm.addEventListener("submit", function(event) {
        event.preventDefault(); // This stops the page from refreshing
        alert("Thanks for your message! I will get back to you soon.");
        contactForm.reset(); // This clears the form fields
    });
}
