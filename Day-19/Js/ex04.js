function isPrime(n) {
  // Kiểm tra các trường hợp đặc biệt
  if (n <= 1) return false;
  if (n === 2) return true;
  // Kiểm tra các số chia hết từ 2 đến n
  for (let i = 2; i <= n; i++) {
    if (n % i === 0) return false;
  }
  return true;
}

// Gọi hàm trong câu điều kiện if else
const number = prompt("Nhập một số bất kỳ"); // Thay đổi số này để kiểm tra
if (isPrime(number)) {
  console.log(`${number} là số nguyên tố.`);
  alert(`${number} là số nguyên tố.`);
} else {
  console.log(`${number} không phải là số nguyên tố.`);
  alert(`${number} không phải là số nguyên tố.`);
}
