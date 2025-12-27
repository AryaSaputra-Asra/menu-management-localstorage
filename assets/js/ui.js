const UI = {
  list: document.getElementById("menuList"),
  total: document.getElementById("totalMenu"),

  render(menus) {
    this.list.innerHTML = "";

    menus.forEach((menu, index) => {
      const item = document.createElement("div");
      item.className =
        "flex justify-between items-center border rounded p-3 bg-slate-50";

      item.innerHTML = `
        <div>
          <div class="font-semibold">${menu.name}</div>
          <div class="text-sm text-gray-500">
            Rp ${menu.price} • ${menu.category}
          </div>
        </div>
        <div class="space-x-2">
          <button class="text-yellow-600" onclick="editMenu(${index})">Edit</button>
          <button class="text-red-600" onclick="deleteMenu(${index})">Hapus</button>
        </div>
      `;

      this.list.appendChild(item);
    });

    this.total.textContent = menus.length;
  }
};
