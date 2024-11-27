 // Adicionar item ao carrinho
 function addToCart(name, price) {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push({ name, price });
    localStorage.setItem('cart', JSON.stringify(cart));
    displayCartItems();
  }

  // Exibir os itens no carrinho
  function displayCartItems() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const cartItemsDiv = document.getElementById('cartItems');
    cartItemsDiv.innerHTML = ''; // Limpa os itens antes de exibir

    if (cart.length === 0) {
      cartItemsDiv.innerHTML = '<p>O carrinho está vazio.</p>';
      return;
    }

    let total = 0;
    cart.forEach((item, index) => {
      total += item.price;

      const cartItem = document.createElement('div');
      cartItem.className = 'cart-item';
      cartItem.innerHTML = `
        <span>${item.name} - R$${item.price.toFixed(2)}</span>
        <button onclick="removeFromCart(${index})">Remover</button>
      `;
      cartItemsDiv.appendChild(cartItem);
    });

    // Adicionar total
    const totalDiv = document.createElement('div');
    totalDiv.innerHTML = `<strong>Total: R$${total.toFixed(2)}</strong>`;
    cartItemsDiv.appendChild(totalDiv);
  }

  // Remover item do carrinho
  function removeFromCart(index) {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.splice(index, 1);
    localStorage.setItem('cart', JSON.stringify(cart));
    displayCartItems();
  }

  // Limpar o carrinho
  function clearCart() {
    localStorage.removeItem('cart');
    displayCartItems();
  }

  // Alternar visibilidade do dropdown do carrinho
  function toggleCart() {
    const cartDropdown = document.getElementById('cartDropdown');
    cartDropdown.style.display = cartDropdown.style.display === 'block' ? 'none' : 'block';
  }

  // Exibir os itens no carrinho ao carregar a página
  document.addEventListener('DOMContentLoaded', displayCartItems);
