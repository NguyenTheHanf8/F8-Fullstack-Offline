const users = [];

function register(name, password, email) {
  //Kiểm tra thông tin đầu vào
  if (!name || !password || !email) {
    return "Vui lòng nhập đầy đủ tên, mật khẩu và email!";
  }

  //Thêm người dùng mới vào mảng `users` với role mặc định là "user"
  const user = {
    name: name,
    password: password,
    email: email,
    role: "user",
  };

  // Add the user object to the data array
  users.push(user);

  return users;
}

function login(email, password) {
  // Kiểm tra xem email và password có khớp với người dùng nào trong mảng `users` không
  for (let i = 0; i < users.length; i++) {
    if (users[i].email === email && users[i].password === password) {
      return users[i]; // Trả về đối tượng người dùng nếu thông tin khớp
    }
  }

  // Nếu không tìm thấy người dùng phù hợp
  return "Tài khoản không tồn tại!";
}

// Đăng ký
console.log(register("Nguyen Van A", "00001", "nguyenvanA@gmail.com"));
console.log(register("Nguyen Van B", "00002", "nguyenvanB@gmail.com"));
console.log(register("Nguyen Van C", "00003", "nguyenvanC@gmail.com"));
console.log(register("Nguyen Van D", "", "nguyenvanD@gmail.com")); // Đăng ký với thông tin không đầy đủ

// Đăng nhập
console.log(login("nguyenvanA@gmail.com", "00001")); // Đăng nhập với mật khẩu đúng
console.log(login("hoangnm@gmail.com", "wrongpassword")); // Đăng nhập với mật khẩu sai
