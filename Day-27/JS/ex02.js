const cart = [
  {
    id: 1,
    name: "T-Shirt",
    price: 100000,
    quantity: 2,
    hotSale: false,
  },
  {
    id: 2,
    name: "Jean",
    price: 200000,
    quantity: 1,
    hotSale: false,
  },
  {
    id: 3,
    name: "Skirt",
    price: 150000,
    quantity: 3,
    hotSale: true,
  },
  {
    id: 4,
    name: "Shirt",
    price: 120000,
    quantity: 2,
    hotSale: false,
  },
  {
    id: 5,
    name: "Jacket",
    price: 250000,
    quantity: 1,
    hotSale: true,
  },
];

function renderOrder(cart) {
  let table = `<table border="1">
                    <tr>
                      <th>Tên sản phẩm</th>
                      <th>Đơn giá</th>
                      <th>Số lượng</th>
                      <th>Thành tiền</th>
                    </tr>`;

  let total = 0;

  cart.forEach((item) => {
    const { name, price, quantity, hotSale } = item;
    const itemTotal = price * quantity;
    total += itemTotal;

    const colorProduct = hotSale ? ' style="color: red;"' : "";
    table += `<tr${colorProduct}>
                  <td>${name}</td>
                  <td>${price} VNĐ</td>
                  <td>${quantity}</td>
                  <td>${itemTotal} VNĐ</td>
                </tr>`;
  });
  table += `<tr>
                <td colspan="3" style="font-weight:900">TỔNG TIỀN:</td>
                <td style="font-weight:900">${total} VNĐ</td>
              </tr>`;

  table += `</table>`;
  document.body.innerHTML += table;
}
renderOrder(cart);
