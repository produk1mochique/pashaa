let cart = JSON.parse(localStorage.getItem("cart")) || [];

function addCart(nama, harga) {
  cart.push({ nama, harga });
  localStorage.setItem("cart", JSON.stringify(cart));
  alert("Produk ditambahkan!");
}

function showCart() {
  let list = document.getElementById("cart");
  let total = 0;
  list.innerHTML = "";

  cart.forEach(item => {
    list.innerHTML += <li>${item.nama} - Rp${item.harga}</li>;
    total += item.harga;
  });

  document.getElementById("total").innerText =
    "Total: Rp" + total;
}
