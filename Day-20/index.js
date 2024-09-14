// Màu chạy qua các từ
const changeColor = "red";
const defaultColor = "black";

// Chọn đoạn văn bản cần tạo hiệu ứng
const text = document.getElementById("animation-text");

// Phân chia đoạn văn thành từng từ và bọc nó trong thẻ span
const words = text.innerText.split(" ");
let newHTML = "";
for (const word of words) {
  newHTML += `<span> ${word} </span>`;
}
text.innerHTML = newHTML;

const spans = text.querySelectorAll("span"); // Lấy danh sách các span
let current = 0;

let previous = 0;
// Hàm thay đổi màu sắc chạy qua các từ
function animateColor() {
  // Đặt lại màu của tất cả các từ về màu mặc định
  spans[previous].style.color = defaultColor;
  spans[current].style.color = changeColor; // Đổi màu cho từ
  previous = current;
  current = (current + 1) % spans.length; // Chuyển sang từ tiếp theo
}
setInterval(animateColor, 1000); // Set thời gian chạy
