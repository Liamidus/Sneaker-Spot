
  //dropdown filter
  document.addEventListener("DOMContentLoaded", function() {
  var MenuItems = document.getElementById("MenuItems");

  MenuItems.style.maxHeight = "0px";

  window.menutoggle = function() {
    if (MenuItems.style.maxHeight === "0px") {
      MenuItems.style.maxHeight = "200px";
    } else {
      MenuItems.style.maxHeight = "0px";
    }
  };
});

/////////////////////////////////////////////////////////////////////////
//Array
const productsArray = [
  {
    id: 1,
    title: "Red T-Shirt",
    description: "Comfortable and stylish red t-shirt.",
    price: 24.99, // optional
    image: "images/product-1.jpg",
    rating: 4.5, // decimal allowed, e.g., 4.5
    category: "T-Shirt",
    link: "id-1.html"
  },
  {
    id: 2,
    title: "HRX Running Shoes",
    description: "Lightweight running shoes for daily workouts.",
    price: 69.99,
    image: "images/product-2.jpg",
    rating: 4.5,
    category: "Shoes",
    link: "id-2.html"
  },
  {
    id: 3,
    title: "Grey Sweatpants",
    description: "Cozy and durable sweatpants.",
    price: 34.95,
    image: "images/product-3.jpg",
    rating: 5,
    category: "Pants",
    link: "id-3.html"
  },
  {
    id: 4,
    title: "Blue Polo",
    description: "Classic blue polo shirt.",
    price: 69.99,
    image: "images/product-4.jpg",
    rating: 4.5,
    category: "Shirts",
    link: "id-4.html"
  },
  {
    id: 5,
    title: "Dirt Magnets",
    description: "Durable and rugged sneakers.",
    price: 99.66,
    image: "images/product-5.jpg",
    rating: 0.5,
    category: "Shoes",
    link: "id-5.html"
  },
  {
    id: 6,
    title: "Black T-Shirt",
    description: "Soft black t-shirt with logo.",
    price: 29.99,
    image: "images/product-6.jpg",
    rating: 3.5,
    category: "T-Shirt",
    link: "id-6.html"
  },
  {
    id: 7,
    title: "HRX Ankle Socks",
    description: "Comfortable ankle socks for sports.",
    price: 14.99,
    image: "images/product-7.jpg",
    rating: 4,
    category: "Accessories",
    link: "id-7.html"
  },
  {
    id: 8,
    title: "Fossil 10:10 AM",
    description: "Premium Fossil wristwatch.",
    price: 1010.49,
    image: "images/product-8.jpg",
    rating: 4.5,
    category: "Watches",
    link: "id-8.html"
  },
  {
    id: 9,
    title: "Roadster C2",
    description: "Stylish Roadster C2 sneakers.",
    price: 149.99,
    image: "images/product-9.jpg",
    rating: 4,
    category: "Shoes",
    link: "id-9.html"
  },
  {
    id: 10,
    title: "Red X Running Shoes",
    description: "Performance running shoes.",
    price: 49.99,
    image: "images/product-10.jpg",
    rating: 2.5,
    category: "Shoes",
    link: "id-10.html"
  },
  {
    id: 11,
    title: "Grey Lazy Boys",
    description: "Comfortable loungewear shoes.",
    price: 29.99,
    image: "images/product-11.jpg",
    rating: 3,
    category: "Shoes",
    link: "id-11.html"
  },
  {
    id: 12,
    title: "Nike Black Sweatpants",
    description: "Premium sweatpants for sports and comfort.",
    price: 79.99,
    image: "images/product-12.jpg",
    rating: 3.5,
    category: "Pants",
    link: "id-12.html"
  }
  ,
  {
    id: 13,
    title: "Bient Et Vous T-Shirt",
    description: "Soft white t-shirt with logo.",
    price: 45.99,
    image: "images/product-13.jpg",
    rating: 4.5,
    category: "T-Shirt",
    link: "id-13.html"
  }
  ,
  {
    id: 14,
    title: "Meina Boots",
    description: "Durable boots for daily work.",
    price: 79.99,
    image: "images/product-14.jpg",
    rating: 3.7,
    category: "Shoes",
    link: "id-14.html"
  },
  {
    id: 15,
    title: "Child Nike Sneakers",
    description: "Lightweight comfortable shoes for children.",
    price: 22.99,
    image: "images/product-15.jpg",
    rating: 4.5,
    category: "Shoes",
    link: "id-15.html"
  },
  {
    id: 16,
    title: "Superhero Shoes",
    description: "Super shoes that will make you feel super.",
    price: 55.99,
    image: "images/product-16.jpg",
    rating: 5,
    category: "Shoes",
    link: "id-16.html"
  },
  {
    id: 17,
    title: "Reebok Running Shoes",
    description: "Lightweight running shoes for daily workouts.",
    price: 65.99,
    image: "images/product-17.jpg",
    rating: 4.0,
    category: "Shoes",
    link: "id-17.html"
  },
  {
    id: 18,
    title: "Meindl Kids Running Shoes",
    description: "Lightweight running shoes for playing in the park.",
    price: 38.99,
    image: "images/product-18.jpg",
    rating: 3,
    category: "Shoes",
    link: "id-18.html"
  },
  {
    id: 19,
    title: "Escalante Running Shoes",
    description: "Lightweight running shoes for daily workouts.",
    price: 129.99,
    image: "images/product-19.jpg",
    rating: 4.5,
    category: "Shoes",
    link: "id-19.html"
  },
  {
    id: 20,
    title: "Gel-Nimbus 21 Sneakers",
    description: "Lightweight running shoes for daily workouts.",
    price: 159.99,
    image: "images/product-20.jpg",
    rating: 5,
    category: "Shoes",
    link: "id-20.html"
  },
  {
    id: 21,
    title: "Tangerine Running Shoes",
    description: "Lightweight running shoes for daily workouts.",
    price: 159.99,
    image: "images/product-21.jpg",
    rating: 4.5,
    category: "Shoes",
    link: "id-21.html"
  },
  {
    id: 22,
    title: "Target Jersey",
    description: "Represent target and support the team.",
    price: 49.99,
    image: "images/product-22.jpg",
    rating: 4.5,
    category: "Shirt",
    link: "id-22.html"
  },
  {
    id: 23,
    title: "Red Hightop Light-up Sneakers",
    description: "Lightweight running shoes for daily workouts.",
    price: 119.99,
    image: "images/product-23.jpg",
    rating: 3.5,
    category: "Shoes",
    link: "id-23.html"
  },
  {
    id: 24,
    title: "Black Hightop Light-up Sneakers",
    description: "Lightweight running shoes for daily workouts.",
    price: 119.99,
    image: "images/product-24.jpg",
    rating: 4.2,
    category: "Shoes",
    link: "id-24.html"
  },
  {
    id: 25,
    title: "Original Leather Dress Shoes",
    description: "crafted from premium leather for a polished, sophisticated look.",
    price: 110.99,
    image: "images/product-25.jpg",
    rating: 2.5,
    category: "Shoes",
    link: "id-25.html"
  },
  {
    id: 26,
    title: "Kids Converse Sneakers",
    description: "Lightweight running shoes for playing in.",
    price: 29.99,
    image: "images/product-26.jpg",
    rating: 2.5,
    category: "Shoes",
    link: "id-26.html"
  },
  {
    id: 27,
    title: "Essentials While Logo Shirt",
    description: "Fashionable and Comfortable.",
    price: 28.75,
    image: "images/product-27.jpg",
    rating: 3,
    category: "Shirt",
    link: "id-27.html"
  },
  {
    id: 28,
    title: "Legendary While Logo Shirt",
    description: "Fashionable and Comfortable.",
    price: 32.49,
    image: "images/product-28.jpg",
    rating: 3.5,
    category: "Shirt",
    link: "id-28.html"
  }
];

