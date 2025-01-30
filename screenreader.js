
  document.addEventListener('DOMContentLoaded', function () {
    // Select all focusable elements in the navbar and product showcase
    const focusableElements = document.querySelectorAll('a[tabindex="0"], button[tabindex="0"], img[tabindex="0"], i[tabindex="0"], div[tabindex="0"]');
    let isAltTextReadingEnabled = false;
  
    // Get available voices
    let voices = [];
    const getVoices = () => {
      voices = speechSynthesis.getVoices();
    };
  
    // Initial fetch of voices
    getVoices();
  
    // Listen for voices being loaded/changed
    speechSynthesis.onvoiceschanged = getVoices;
  
    // Function to read alt text or button text when an element is focused
    function readText(event) {
      if (isAltTextReadingEnabled) {
        let text = '';
  
        // If the focused element is an image, get the alt text
        if (event.target.tagName.toLowerCase() === 'img') {
          text = event.target.alt;
        }
        // If the focused element is a link, get the text content
        else if (event.target.tagName.toLowerCase() === 'a') {
          text = event.target.textContent || event.target.getAttribute('href');
        }
        // If the focused element is a button, get the button text
        else if (event.target.tagName.toLowerCase() === 'button') {
          text = event.target.textContent;
        }
        // If the focused element is an icon, describe it
        else if (event.target.tagName.toLowerCase() === 'i') {
          text = event.target.getAttribute('aria-label') || 'Icon button';
        }
  
        const speech = new SpeechSynthesisUtterance(text);
  
        // Choose a different voice (you can set this to any of the voices you like)
        const selectedVoice = voices.find(voice => voice.name === 'Google UK English Male');
        if (selectedVoice) {
          speech.voice = selectedVoice;
        }
  
        speech.lang = 'en-US';
        speech.volume = 1;
        speech.rate = 1;
        speech.pitch = 1;
  
        // Use SpeechSynthesis API to read the text aloud
        window.speechSynthesis.speak(speech);
      }
    }
  
    // Add focus event listener to all focusable elements
    focusableElements.forEach(element => {
      element.addEventListener('focus', readText);
    });
  
    // Toggle button functionality
    const toggleButton = document.getElementById('altToggleButton');
    toggleButton.addEventListener('click', function () {
      isAltTextReadingEnabled = !isAltTextReadingEnabled;
      if (isAltTextReadingEnabled) {
        toggleButton.textContent = 'ON';
      } else {
        toggleButton.textContent = 'OFF';
      }
    });
  });
  