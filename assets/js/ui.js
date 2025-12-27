const UI = {
  list: document.getElementById("menuList"),
  totalMenu: document.getElementById("totalMenu"),
  totalPrice: document.getElementById("totalPrice"),

  render(menus) {
    this.list.innerHTML = "";
    let sum = 0;

    menus.forEach((menu, index) => {
      sum += Number(menu.price);

      const item = document.createElement("div");
      item.className =
        "border rounded p-3 bg-slate-50 flex justify-between items-start";

      item.innerHTML = `
        <div class="flex-1">
          <input
            class="font-semibold w-full border-b focus:outline-none"
            value="${menu.name}"
            onchange="updateMenu(${index}, 'name', this.value)"
          />

          <div class="text-sm text-gray-500 mt-1">
            Rp
            <input
              type="number"
              class="w-20 border-b focus:outline-none"
              value="${menu.price}"
              onchange="updateMenu(${index}, 'price', this.value)"
            />
            •
            <select
              class="border-b focus:outline-none"
              onchange="updateMenu(${index}, 'category', this.value)"
            >
              <option ${menu.category === "Makanan" ? "selected" : ""}>Makanan</option>
              <option ${menu.category === "Minuman" ? "selected" : ""}>Minuman</option>
              <option ${menu.category === "Snack" ? "selected" : ""}>Snack</option>
            </select>
          </div>
        </div>

        <button
          onclick="deleteMenu(${index})"
          class="text-red-600 ml-3"
        >
          Hapus
        </button>
      `;

      this.list.appendChild(item);
    });

    this.totalMenu.textContent = menus.length;
    this.totalPrice.textContent = "Rp " + sum;
  }
};