/////////////////////////////////////////////////////////////////////////
// Pagination
function paginate(items, page = 1, perPage = 4) {
  const start = (page - 1) * perPage;
  return items.slice(start, start + perPage);
}

/////////////////////////////////////////////////////////////////////////
// Sorting
function sortProducts(items, sortType) {
  let sorted = [...items]; // clone to avoid modifying original
  switch (sortType) {
    case "price":
      sorted.sort((a, b) => a.price - b.price);
      break;
    case "popularity": // treating as "price high → low"
      sorted.sort((a, b) => b.price - a.price);
      break;
    case "rating":
      sorted.sort((a, b) => b.rating - a.rating);
      break;
    case "sale": // treating as "new arrivals" = highest id first
      sorted.sort((a, b) => b.id - a.id);
      break;
    default: // "featured" or fallback
      sorted.sort((a, b) => a.id - b.id);
  }
  return sorted;
}

/////////////////////////////////////////////////////////////////////////
// Display products
function displayProducts(container, items, page = 1, perPage = 4, sortType = "featured") {
  const showDescription = container.dataset.showDescription === "true";
  const showPrice = container.dataset.showPrice === "true";
  const showRating = container.dataset.showRating === "true";

  // read which IDs to show (or all)
  const idsToShow = container.dataset.showIds
    ? container.dataset.showIds.split(",").map(Number)
    : items.map(item => item.id);

  let filteredItems = idsToShow
    .map(id => items.find(item => item.id === id))
    .filter(Boolean);

  // apply sorting
  filteredItems = sortProducts(filteredItems, sortType);

  // paginate
  const pagedItems = paginate(filteredItems, page, perPage);

  // render
  const display = pagedItems.map(item => `
    <div class="col-4 product">
    <a href="${item.link}">
      <img src="${item.image}" alt="${item.title}" class="product-img" /></a>
      <h4 class="product-title">${item.title}</h4>
      ${showRating ? '<div class="rating"></div>' : ''}
      ${showPrice ? `<p class="product-price">$${item.price}</p>` : ''}
      ${showDescription ? `<p>${item.description}</p>` : ''}
    </div>
  `).join("");

  container.innerHTML = `<div class="row">${display}</div>`;

  if (showRating) renderRatings(container, pagedItems);

  // pagination controls
  if (container.dataset.showPagination === "true") {
    const totalPages = Math.ceil(filteredItems.length / perPage);
    if (totalPages > 1) {
      const pagination = Array.from({ length: totalPages }, (_, i) =>
        `<button class="page-btn" data-page="${i+1}">${i+1}</button>`
      ).join(" ");
      container.innerHTML += `<div class="pagination">${pagination}</div>`;

      container.querySelectorAll(".page-btn").forEach(btn => {
        btn.addEventListener("click", () => {
          displayProducts(container, items, Number(btn.dataset.page), perPage, sortType);
        });
      });
    }
  }
}

