let menus = Storage.get();
UI.render(menus);

const form = document.getElementById("menuForm");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const price = document.getElementById("price").value;
  const category = document.getElementById("category").value;

  if (!name || !price) return;

  menus.push({ name, price, category });
  Storage.save(menus);
  UI.render(menus);
  form.reset();
});

function deleteMenu(index) {
  menus.splice(index, 1);
  Storage.save(menus);
  UI.render(menus);
}

function editMenu(index) {
  const menu = menus[index];

  const name = prompt("Nama Menu:", menu.name);
  const price = prompt("Harga:", menu.price);
  const category = prompt("Kategori:", menu.category);

  if (name && price && category) {
    menus[index] = { name, price, category };
    Storage.save(menus);
    UI.render(menus);
  }
}
