const Storage = {
  getOrders() {
    return JSON.parse(localStorage.getItem("orders")) || [];
  },
  saveOrders(data) {
    localStorage.setItem("orders", JSON.stringify(data));
  },

  getReceipts() {
    return JSON.parse(localStorage.getItem("receipts")) || [];
  },
  saveReceipts(data) {
    localStorage.setItem("receipts", JSON.stringify(data));
  },

  getReceiptCounter() {
    return Number(localStorage.getItem("receiptCounter")) || 0;
  },
  saveReceiptCounter(n) {
    localStorage.setItem("receiptCounter", n);
  }
};
