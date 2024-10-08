const menu = [
  { id: 1, name: "Home", parentId: 0 },
  { id: 2, name: "About", parentId: 0 },
  { id: 3, name: "News", parentId: 0 },
  { id: 4, name: "Products", parentId: 0 },
  { id: 5, name: "Contact", parentId: 0 },
  { id: 6, name: "T-Shirt", parentId: 4 },
  { id: 7, name: "Jean", parentId: 4 },
  { id: 8, name: "Skirt", parentId: 4 },
];

function createMenu(menu) {
  let html = '<ul id="main-menu">';
  // Tạo menu mẹ
  menu.forEach((item) => {
    if (item.parentId === 0) {
      html += `<li><a href="#">${item.name}</a>`;

      const childMenu = menu.filter((child) => child.parentId === item.id);
      if (childMenu.length > 0) {
        html += "<ul>"; // Mở thẻ ul cho menu con
        childMenu.forEach((child) => {
          html += `<li><a href="#">${child.name}</a></li>`; // Thêm từng mục con
        });
        html += "</ul>"; // Đóng ul cho menu con
      }

      html += "</li>"; // Đóng li cho menu mẹ
    }
  });

  html += "</ul>"; // Đóng ul cho menu mẹ

  document.body.innerHTML += html;

  // Chỉnh font-size
  const style = `
      #main-menu > li > a {
        font-size: 24px;
      }
      #main-menu ul li a {
        font-size: 20px;
      }
    `;

  const styleElement = document.createElement("style");
  styleElement.innerHTML = style;
  document.head.innerHTML += styleElement.outerHTML;
}

createMenu(menu);
