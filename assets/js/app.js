let menus = Storage.get();
UI.render(menus);

const form = document.getElementById("menuForm");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const price = Number(document.getElementById("price").value);
  const category = document.getElementById("category").value;

  if (!name || price <= 0) return;

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

// EDIT INLINE
function updateMenu(index, key, value) {
  menus[index][key] = key === "price" ? Number(value) : value;
  Storage.save(menus);
  UI.render(menus);
}
