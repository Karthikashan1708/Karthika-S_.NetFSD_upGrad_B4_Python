// Mini Product Search App
const MiniProductSearchApp = (() => {
  // ----- State -----
  const state = {
    products: [
      "Laptop",
      "Smartphone",
      "Headphones",
      "Keyboard",
      "Mouse",
      "Monitor",
      "Charger",
      "USB Cable",
      "Webcam",
      "Speaker"
    ],
    filteredProducts: []
  };

  // ----- Cache DOM -----
  const DOM = {
    searchInput: document.getElementById("search"),
    productList: document.getElementById("product-list"),
    noResults: document.getElementById("no-results")
  };

  // ----- Render -----
  const render = () => {
    DOM.productList.innerHTML = "";

    if (state.filteredProducts.length === 0) {
      DOM.noResults.style.display = "block";
      return;
    } else {
      DOM.noResults.style.display = "none";
    }

    state.filteredProducts.forEach(product => {
      const li = document.createElement("li");
      li.textContent = product;
      DOM.productList.appendChild(li);
    });
  };

  // ----- Filter products -----
  const filterProducts = (query) => {
    const lowerQuery = query.toLowerCase();
    state.filteredProducts = state.products.filter(product =>
      product.toLowerCase().includes(lowerQuery)
    );
    render();
  };

  // ----- Event Delegation -----
  const attachEvents = () => {
    DOM.searchInput.addEventListener("input", (e) => {
      filterProducts(e.target.value);
    });

    DOM.productList.addEventListener("click", (e) => {
      if (e.target.tagName === "LI") {
        alert(`You clicked on: ${e.target.textContent}`);
      }
    });
  };

  // ----- Initialize App -----
  const init = () => {
    state.filteredProducts = [...state.products];
    render();
    attachEvents();
  };

  return { init };
})();

// Initialize on DOMContentLoaded
document.addEventListener("DOMContentLoaded", () => MiniProductSearchApp.init());