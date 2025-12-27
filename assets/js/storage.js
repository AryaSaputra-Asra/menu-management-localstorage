const Storage = {
  key: "menus",

  get() {
    return JSON.parse(localStorage.getItem(this.key)) || [];
  },

  save(data) {
    localStorage.setItem(this.key, JSON.stringify(data));
  }
};
