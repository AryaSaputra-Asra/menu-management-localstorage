# Sistem Pemesanan Menu Makanan (Local Storage)

Aplikasi web client-side untuk demo sistem pemesanan sederhana:
- Menu sudah tersedia (fixed)
- Pelanggan pilih menu → masuk pesanan
- Kasir dapat menambah/kurangi qty, checkout
- Checkout menyimpan nota (dengan nomor) ke Local Storage
- Riwayat nota disimpan, bisa dibuka detailnya, atau dihapus

## Struktur
menu-management/
├── index.html
├── README.md
└── assets/
├── css/
│ └── app.css
└── js/
├── storage.js
├── ui.js
└── app.js

## Cara pakai
1. Buka folder project di VS Code.
2. Jalankan Live Server atau buka `index.html` di browser.
3. Klik `Pesan` pada daftar menu → cek Pesanan Aktif.
4. Atur qty dengan tombol + / - lalu `Checkout (Kasir)`.
5. Nota otomatis tersimpan di Riwayat; klik `Buka` untuk melihat nota lengkap.
6. Untuk menghapus nota, klik `Hapus` → konfirmasi modal.

## Catatan teknis
- Semua data disimpan di Local Storage browser:
  - `orders` (pesanan sementara)
  - `receipts` (riwayat nota)
  - `receiptCounter` (nomor nota)
- Styling: Tailwind CDN + sedikit custom CSS di `assets/css/app.css`.
- Mudah dikembangkan: export JSON, filter tanggal, print, dsb.

## Cara reset data (jika perlu)
Buka DevTools → Application → Local Storage → hapus keys: `orders`, `receipts`, `receiptCounter`.