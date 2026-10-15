# 🌸 Blooming Love Letter

Halaman web interaktif bertema romantis dengan amplop pink dan buket bunga yang mekar serta bergoyang lembut. Saat amplop dibuka, tampil surat romantis penyemangat hari dengan pesan yang tulus dan menghangatkan hati.

Dibuat berdasarkan spesifikasi [PRD_Blooming_Love_Letter.md](./PRD_Blooming_Love_Letter.md).

---

## ✨ Fitur Utama

- **Amplop 3D Interaktif**: Memiliki flap atas yang terlipat dengan segel hati merah muda tua, dapat dibuka dengan klik/ketuk atau keyboard (`Enter` / `Space`).
- **Bunga Mekar & Bergoyang (Blooming & Swaying)**: Dikelilingi ilustrasi floral SVG yang bergerak lembut seolah tertiup angin sepoi-sepoi dengan delay bervariasi.
- **Kelopak & Hati Melayang**: Partikel lembut mengapung di latar belakang untuk memberikan suasana magis dan hangat.
- **Surat Kasih Penyemangat**: Pesan empati default untuk menenangkan pasangan/orang tersayang setelah hari yang panjang dan melelahkan.
- **Buka & Tutup Berulang Kali**: Transisi halus dan aman dari klik ganda (*race condition guarded*).
- **Aksesibilitas & Responsivitas**:
  - Dukungan tombol keyboard (`Enter`, `Space`, `Escape`).
  - Pemulihan fokus keyboard otomatis (*focus management*).
  - `@media (prefers-reduced-motion: reduce)` didukung untuk pengguna yang sensitif terhadap gerakan.
  - Tampilan mulus dan adaptif di desktop, tablet, maupun layar smartphone tanpa *horizontal scrolling*.

---

## 📁 Struktur Berkas

```text
letter/
├── index.html                   # Struktur HTML5 utama dan konten surat
├── README.md                    # Dokumentasi penggunaan dan kustomisasi
├── PRD_Blooming_Love_Letter.md  # Dokumen spesifikasi kebutuhan produk
└── assets/
    ├── css/
    │   └── style.css            # Desain warna, layout responsif, dan keyframe animasi
    ├── js/
    │   └── script.js            # Interaksi buka/tutup, keyboard, dan floating particles
    └── images/                  # Aset gambar tambahan (opsional)
        ├── flowers/
        └── decorations/
```

---

## 🚀 Cara Menjalankan

Cukup buka berkas `index.html` langsung di peramban (browser) modern apa pun (Google Chrome, Firefox, Safari, Microsoft Edge), atau gunakan live server lokal (misalnya ekstensi Live Server di VS Code / editor).

---

## 🎨 Kustomisasi

### 1. Mengubah Isi Pesan Surat
Buka berkas `index.html`, lalu cari bagian `<div class="letter-body-scroll">`. Anda dapat mengganti salam, paragraf pesan, kalimat sorotan, maupun nama tanda tangan dengan kata-kata Anda sendiri.

### 2. Mengubah Palet Warna
Buka berkas `assets/css/style.css`, lalu sesuaikan variabel warna CSS di `:root`:
- `--pink-bg`: Background utama
- `--pink-envelope`: Warna badan amplop
- `--rose`: Warna segel hati dan aksen utama
- `--cream`: Warna kertas surat
- `--lavender`: Warna aksen bunga lavender
- `--sage`: Warna daun
