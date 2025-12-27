const UI = {
  list: document.getElementById("menuList"),
  total: document.getElementById("totalMenu"),

  render(menus) {
    this.list.innerHTML = "";

    menus.forEach((menu, index) => {
      this.list.innerHTML += `
        <div class="flex justify-between items-center border p-3 rounded bg-slate-50 hover:shadow transition">
          <div>
            <p class="font-semibold">${menu.name}</p>
            <p class="text-sm text-gray-500">
              Rp ${menu.price} • ${menu.category}
            </p>
          </div>
          <div class="space-x-3">
            <button
              onclick="editMenu(${index})"
              class="text-yellow-600 hover:underline"
            >
              Edit
            </button>
            <button
              onclick="deleteMenu(${index})"
              class="text-red-600 hover:underline"
            >
              Hapus
            </button>
          </div>
        </div>
      `;
    });

    this.total.textContent = menus.length;
  }
};
