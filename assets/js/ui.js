const UI = {
  menuList: document.getElementById("menuList"),
  orderList: document.getElementById("orderList"),
  totalPrice: document.getElementById("totalPrice"),

  receipt: document.getElementById("receipt"),
  receiptNumber: document.getElementById("receiptNumber"),
  receiptItems: document.getElementById("receiptItems"),
  receiptTotal: document.getElementById("receiptTotal"),
  receiptTime: document.getElementById("receiptTime"),

  historyList: document.getElementById("historyList"),

  renderMenu(menus) {
    this.menuList.innerHTML = "";
    menus.forEach(m => {
      this.menuList.innerHTML += `
        <div class="flex justify-between border p-2 rounded">
          <div>
            <b>${m.name}</b><br>
            <small>Rp ${m.price}</small>
          </div>
          <button class="bg-blue-500 text-white px-3 py-1 rounded" onclick="addToOrder(${m.id})">
            Pesan
          </button>
        </div>
      `;
    });
  },

  renderOrders(orders) {
    this.orderList.innerHTML = "";
    let total = 0;

    orders.forEach((o, i) => {
      total += o.price * o.qty;
      this.orderList.innerHTML += `
        <div class="flex justify-between border p-2 rounded">
          <div>
            ${o.name}<br>
            <small>Rp ${o.price} x ${o.qty}</small>
          </div>
          <div class="space-x-2">
            <button class="small-ghost" onclick="updateQty(${i}, -1)">-</button>
            <button class="small-ghost" onclick="updateQty(${i}, 1)">+</button>
            <button class="small-ghost" onclick="removeOrder(${i})">x</button>
          </div>
        </div>
      `;
    });

    this.totalPrice.textContent = "Rp " + total;
  },

  renderReceipt(r) {
    if (!r) { this.receipt.classList.add("hidden"); return; }
    this.receipt.classList.remove("hidden");
    this.receiptNumber.textContent = r.number;
    this.receiptItems.innerHTML = "";

    r.items.forEach(i => {
      this.receiptItems.innerHTML += `<div>${i.name} x ${i.qty} = Rp ${i.price * i.qty}</div>`;
    });

    this.receiptTotal.textContent = "Rp " + r.total;
    this.receiptTime.textContent = r.time;
  },

  renderHistory(receipts) {
    this.historyList.innerHTML = "";

    receipts.forEach((r, index) => {
      this.historyList.innerHTML += `
        <div class="border rounded history-item">
          <div class="meta p-2">
            <div>
              <div class="font-semibold">Nota #${r.number}</div>
              <div class="text-xs text-gray-500">${r.time}</div>
            </div>
            <div class="flex items-center gap-2">
              <div class="font-semibold">Rp ${r.total}</div>
              <div class="history-actions">
                <button class="small-ghost" onclick="toggleHistory(${index})">Detail</button>
                <button class="small-ghost" onclick="viewReceipt(${index})">Buka</button>
                <button class="small-ghost" onclick="deleteReceipt(${index})" style="color:#b91c1c">Hapus</button>
              </div>
            </div>
          </div>

          <div id="history-detail-${index}" class="history-detail hidden px-3 pb-3">
            ${r.items.map(i => `<div>- ${i.name} x ${i.qty} = Rp ${i.price * i.qty}</div>`).join("")}
          </div>
        </div>
      `;
    });
  }
};
