// MASTER MENU (fixed)
const MENUS = [
  { id: 1, name: "Burger", price: 2000 },
  { id: 2, name: "Kentang Goreng", price: 3000 },
  { id: 3, name: "Es Teh", price: 2000 },
  { id: 4, name: "Jus Jeruk", price: 4000 }
];

// state
let orders = Storage.getOrders();
let receipts = Storage.getReceipts();
let receiptCounter = Storage.getReceiptCounter();

// init render
UI.renderMenu(MENUS);
UI.renderOrders(orders);
UI.renderHistory(receipts);
UI.renderReceipt(receipts[receipts.length - 1] || null);

// ORDER LOGIC
function addToOrder(id) {
  const menu = MENUS.find(m => m.id === id);
  const exist = orders.find(o => o.id === id);
  if (exist) exist.qty++;
  else orders.push({ ...menu, qty: 1 });

  Storage.saveOrders(orders);
  UI.renderOrders(orders);
}

function updateQty(i, d) {
  orders[i].qty += d;
  if (orders[i].qty <= 0) orders.splice(i, 1);
  Storage.saveOrders(orders);
  UI.renderOrders(orders);
}

function removeOrder(i) {
  orders.splice(i, 1);
  Storage.saveOrders(orders);
  UI.renderOrders(orders);
}

// CHECKOUT
document.getElementById("checkoutBtn").addEventListener("click", () => {
  if (!orders.length) return;

  receiptCounter++;
  const total = orders.reduce((s, o) => s + o.price * o.qty, 0);
  const receipt = {
    number: receiptCounter,
    items: JSON.parse(JSON.stringify(orders)),
    total,
    time: new Date().toLocaleString("id-ID")
  };

  receipts.push(receipt);
  Storage.saveReceipts(receipts);
  Storage.saveReceiptCounter(receiptCounter);

  UI.renderReceipt(receipt);
  UI.renderHistory(receipts);

  // reset orders
  orders = [];
  Storage.saveOrders(orders);
  UI.renderOrders(orders);
});

// view receipt (tampilkan di panel Nota Terakhir)
function viewReceipt(index) {
  const r = receipts[index];
  UI.renderReceipt(r);
}

// toggle detail in history
function toggleHistory(index) {
  const el = document.getElementById(`history-detail-${index}`);
  if (!el) return;
  el.classList.toggle("hidden");
}

/* ========== DELETE RECEIPT via CUSTOM MODAL ========== */
let deleteTargetIndex = null;

function deleteReceipt(index) {
  deleteTargetIndex = index;
  const modal = document.getElementById("deleteModal");
  const label = document.getElementById("deleteNoteLabel");
  label.textContent = `Nota #${receipts[index].number}`;
  modal.classList.remove("hidden");
  modal.classList.add("flex");
}

function closeDeleteModal() {
  const modal = document.getElementById("deleteModal");
  modal.classList.add("hidden");
  modal.classList.remove("flex");
  deleteTargetIndex = null;
}

function confirmDeleteNota() {
  if (deleteTargetIndex === null) return;
  receipts.splice(deleteTargetIndex, 1);
  Storage.saveReceipts(receipts);

  UI.renderHistory(receipts);

  const last = receipts[receipts.length - 1] || null;
  UI.renderReceipt(last);

  closeDeleteModal();
}
