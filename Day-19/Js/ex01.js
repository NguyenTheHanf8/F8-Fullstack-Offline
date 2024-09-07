function caclTaxiPostage(km) {
  let postage = 0;

  // Tính giá cước của taxi theo từng mốc quãng đường
  if (km <= 0) {
    postage = 0;
  } else if (km > 0 && km <= 1) {
    postage = km * 15000;
  } else if (km > 1 && km <= 5) {
    postage = 15000 + (km - 1) * 13500;
  } else {
    postage = 15000 + 4 * 13500 + (km - 5) * 11000;
  }

  //Giá cước khi quãng đường lớn hơn 120km
  if (km > 120) {
    postage *= 0.9;
  }

  return postage;
}

// Nhập quảng đường định đi
const km = prompt(`Quãng đường bạn định đi(km): `);
const totalBill = caclTaxiPostage(km);

// Hiển thị kết quả
alert(`Số tiền phải trả cho ${km}km là: ${totalBill} VND`);
console.log(`Số tiền phải trả cho ${km}km là: ${totalBill} VND`);

// Test value
const testValues = [0.5, 1, 3, 5, 6, 120, 130];
testValues.forEach((km) => {
  console.log(`Số km: ${km}, Tiền cước: ${caclTaxiPostage(km)}đ`);
});
