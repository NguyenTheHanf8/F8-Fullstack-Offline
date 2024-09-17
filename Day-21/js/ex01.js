function createCustomers(customers) {
  // Sắp xếp theo tuổi tăng dần
  for (let i = 0; i < customers.length - 1; i++) {
    for (let j = 0; j < customers.length - 1 - i; j++) {
      if (customers[j].age > customers[j + 1].age) {
        // Đổi vị trí customers[j] và customers[j + 1]
        let temp = customers[j];
        customers[j] = customers[j + 1];
        customers[j + 1] = temp;
      }
    }
  }

  // Thêm shortName cho từng đối tượng
  for (let index in customers) {
    let nameParts = customers[index].name.split(" ");
    // Lấy họ và tên (bỏ tên đệm)
    customers[index].shortName =
      nameParts[0] + " " + nameParts[nameParts.length - 1];
  }

  return customers;
}

// Input
const customers = [
  { name: "Nguyễn Văn A", age: 30, address: "Ha Noi" },
  { name: "Nguyễn Văn B", age: 2, address: "Hai Phong" },
  { name: "Nguyễn Văn C", age: 4, address: "Quang Ninh" },
  { name: "Nguyễn Văn D", age: 12, address: "TP.HCM" },
  { name: "Nguyễn Văn E", age: 6, address: "Hehe" },
];

// Output
const result = createCustomers(customers);
console.log(result);
