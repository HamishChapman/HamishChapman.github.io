document.addEventListener('DOMContentLoaded', function() {
    const signInBtn = document.querySelector('.sign-up-btn');
    const closeLoginBtn = document.querySelector('.popup-login .close-login');
    const popupLogin = document.querySelector('.popup-login');
    const body = document.querySelector('body');
    let overlay; // Declare overlay variable outside to access it in different event listeners

    // Function to create overlay
    function createOverlay() {
        overlay = document.createElement('div');
        overlay.classList.add('overlay');
        body.appendChild(overlay); // Append overlay to body

        // Close popup when clicking outside of it
        overlay.addEventListener('click', function() {
            closePopup();
        });
    }

    // Function to close popup and remove overlay
    function closePopup() {
        popupLogin.classList.remove('active');
        body.classList.remove('blur');
        if (overlay) {
            body.removeChild(overlay); // Remove overlay from body
            overlay = null; // Reset overlay variable
        }
    }

    // Open popup login
    signInBtn.addEventListener('click', function() {
        popupLogin.classList.add('active');
        body.classList.add('blur');
        createOverlay(); // Create overlay when opening popup
    });

    // Close popup login
    closeLoginBtn.addEventListener('click', function() {
        closePopup();
    });
});
