// On page load, apply the fade-in effect
window.onload = function () {
    document.body.classList.add('fade-in');
  };
  
  // Before navigating to another page, apply the fade-out effect
  const links = document.querySelectorAll('.transition-link');
  
  links.forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      document.body.classList.add('fade-out');
      setTimeout(() => {
        window.location.href = link.href;
      }, 500); // Wait for the fade-out transition before navigating
    });
  });
  