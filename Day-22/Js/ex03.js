const products = [
  { id: "1OT22W006", name: "Girls Windbreaker Jacket" },
  { id: "1OT22W009", name: "Boys T-shirt" },
  { id: "1OT22W032", name: "Boys Shirt" },
  { id: "1OT22W011", name: "Men's Super Warm Jacket" },
  { id: "1OT22W000", name: "Women's Party Dress" },
];

const productManager = {
  createSlug(productArr) {
    for (let i = 0; i < productArr.length; i++) {
      let name = productArr[i].name.replaceAll(" ", "-").toLowerCase();
      productArr[i].slug = `${name}-${productArr[i].id.toLowerCase()}`;
      if (productArr[i].slug.includes("'")) {
        productArr[i].slug = productArr[i].slug.replace("'", "");
      }
    }
    return productArr;
  },
};

console.log(productManager.createSlug(products));
