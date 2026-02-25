let cart = [];
let total = 0;

function addToCart(name, price) {
  cart.push({name, price});
  total += price;

  document.getElementById("cart-count").innerText = cart.length;
  document.getElementById("cart-total").innerText = total.toFixed(2);

  const li = document.createElement("li");
  li.innerText = name + " - " + price + "€";
  document.getElementById("cart-items").appendChild(li);
}

function toggleCart() {
  document.getElementById("cart").classList.toggle("open");
}

function countdown() {
  const target = new Date();
  target.setDate(target.getDate() + 3);

  setInterval(() => {
    const now = new Date();
    const diff = target - now;

    const days = Math.floor(diff / (1000*60*60*24));
    const hours = Math.floor((diff / (1000*60*60)) % 24);

    document.getElementById("countdown").innerText =
      days + " days " + hours + " hours";
  }, 1000);
}

countdown();
