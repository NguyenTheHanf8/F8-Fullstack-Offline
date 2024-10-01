const calculateAge = (birthday) => {
  if (typeof birthday !== "string") return "Đầu vào không đúng định dạng.";

  const [day, month, year] = birthday.split("/").map(Number);

  if (!day || !month || !year || isNaN(day) || isNaN(month) || isNaN(year))
    return "Vui lòng nhập ngày hợp lệ DD/MM/YYYY.";

  const inputDate = new Date(year, month - 1, day);
  const currentDate = new Date();

  if (inputDate >= currentDate) return "Ngày sinh phải ở trước ngày hiện tại.";

  const daysLived = Math.floor(
    (currentDate - inputDate) / (1000 * 60 * 60 * 24)
  );

  return `Bạn đã sống: ${daysLived} ngày`;
};

console.log(calculateAge("06/07/2003"));
