/**
 * First Basket - Shared Navigation Component
 * Include this file in all pages to maintain consistent navigation
 * Usage: Call initNavigation('page-name') in your page
 */

function initNavigation(currentPage) {
  // Create navigation HTML
  const navHTML = `
    <!-- Navigation -->
    <nav class="navbar fixed top-0 w-full z-50 px-6 py-4">
      <div class="max-w-7xl mx-auto flex items-center justify-between">

       <!-- Logo -->
<a href="index.html" class="flex items-center space-x-3">
  <img src="images2/logo2.png" alt="First Basket Logo" class="w-12 h-12 object-cover rounded-full">
  <span class="text-golden-tan text-xl font-bold tracking-wide">First Basket</span>
</a>



        <!-- Desktop Navigation -->
        <div class="hidden lg:flex items-center space-x-8">
          <a href="index.html" class="nav-link ${currentPage === 'home' ? 'active text-golden-tan' : 'text-muted-sage'}">Home</a>
          <a href="shop.html" class="nav-link ${currentPage === 'shop' ? 'active text-golden-tan' : 'text-muted-sage'}">Shop</a>
          <a href="baskets.html" class="nav-link ${currentPage === 'baskets' ? 'active text-golden-tan' : 'text-muted-sage'}">Curated Baskets</a>
          <a href="#about" class="nav-link ${currentPage === 'about' ? 'active text-golden-tan' : 'text-muted-sage'}">About</a>
          <a href="#faq" class="nav-link ${currentPage === 'faq' ? 'active text-golden-tan' : 'text-muted-sage'}">FAQ</a>
          <a href="#contact" class="nav-link ${currentPage === 'contact' ? 'active text-golden-tan' : 'text-muted-sage'}">Contact</a>
        </div>

        <!-- Right Icons -->
        <div class="hidden md:flex items-center space-x-4">
          <button class="cart-toggle relative p-2">
            <i class="fas fa-shopping-cart text-2xl text-golden-tan"></i>
            <span class="cart-count absolute -top-1 -right-1 bg-golden-tan text-dark-olive text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold">0</span>
          </button>
          <button class="text-golden-tan hover:text-warm-beige transition-colors p-2">
            <i class="fas fa-user text-2xl"></i>
          </button>
        </div>

        <!-- Mobile Menu Button -->
        <button class="lg:hidden mobile-menu-btn">
          <i class="fas fa-bars text-2xl text-golden-tan"></i>
        </button>
      </div>
    </nav>

    <!-- Mobile Menu -->
    <div class="mobile-menu">
      <div class="p-6">
        <div class="flex justify-between items-center mb-8">
          <span class="text-2xl font-display font-bold text-golden-tan">First Basket</span>
          <button class="mobile-menu-close">
            <i class="fas fa-times text-2xl text-golden-tan"></i>
          </button>
        </div>
        <div class="space-y-6">
          <a href="index.html" class="block text-xl ${currentPage === 'home' ? 'text-golden-tan font-semibold' : 'text-warm-beige'} mobile-nav-link">Home</a>
          <a href="shop.html" class="block text-xl ${currentPage === 'shop' ? 'text-golden-tan font-semibold' : 'text-warm-beige'} mobile-nav-link">Shop</a>
          <a href="baskets.html" class="block text-xl ${currentPage === 'baskets' ? 'text-golden-tan font-semibold' : 'text-warm-beige'} mobile-nav-link">Curated Baskets</a>
          <a href="#about" class="block text-xl ${currentPage === 'about' ? 'text-golden-tan font-semibold' : 'text-warm-beige'} mobile-nav-link">About</a>
          <a href="#faq" class="block text-xl ${currentPage === 'faq' ? 'text-golden-tan font-semibold' : 'text-warm-beige'} mobile-nav-link">FAQ</a>
          <a href="#contact" class="block text-xl ${currentPage === 'contact' ? 'text-golden-tan font-semibold' : 'text-warm-beige'} mobile-nav-link">Contact</a>
          <a href="#" class="block text-xl text-warm-beige mobile-nav-link flex items-center">
            <i class="fas fa-user mr-2"></i>Account
          </a>
        </div>
      </div>
    </div>

    <!-- Cart Sidebar -->
    <div class="cart-overlay"></div>
    <div class="cart-sidebar">
      <div class="p-6">
        <div class="flex justify-between items-center mb-6">
          <h3 class="text-2xl font-display font-bold text-golden-tan">Your Cart</h3>
          <button class="cart-close">
            <i class="fas fa-times text-xl text-golden-tan"></i>
          </button>
        </div>
        <div class="cart-items space-y-4"></div>
        <div class="cart-empty text-center py-12">
          <i class="fas fa-shopping-basket text-6xl text-muted-sage mb-4"></i>
          <p class="text-muted-sage text-lg">Your cart is empty</p>
          <p class="text-sm text-muted-sage mt-2">Add some items to get started!</p>
        </div>
        <div class="cart-footer mt-8 pt-6 border-t border-golden-tan border-opacity-30 hidden">
          <div class="flex justify-between items-center mb-4">
            <span class="text-lg font-semibold">Total:</span>
            <span class="cart-total text-2xl font-bold text-golden-tan">$0.00</span>
          </div>
          <button class="btn-primary w-full">Checkout</button>
        </div>
      </div>
    </div>
  `;

  // Insert navigation at the beginning of body
  document.body.insertAdjacentHTML('afterbegin', navHTML);

  // Initialize navigation functionality
  initNavigationFunctionality();
}

