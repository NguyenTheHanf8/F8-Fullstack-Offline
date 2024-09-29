const order = {
  id: 1,
  products: [
    { id: 1, name: "Tivi", price: 10000, quantity: 1 },
    { id: 2, name: "Tủ lạnh", price: 15000, quantity: 2 },
    { id: 3, name: "Máy giặt", price: 8000, quantity: 4 },
    { id: 4, name: "Điều hòa", price: 12000, quantity: 1 },
  ],
};

const caclTotalPrice = (products) => {
  return products.reduce(
    (total, { price, quantity }) => total + price * quantity,
    0
  );
};

order.totalPrice = caclTotalPrice(order.products);

console.log(`Tổng giá trị đơn hàng: ${order.totalPrice}`);
