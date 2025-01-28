document.addEventListener("DOMContentLoaded", function() {
    const captchaModal = document.getElementById('captcha-modal');
    const openCaptchaBtn = document.getElementById('open-captcha');
    const closeModalBtn = document.getElementById('close-modal');
    const slider = document.getElementById('slider');
    const validateCaptchaBtn = document.getElementById('validate-captcha');
    const submitBtn = document.getElementById('submit-btn');
    const checkoutForm = document.getElementById('checkout-form');

    // Open CAPTCHA modal when the button is clicked
    openCaptchaBtn.addEventListener('click', function(event) {
        event.preventDefault();
        captchaModal.style.display = 'block';
    });

    // Close CAPTCHA modal when the close button is clicked
    closeModalBtn.addEventListener('click', function() {
        captchaModal.style.display = 'none';
    });

    // Close CAPTCHA modal if user clicks outside of the modal content
    window.onclick = function(event) {
        if (event.target === captchaModal) {
            captchaModal.style.display = 'none';
        }
    };

    // Update slider value and show highlight logic
    slider.addEventListener('input', function() {
        if (slider.value == 100) {
            alert('CAPTCHA solved!');
            validateCaptchaBtn.disabled = false; // Enable validate button when slider reaches 100
        }
    });

    // Validate CAPTCHA when button is clicked
    validateCaptchaBtn.addEventListener('click', function() {
        if (slider.value == 100) {
            alert('CAPTCHA solved successfully!');
            captchaModal.style.display = 'none';  // Close CAPTCHA modal after completion
            submitBtn.disabled = false;  // Enable submit button after CAPTCHA is solved
        } else {
            alert('Please complete the CAPTCHA!');
        }
    });

    // Form submission validation
    checkoutForm.addEventListener('submit', function(event) {
        event.preventDefault();

        // Check if CAPTCHA is solved
        if (slider.value != 100) {
            alert('Please solve the CAPTCHA first!');
            return;
        }

        // Proceed with form submission
        alert('Form submitted successfully!');
    });
});
