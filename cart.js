// Function to update the cart count in the UI
function updateCartCount() {
  const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
  document.getElementById('cart-count').textContent = cartItems.length; // Update the cart icon count
}

// Function to add an item to the cart
function addToCart(item) {
  let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
  cartItems.push(item); // Add the new item
  localStorage.setItem('cartItems', JSON.stringify(cartItems)); // Save updated items to localStorage
  updateCartCount(); // Update UI
}

// Function to remove an item from the cart
function removeFromCart(itemId) {
  let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
  cartItems = cartItems.filter(item => item.id !== itemId); // Remove the item with the matching ID
  localStorage.setItem('cartItems', JSON.stringify(cartItems)); // Save updated items to localStorage
  updateCartCount(); // Update UI
  renderCartItems(); // Re-render cart items
}

// Function to render cart items on the cart page
function renderCartItems() {
  const cartItemsContainer = document.getElementById('cart-items-container');
  const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
  cartItemsContainer.innerHTML = ''; // Clear current items

  cartItems.forEach(item => {
      const cartItemDiv = document.createElement('div');
      cartItemDiv.classList.add('cart-item');
      cartItemDiv.innerHTML = `
          <img src="${item.image}" alt="${item.name}">
          <div>
              <h3>${item.name}</h3>
              <p>$${item.price}</p>
          </div>
          <button class="remove-btn" onclick="removeFromCart('${item.id}')">Remove</button>
      `;
      cartItemsContainer.appendChild(cartItemDiv);
  });

  updateCartTotal();
}

// Function to update the total price
function updateCartTotal() {
  const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
  const total = cartItems.reduce((sum, item) => sum + item.price, 0);
  document.getElementById('cart-total').textContent = `$${total.toFixed(2)}`;
}

// Initial setup on page load
document.addEventListener('DOMContentLoaded', () => {
  updateCartCount();
  if (document.getElementById('cart-items-container')) {
      renderCartItems();
  }
});

// Example: Add item to cart (You need to provide the item object)
document.querySelectorAll('.add-to-cart-button').forEach(button => {
  button.addEventListener('click', () => {
      const item = {
          id: button.dataset.id,
          name: button.dataset.name,
          price: parseFloat(button.dataset.price),
          image: button.dataset.image
      };
      addToCart(item);
  });
});
