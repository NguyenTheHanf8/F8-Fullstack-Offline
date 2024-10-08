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

const result = students.sort((a, b) => {
  const nameA = a.name.split(" ");
  const nameB = b.name.split(" ");
  // Lấy họ, tên đệm, và tên chính
  const firstNameA = nameA[0];
  const firstNameB = nameB[0];
  const middleNameA = nameA.slice(1, -1).join(" ");
  const middleNameB = nameB.slice(1, -1).join(" ");
  const lastNameA = nameA.slice(-1)[0];
  const lastNameB = nameB.slice(-1)[0];

  // So sánh tên chính
  if (lastNameA < lastNameB) {
    return -1;
  } else if (lastNameA > lastNameB) {
    return 1;
  }
  // Tên chính giống nhau thì so sánh tên đệm
  if (middleNameA < middleNameB) {
    return -1;
  } else if (middleNameA > middleNameB) {
    return 1;
  }
  // Tên đệm giống nhau thì so sánh họ
  if (firstNameA < firstNameB) {
    return -1;
  } else if (firstNameA > firstNameB) {
    return 1;
  } else {
    return 0;
  }
});

console.log(result);
