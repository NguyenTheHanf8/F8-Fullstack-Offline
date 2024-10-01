function showTime() {
  setInterval(function displayTime() {
    const currentTime = new Date();
    console.log(
      ` ${currentTime.toLocaleDateString()} ${currentTime.toLocaleTimeString(
        "en-GB"
      )},`
    );
  }, 1000);
}

showTime();