// Ratings
function renderRatings(container, items) {
  const productEls = container.querySelectorAll(".col-4.product");
  productEls.forEach((el, index) => {
    const ratingEl = el.querySelector(".rating");
    ratingEl.innerHTML = "";
    let rating = Math.round(items[index].rating * 2) / 2;
    for (let i = 1; i <= 5; i++) {
      const star = document.createElement("i");
      star.classList.add("fa");
      if (i <= Math.floor(rating)) star.classList.add("fa-star");
      else if (i === Math.ceil(rating) && rating % 1 !== 0) star.classList.add("fa-star-half-o");
      else star.classList.add("fa-star-o");
      ratingEl.appendChild(star);
    }
  });
}

/////////////////////////////////////////////////////////////////////////
// Init
window.addEventListener("DOMContentLoaded", () => {
  const productContainers = document.querySelectorAll("[id^='products-row']");
  let currentSort = "featured";

  // initial render
  productContainers.forEach(container => {
    displayProducts(container, productsArray, 1, 12, currentSort);
  });

  // sort dropdown
  const sortSelect = document.getElementById("sort");
  if (sortSelect) {
    sortSelect.addEventListener("change", (e) => {
      currentSort = e.target.value;
      productContainers.forEach(container => {
        displayProducts(container, productsArray, 1, 12, currentSort);
      });
      
    });
  }
});
/////////////////////////////////////////////////////////////////////////
// Pagination + Render using productsArray
const productsRow = document.getElementById("products-row");
const sortSelect = document.getElementById("sort");
const pageBtns = document.querySelectorAll(".page-btn span");

let currentSort = "featured"; // default
let currentPage = 1;          // default
const perPage = 12;

// render products with both page + sort applied
function renderProducts() {
  // 1. sort first
  let sortedProducts = sortProducts(productsArray, currentSort);

  // 2. slice for current page
  const start = (currentPage - 1) * perPage;
  const end = currentPage * perPage;
  const pageProducts = sortedProducts.slice(start, end);

  // 3. build HTML
  const productHTML = pageProducts.map(product => `
    <div class="col-4 product">
      <a href="${product.link}">
      <img src="${product.image}" alt="${product.title}">
    </a>
      <h4>${product.title}</h4>
      <div class="rating"></div>
      <p>$${product.price}</p>
    </div>
  `).join("");

  productsRow.innerHTML = `<div class="row">${productHTML}</div>`;

  renderRatings(productsRow, pageProducts); // if you have ratings
}

// change sort
sortSelect.addEventListener("change", () => {
  currentSort = sortSelect.value;
  currentPage = 1; // reset to page 1 when sort changes
  renderProducts();
});

// change page
pageBtns.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    const text = btn.textContent.trim();
    if (text === "→") {
      currentPage++;
    } else {
      currentPage = parseInt(text, 10);
    }
    renderProducts();
  });
});

// initial render
renderProducts();
// ===== CART SCRIPT =====




// Add product to cart
function addToCart(productId, quantity = 1, size = null) {
  const product = productsArray.find(p => p.id == productId);
  if (!product) return;

  let cart = JSON.parse(localStorage.getItem('cart')) || [];

  // Check if item already exists (same id + size)
  const existingIndex = cart.findIndex(item => item.id == productId && item.size == size);
  if (existingIndex >= 0) {
    cart[existingIndex].quantity += quantity;
  } else {
    cart.push({
      id: product.id,
      title: product.title,
      price: product.price,
      quantity,
      size,
      image: product.image
    });
  }

  localStorage.setItem('cart', JSON.stringify(cart));
  alert(`${product.title} added to cart!`);
}

