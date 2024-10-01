function countDown(time) {
  if (time <= 0 || !Number.isInteger(time)) {
    console.log(" Vui lòng thử một số nguyên dương.");
    return;
  }
  const intervalId = setInterval(() => {
    console.log(time);
    time--;
    if (time < 0) clearInterval(intervalId);
  }, 1000);
}
countDown(10);
// countDown(-10);
