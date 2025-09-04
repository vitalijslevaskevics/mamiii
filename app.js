function addToCart(productName) {
  const cart = document.getElementById('cart');
  const item = document.createElement('li');
  item.textContent = productName;
  cart.appendChild(item);
  alert(productName + ' добавлен в корзину!');
}