function initNavigationFunctionality() {
  // Mobile menu functionality
  const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
  const mobileMenu = document.querySelector('.mobile-menu');
  const mobileMenuClose = document.querySelector('.mobile-menu-close');
  const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');

  if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener('click', () => {
      mobileMenu.classList.add('active');
      document.body.style.overflow = 'hidden';
    });
  }

  if (mobileMenuClose) {
    mobileMenuClose.addEventListener('click', () => {
      mobileMenu.classList.remove('active');
      document.body.style.overflow = 'auto';
    });
  }

  mobileNavLinks.forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu.classList.remove('active');
      document.body.style.overflow = 'auto';
    });
  });

  // Cart sidebar functionality
  const cartToggle = document.querySelector('.cart-toggle');
  const cartSidebar = document.querySelector('.cart-sidebar');
  const cartOverlay = document.querySelector('.cart-overlay');
  const cartClose = document.querySelector('.cart-close');

  function openCart() {
    cartSidebar.classList.add('open');
    cartOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeCart() {
    cartSidebar.classList.remove('open');
    cartOverlay.classList.remove('active');
    document.body.style.overflow = 'auto';
  }

  if (cartToggle) {
    cartToggle.addEventListener('click', openCart);
  }

  if (cartClose) {
    cartClose.addEventListener('click', closeCart);
  }

  if (cartOverlay) {
    cartOverlay.addEventListener('click', (e) => {
      if (e.target === cartOverlay) {
        closeCart();
      }
    });
  }

  // Close on escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      if (mobileMenu && mobileMenu.classList.contains('active')) {
        mobileMenu.classList.remove('active');
        document.body.style.overflow = 'auto';
      }
      if (cartSidebar && cartSidebar.classList.contains('open')) {
        closeCart();
      }
    }
  });

  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      if (href !== '#' && href !== '#!') {
        const target = document.querySelector(href);
        if (target) {
          e.preventDefault();
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      }
    });
  });
}

// Shared cart functionality
const sharedCart = {
  items: [],
  total: 0,

  addItem(item) {
    this.items.push(item);
    this.total += item.price;
    this.updateCartUI();
    this.showToast(`${item.name} added to cart!`);
  },

  removeItem(itemId) {
    const index = this.items.findIndex(item => item.id === itemId);
    if (index > -1) {
      this.total -= this.items[index].price;
      this.items.splice(index, 1);
      this.updateCartUI();
      this.showToast('Item removed from cart');
    }
  },

  updateCartUI() {
    const cartCount = document.querySelector('.cart-count');
    const cartItems = document.querySelector('.cart-items');
    const cartEmpty = document.querySelector('.cart-empty');
    const cartFooter = document.querySelector('.cart-footer');
    const cartTotalElement = document.querySelector('.cart-total');

    if (cartCount) {
      cartCount.textContent = this.items.length;
    }

    if (cartTotalElement) {
      cartTotalElement.textContent = `$${this.total.toFixed(2)}`;
    }

    if (this.items.length === 0) {
      if (cartEmpty) cartEmpty.classList.remove('hidden');
      if (cartFooter) cartFooter.classList.add('hidden');
      if (cartItems) cartItems.innerHTML = '';
    } else {
      if (cartEmpty) cartEmpty.classList.add('hidden');
      if (cartFooter) cartFooter.classList.remove('hidden');

      if (cartItems) {
        cartItems.innerHTML = this.items.map(item => `
          <div class="flex items-center space-x-4 p-4 glass-card rounded-lg">
            <div class="text-2xl">${item.icon || '🛒'}</div>
            <div class="flex-1">
              <h4 class="font-semibold text-warm-beige">${item.name}</h4>
              <p class="text-golden-tan">$${item.price.toFixed(2)}</p>
            </div>
            <button class="remove-item text-red-400 hover:text-red-300" data-id="${item.id}">
              <i class="fas fa-trash"></i>
            </button>
          </div>
        `).join('');

        // Add event listeners to remove buttons
        document.querySelectorAll('.remove-item').forEach(btn => {
          btn.addEventListener('click', (e) => {
            const itemId = parseInt(e.currentTarget.getAttribute('data-id'));
            this.removeItem(itemId);
          });
        });
      }
    }

    // Save to localStorage
    try {
      localStorage.setItem('firstBasketCart', JSON.stringify({
        items: this.items,
        total: this.total
      }));
    } catch (e) {
      console.log('Could not save cart to localStorage');
    }
  },

  loadCart() {
    try {
      const saved = localStorage.getItem('firstBasketCart');
      if (saved) {
        const data = JSON.parse(saved);
        this.items = data.items || [];
        this.total = data.total || 0;
        this.updateCartUI();
      }
    } catch (e) {
      console.log('Could not load cart from localStorage');
    }
  },

  showToast(message) {
    const toast = document.createElement('div');
    toast.className = 'fixed top-20 right-4 bg-golden-tan text-dark-olive px-6 py-3 rounded-lg shadow-lg z-50 transform translate-x-full transition-transform duration-300 font-semibold';
    toast.textContent = message;

    document.body.appendChild(toast);

    setTimeout(() => {
      toast.style.transform = 'translateX(0)';
    }, 100);

    setTimeout(() => {
      toast.style.transform = 'translateX(400px)';
      setTimeout(() => toast.remove(), 300);
    }, 3000);
  }
};

// Initialize cart on page load
document.addEventListener('DOMContentLoaded', () => {
  sharedCart.loadCart();
});

// Export for use in other scripts
if (typeof window !== 'undefined') {
  window.FirstBasket = {
    initNavigation,
    cart: sharedCart
  };
}