// Render cart page
function renderCart() {
  const cartItemsDiv = document.getElementById('cart-items');
  const totalSpan = document.getElementById('cart-total');
  let cart = JSON.parse(localStorage.getItem('cart')) || [];

  if (!cartItemsDiv) return; // Skip if cart page not present

  if (cart.length === 0) {
    cartItemsDiv.innerHTML = "<p>Your cart is empty.</p>";
    if(totalSpan) totalSpan.textContent = "0.00";
    return;
  }

  let total = 0;
  cartItemsDiv.innerHTML = cart.map((item, idx) => {
    total += item.price * item.quantity;
    return `
      <div class="cart-item">
        <img src="${item.image}" alt="${item.title}" width="80">
        <p>${item.title} ${item.size ? '('+item.size+')' : ''}</p>
        <p>Price: $${item.price.toFixed(2)}</p>
        <input type="number" class="cart-qty" data-index="${idx}" value="${item.quantity}" min="1">
        <button class="remove-item" data-index="${idx}">Remove</button>
      </div>
    `;
  }).join('');

  if(totalSpan) totalSpan.textContent = total.toFixed(2);

  // Quantity change
  document.querySelectorAll('.cart-qty').forEach(input => {
    input.addEventListener('change', e => {
      const idx = e.target.dataset.index;
      cart[idx].quantity = parseInt(e.target.value);
      localStorage.setItem('cart', JSON.stringify(cart));
      renderCart();
    });
  });

  // Remove item
  document.querySelectorAll('.remove-item').forEach(btn => {
    btn.addEventListener('click', e => {
      const idx = e.target.dataset.index;
      cart.splice(idx, 1);
      localStorage.setItem('cart', JSON.stringify(cart));
      renderCart();
    });
  });
}

// Clear cart
const clearBtn = document.getElementById('clear-cart');
if (clearBtn) clearBtn.addEventListener('click', () => {
  localStorage.removeItem('cart');
  renderCart();
});

// === Product Page Setup ===
const productContainer = document.querySelector('.single-product[data-id]');
if (productContainer) {
  const productId = parseInt(productContainer.dataset.id);
  const addBtn = productContainer.querySelector('.btn');
  const qtyInput = productContainer.querySelector('input[type="number"]');
  const sizeSelect = productContainer.querySelector('select');

  if (addBtn) {
    addBtn.addEventListener('click', e => {
      e.preventDefault();
      const quantity = qtyInput ? parseInt(qtyInput.value) : 1;
      const size = sizeSelect ? sizeSelect.value : null;
      addToCart(productId, quantity, size);
    });
  }
}
function renderCart() {
  const cartItemsDiv = document.getElementById('cart-items');
  let cart = JSON.parse(localStorage.getItem('cart')) || [];

  if (!cartItemsDiv) return;

  if (cart.length === 0) {
    cartItemsDiv.innerHTML = "<p>Your cart is empty.</p>";
    document.getElementById('cart-total').textContent = "0.00";
    document.getElementById('cart-tax').textContent = "0.00";
    document.getElementById('cart-grand-total').textContent = "0.00";
    return;
  }

  // Render cart items
  cartItemsDiv.innerHTML = cart.map((item, idx) => `
    <div class="cart-item">
      <img src="${item.image}" alt="${item.title}" width="80">
      <p>${item.title} ${item.size ? '('+item.size+')' : ''}</p>
      <p>Price: $${item.price.toFixed(2)}</p>
      <input type="number" class="cart-qty" data-index="${idx}" value="${item.quantity}" min="1">
      <button class="remove-item" data-index="${idx}">Remove</button>
    </div>
  `).join('');

  // **Totals calculation**
  let subtotal = 0;
  cart.forEach(item => {
    subtotal += item.price * item.quantity;
  });
  const tax = subtotal * 0.10;
  const grandTotal = subtotal + tax;

  document.getElementById('cart-total').textContent = subtotal.toFixed(2);
  document.getElementById('cart-tax').textContent = tax.toFixed(2);
  document.getElementById('cart-grand-total').textContent = grandTotal.toFixed(2);

  // Add event listeners for qty change and remove
  document.querySelectorAll('.cart-qty').forEach(input => {
    input.addEventListener('change', e => {
      const idx = e.target.dataset.index;
      cart[idx].quantity = parseInt(e.target.value);
      localStorage.setItem('cart', JSON.stringify(cart));
      renderCart();
    });
  });
  document.querySelectorAll('.remove-item').forEach(btn => {
    btn.addEventListener('click', e => {
      const idx = e.target.dataset.index;
      cart.splice(idx, 1);
      localStorage.setItem('cart', JSON.stringify(cart));
      renderCart();
    });
  });
}

