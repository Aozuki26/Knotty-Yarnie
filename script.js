$(document).ready(function () {
  $(window).scroll(function () {
      if (this.scrollY > 20) {
          $('.navbar').addClass("sticky");
      } else {
          $('.navbar').removeClass("sticky");
      }
      
  });
// JavaScript to add/remove the 'sticky' class on scroll
window.onscroll = function() {
    var header = document.querySelector('.header-container');
    if (window.scrollY > 0) {
      header.classList.add('sticky');
    } else {
      header.classList.remove('sticky');
    }
  };
  
  
  $(document).ready(function () {
    $('#menu-btn').click(function () {
        $('.left-menu, .right-menu').toggleClass("active"); // Toggle menu
        $(this).toggleClass("open"); // Animate button
    });
});

document.getElementById("menu-btn").addEventListener("click", function() {
    this.classList.toggle("active");
});

  // typing animation
  const typed1 = new Typed(".typing", {
      strings: ["",],
      typeSpeed: 100,
      backSpeed: 60,
      loop: true
  });
  // typing animation
  const typed2 = new Typed(".typing-2", {
      strings: ["",],
      typeSpeed: 100,
      backSpeed: 60,
      loop: true
  });


  // owl carousel script
  $('.carousel').owlCarousel({
      margin: 20,
      loop: true,
      autoplayTime: 2000,
      autoplayHoverPause: true,
      responsive: {
          0: {
              items: 1,
              nav: false
          },
          600: {
              items: 2,
              nav: false
          },
          1000: {
              items: 3,
              nav: false
          }
      }
  });
});

function addToCart(item) {
    let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    cartItems.push(item);
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
    updateCartCount();
}

function updateCartCount() {
    const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    document.getElementById('cart-count').textContent = cartItems.length;
}

// Initialize cart count on page load
updateCartCount();

document.addEventListener("DOMContentLoaded", function () {
    const menuBtn = document.querySelector(".menu-btn");
    const menu = document.querySelector(".menu");

    menuBtn.addEventListener("click", function (event) {
        menu.classList.toggle("active");
        event.stopPropagation(); // Prevents the event from bubbling to the document
    });

    document.addEventListener("click", function (event) {
        if (!menu.contains(event.target) && !menuBtn.contains(event.target)) {
            menu.classList.remove("active"); // Closes the menu when clicking outside
        }
    });
});


