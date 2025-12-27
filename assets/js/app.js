let menus = Storage.get();
UI.render(menus);

const form = document.getElementById("menuForm");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const newMenu = {
    name: name.value.trim(),
    price: price.value,
    category: category.value
  };

  menus.push(newMenu);
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

  const newName = prompt("Nama Menu:", menu.name);
  const newPrice = prompt("Harga:", menu.price);
  const newCategory = prompt("Kategori:", menu.category);

  if (newName && newPrice && newCategory) {
    menus[index] = {
      name: newName,
      price: newPrice,
      category: newCategory
    };

    Storage.save(menus);
    UI.render(menus);
  }
}
