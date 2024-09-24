const datas = [
  { name: "Alice", age: 20 },
  { name: "Bob", age: 0 },
  { name: "Carol", age: -1 },
  { name: "David", age: null },
  { name: "Hehe", age: NaN },
  { name: "Frank", age: undefined },
  { name: "", age: 20 },
];

function classifyUsers(users) {
  const validData = [];
  const invalidData = [];

  for (let i = 0; i < users.length; i++) {
    const user = users[i];

    if (!user.name || !user.age || user.age < 0 || isNaN(user.age)) {
      invalidData.push(user);
    } else {
      validData.push(user);
    }
  }

  return { validData, invalidData };
}

const { validData, invalidData } = classifyUsers(datas);

console.log("validData:", validData);
console.log("invalidData:", invalidData);
