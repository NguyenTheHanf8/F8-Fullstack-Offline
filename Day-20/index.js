const originalText = document.getElementById("animation-text").innerText;

// Cắt chuỗi thành mảng
const words = originalText.split(" ");

//Khởi tạo 1 biến để theo dõi vị trí từ hiện tại
let currentIndex = 0;

setInterval(() => {
  // Khởi tạo 1 biến để ghi nội dung
  let newContent = "";
  for (let i = 0; i < words.length; i++) {
    if (i === currentIndex) {
      // Nếu từ hiện tại === từ được duyệt, thêm style vào từ đó
      newContent += `<span style="color: red; font-size:30px"> ${words[i]} </span>`;
    } else {
      newContent += `<span style="font-size:30px"> ${words[i]} </span>`;
    }
  }

  // Hiển thị ra màn hình
  document.open();
  document.write(`<div>${newContent}</div>`);
  document.close();

  currentIndex = (currentIndex + 1) % words.length;
}, 1000); // Thay đổi mỗi 1000ms
