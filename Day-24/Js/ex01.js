const students = [
  { id: 1, name: "Nguyen Manh Huy", age: 18 },
  { id: 2, name: "Nguyen Thanh An", age: 18 },
  { id: 3, name: "Phan Tuan Manh", age: 18 },
  { id: 4, name: "Nguyen Truong Giang", age: 15 },
  { id: 5, name: "Tran Ngoc Duy", age: 18 },
  { id: 6, name: "Hoang Thanh Huy", age: 18 },
  { id: 7, name: "Nguyen The Han", age: 18 },
  { id: 8, name: "Le Huu Trong", age: 17 },
  { id: 9, name: "Vu Quoc Dung", age: 18 },
  { id: 10, name: "Nguyen Hai Duong", age: 18 },
  { id: 11, name: "Nguyen Trung Hieu", age: 18 },
  { id: 12, name: "Tran Duy Dong", age: 18 },
  { id: 13, name: "Tran Minh Hoang", age: 18 },
  { id: 14, name: "Nguyen Minh Hoang", age: 18 },
  { id: 15, name: "Nhung", age: 18 },
  { id: 16, name: "Nguyễn Nhung", age: 18 },
];

// Tách họ, tên đệm và tên chính
function splitName(fullName) {
  const nameParts = fullName.split(" ");
  const lastName = nameParts[0];
  const firstName = nameParts[nameParts.length - 1];
  const middleName = nameParts.slice(1, nameParts.length - 1).join(" ");
  return { firstName, middleName, lastName };
}

students.sort((a, b) => {
  const nameA = splitName(a.name);
  const nameB = splitName(b.name);

  // So sánh tên chính
  if (nameA.firstName !== nameB.firstName) {
    return nameA.firstName.localeCompare(nameB.firstName);
  }

  // Nếu tên chính giống nhau, so sánh tên đệm
  if (nameA.middleName !== nameB.middleName) {
    return nameA.middleName.localeCompare(nameB.middleName);
  }

  // Nếu tên đệm cũng giống, so sánh họ
  return nameA.lastName.localeCompare(nameB.lastName);
});

console.log(students);
