function caclSum(n) {
  let sum = 0;

  // Sử dụng vòng lặp để tính từng phần tử của biểu thức và cộng vào tổng
  for (let i = 1; i <= n; i++) {
    sum += i * (i + 1); // Tính giá trị i * (i + 1) và cộng vào tổng
  }

  return sum;
}

// Nhập số nguyên n từ người dùng
const n = prompt("Nhập số nguyên n:");
const result = caclSum(n);

// Hiển thị kết quả
alert("Giá trị của biểu thức S là: " + result);
console.log("Giá trị của biểu thức S là: " + result);
