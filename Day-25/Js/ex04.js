function countDownToNewYear() {
  const now = new Date();
  const nextYear = now.getFullYear() + 1;
  const newYear = new Date(nextYear, 0, 1);
  const time = newYear - now;
  const daysLeft = Math.ceil(time / (1000 * 60 * 60 * 24));
  console.log(`${daysLeft} ngày nữa là đến Tết Dương Lịch.`);
}

countDownToNewYear();
