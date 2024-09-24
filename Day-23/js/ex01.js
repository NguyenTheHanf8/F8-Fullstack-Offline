const products = [
  { id: "1OT22W006", name: "Girls Windbreaker Jacket" },
  { id: "1OT22W009", name: "Boys T-shirt" },
  { id: "1OT22W032", name: "Boys Shirt" },
  { id: "1OT22W011", name: "Men's Super Warm Jacket" },
  { id: "1OT22W000", name: "Women's Party Dress" },
];

function searchProducts() {
  const searchStr = prompt("Nhập tên sản phẩm:").trim().toLowerCase();

  const result = document.getElementById("showResult");
  result.innerHTML = "";

  // Không nhập gì vào prompt
  if (searchStr === "") {
    result.innerHTML = "<p>Vui lòng nhập tên sản phẩm bạn muốn tìm!</p>";
    return;
  }

  const filterProducts = products.filter(
    (product) => product.name.toLowerCase().indexOf(searchStr) !== -1
  );

  if (filterProducts.length > 0) {
    filterProducts.forEach((product) => {
      result.innerHTML += `<p>ID: ${product.id} - Tên: ${product.name}</p>`;
    });
  } else {
    result.innerHTML = "<p>Không tìm thấy sản phẩm nào.</p>";
  }
}

searchProducts();
