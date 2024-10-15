const registerForm = document.querySelector("#register");
registerForm.addEventListener("submit", (submitEvent) => {
  submitEvent.preventDefault();
  const fullName = document.querySelector("#fullName").value.trim();
  const email = document.querySelector("#email").value.trim();
  const password = document.querySelector("#password").value;
  const confirmPassword = document.querySelector("#confirmPassword").value;
  const gender = document.querySelector("#gender").value;

  if (fullName === "") {
    alert(`Vui lòng điền đầy đủ học tên`);
    return;
  }
  if (password.length < 8) {
    alert(`Mật khẩu phải có ít nhất 8 ký tự.`);
    return;
  }
  if (password !== confirmPassword) {
    alert(`Mật khẩu không khớp `);
    return;
  }

  const registerInfo = {
    fullName: fullName,
    email: email,
    password: password,
    confirmPassword: confirmPassword,
    gender: gender,
  };

  console.log(registerInfo);
});
