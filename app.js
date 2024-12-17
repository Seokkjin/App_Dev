// Function to update subtotal when quantity changes
function updateSubtotal(price, productId) {
    const quantity = document.getElementById(`product-quantity-${productId}`).value;
    const subtotal = price * quantity;
    document.getElementById(`subtotal-${productId}`).textContent = subtotal.toFixed(2);
}

// Function to add product to cart and redirect to order.html
function addToCart(name, price, image, productId) {
    const quantity = document.getElementById(`product-quantity-${productId}`).value;
    const product = { name, price, image, quantity: parseInt(quantity) };
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push(product);
    localStorage.setItem('cart', JSON.stringify(cart));
    window.location.href = 'order.html';
}

// Function to display cart items on order.html
document.addEventListener('DOMContentLoaded', () => {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const cartItemsContainer = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total');
    let total = 0;

    cart.forEach(item => {
        const itemTotal = item.price * item.quantity;
        total += itemTotal;

        const itemElement = document.createElement('div');
        itemElement.classList.add('cart-item');
        itemElement.innerHTML = `
            <img src="images/${item.image}" width="100px">
            <div>
                <p>${item.name}</p>
                <p>Price: Php ${item.price.toFixed(2)}</p>
                <p>Quantity: ${item.quantity}</p>
                <p>Subtotal: Php ${itemTotal.toFixed(2)}</p>
            </div>
        `;
        cartItemsContainer.appendChild(itemElement);
    });

    cartTotal.textContent = `Php ${total.toFixed(2)}`;
});

// Function to clear the cart
function clearCart() {
    localStorage.removeItem('cart');
    document.getElementById("cart-items").innerHTML = "";
    document.getElementById("cart-total").textContent = "Php 0.00";
}

// Function to proceed to checkout
function proceedToCheckout() {
    alert("Proceeding to checkout...");
}

// Function to buy more
function buyMore() {
    window.location.href = 'products.html'; 
}
