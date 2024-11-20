let cart = [];


function updateCart() {
    const cartItems = document.getElementById("cart-items");
    const totalDisplay = document.getElementById("total");
    cartItems.innerHTML = "";

    let total = 0;

    for(let i = 0; i < cart.length; i++) {
        const item = cart[i];

        const listItem = document.createElement("li")
        listItem.textContent = `${item.name} -$${item.price.toFixed(2)} x ${item.quantity}`;

        const removeButton = document.createElement("button");
        removeButton.textContent = "Remove";
        removeButton.classList.add("remove");
        removeButton.onclick = function() {
            removeItem(i);
        };

        listItem.appendChild(removeButton);
        cartItems.appendChild(listItem);

        total +=item.price * item.quantity;
    }
    totalDisplay.textContent = `Total: $${total.toFixed(2)}`;
}

function addItem() {
    const name = document.getElementById("item-name").value.trim();
    const price = Number(document.getElementById("item-price").value);
    const quantity = Number(document.getElementById("item-quantity").value);

    if(!name || price <= 0 || quantity <= 0 || isNaN(price) || isNaN(quantity)){
        alert("Please enter valid item details!");
        return;
    }
    cart.push({ name: name, price: price, quantity: quantity});
    updateCart();

    document.getElementById("item-name").value = "";
    document.getElementById("item-price").value = "";
    document.getElementById("item-quantity").value= 1;
}

function removeItem(index) {
    cart.splice(index, 1);
    updateCart();
}

function applyDiscount() { 
    const discount = Number(document.getElementById("discount").value);

    if (isNaN(discount) || discount < 0 || discount > 100) {
        alert("Please enter a valid discount percentage (0-100)!");
        return;
    }


let total = 0;
for(let i = 0; i < cart.length; i++) {
    total += cart[i].price * cart[i].quantity;
}

total -= (total * discount) /100;
document.getElementById("total").textContent = `Total: $${total.toFixed(2)}`;

document.getElementById("discount").value ="";
}