function caclEBill(consumption) {
  let totalCost = 0;

  if (consumption > 0 && consumption <= 50) {
    totalCost = consumption * 1.678; // Bậc 1: 0 - 50 kWh
  } else if (consumption > 50 && consumption <= 100) {
    totalCost = 50 * 1.678 + (consumption - 50) * 1.734; // Bậc 2: 51 - 100 kWh
  } else if (consumption > 100 && consumption <= 200) {
    totalCost = 50 * 1.678 + 50 * 1.734 + (consumption - 100) * 2.014; // Bậc 3: 101 - 200 kWh
  } else if (consumption > 200 && consumption <= 300) {
    totalCost =
      50 * 1.678 + 50 * 1.734 + 100 * 2.014 + (consumption - 200) * 2.536; // Bậc 4: 201 - 300 kWh
  } else if (consumption > 300 && consumption <= 400) {
    totalCost =
      50 * 1.678 +
      50 * 1.734 +
      100 * 2.014 +
      100 * 2.536 +
      (consumption - 300) * 2.834; // Bậc 5: 301 - 400 kWh
  } else {
    totalCost =
      50 * 1.678 +
      50 * 1.734 +
      100 * 2.014 +
      100 * 2.536 +
      100 * 2.834 +
      (consumption - 400) * 2.927; // Bậc 6: 401 kWh trở lên
  }

  return totalCost;
}

// Nhập số điện tiêu thụ
const consumption = prompt("Nhập số điện bạn đã tiêu thụ (kWh):");
const totalBill = caclEBill(consumption);

// Hiển thị kết quả
alert(`Số tiền điện phải đóng là: ${totalBill} VND`);
console.log(`Số tiền điện phải đóng là: ${totalBill} VND`);
