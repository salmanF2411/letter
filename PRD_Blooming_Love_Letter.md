# PRD — Blooming Love Letter
## Landing Page Amplop Romantis dengan Animasi Bunga

**Versi:** 1.0  
**Jenis produk:** Mini interactive webpage / single-page experience  
**Bahasa:** Indonesia  
**Teknologi:** HTML5, CSS3, Bootstrap 5, JavaScript vanilla  
**Target perangkat:** Desktop, tablet, dan smartphone

---

## 1. Ringkasan Produk

**Blooming Love Letter** adalah halaman web interaktif bertema romantis. Di tengah halaman terdapat amplop berwarna pink yang dikelilingi bunga-bunga, dedaunan, hati, dan kelopak dekoratif. Bunga bergerak lembut seolah tertiup angin. Ketika amplop diklik atau diketuk, flap amplop terbuka dan surat muncul melalui animasi halus.

Isi surat berupa pesan romantis yang menyemangati penerima karena berhasil melewati hari ini meskipun banyak hal yang melelahkan atau membuat bete. Pengalaman harus terasa manis, hangat, dan personal tanpa membuat halaman terlalu ramai.

## 2. Tujuan

1. Menyampaikan pesan cinta dan dukungan emosional.
2. Membuat pengalaman membuka surat terasa spesial melalui animasi.
3. Menggunakan warna pink sebagai identitas visual utama.
4. Memastikan halaman sederhana, responsif, dan mudah dijalankan secara lokal.
5. Membuat konten surat dan warna mudah diubah.

## 3. Target Pengguna

### Penerima
Seseorang yang membuka halaman untuk membaca pesan romantis penyemangat.

### Pembuat
Orang yang membuat kejutan digital untuk pasangan atau orang tersayang.

### Kebutuhan utama
- Mengetahui bahwa amplop dapat diklik.
- Menikmati animasi yang lembut dan lucu.
- Membaca pesan dengan nyaman di ponsel maupun desktop.
- Bisa menutup surat dan membukanya kembali.

## 4. Ruang Lingkup

### Termasuk
- Satu halaman interaktif.
- Background pink pastel.
- Amplop pink dengan flap dan segel hati.
- Bunga mengelilingi amplop.
- Animasi bunga bergoyang dan mekar.
- Animasi kelopak/hati melayang secara terbatas.
- Animasi membuka amplop dan menampilkan surat.
- Pesan romantis penyemangat.
- Tombol tutup dan buka kembali.
- Responsivitas dan aksesibilitas dasar.
- Dukungan `prefers-reduced-motion`.

### Tidak termasuk
- Backend atau database.
- Login/registrasi.
- Pengiriman surat melalui email atau WhatsApp.
- Editor pesan pada halaman.
- Musik otomatis.
- Akun pengguna atau sistem komentar.

## 5. Teknologi

### HTML5
Struktur semantik untuk judul, scene, amplop, surat, pesan, dan tombol.

### CSS3
Tema visual, layout, ilustrasi amplop dan bunga, efek bayangan, hover state, animasi, dan responsive styling.

### Bootstrap 5
Membantu layout responsif, container, spacing, dan komponen dasar. Identitas visual dan animasi utama tetap menggunakan custom CSS. Gunakan Bootstrap 5 secara konsisten dan jangan mencampur class Bootstrap 4 atau Tailwind.

### JavaScript vanilla
Mengatur status amplop, membuka/menutup surat, mencegah klik berulang ketika animasi berlangsung, serta mendukung keyboard.

Tidak diperlukan framework JavaScript tambahan.

## 6. Konsep UI/UX

**Konsep:** Cute Romantic Floral / Blooming Love Letter  
**Kesan:** romantis, manis, hangat, dreamy, menenangkan, dan lucu.

### Elemen visual
- Amplop di tengah sebagai fokus utama.
- Segel hati di bagian flap.
- Bunga pink/cream/lavender dan daun hijau lembut di sekelilingnya.
- Beberapa hati atau kelopak kecil sebagai aksen.
- Background gradasi pink ke cream.
- Surat berwarna putih susu dengan teks gelap agar mudah dibaca.
- Bayangan lembut dan sudut membulat.
- Dekorasi tidak boleh menutupi surat atau tombol.

### 6.1 Palet warna

| Token | Hex | Penggunaan |
|---|---|---|
| `--pink-bg` | `#FFF0F5` | Background utama |
| `--pink-soft` | `#FFD8E7` | Panel/dekorasi |
| `--pink-envelope` | `#F4A7C5` | Badan amplop |
| `--pink-dark` | `#D85F93` | Tombol dan aksen utama |
| `--rose` | `#C94F7C` | Segel hati dan teks aksen |
| `--cream` | `#FFF9F0` | Permukaan surat |
| `--white` | `#FFFFFF` | Highlight dan card |
| `--lavender` | `#E7DDF7` | Aksen bunga |
| `--sage` | `#BFD8B5` | Daun |
| `--text` | `#593847` | Teks utama |
| `--text-muted` | `#856B78` | Teks sekunder |

Pink dan putih menjadi warna dominan. Gunakan pink tua untuk tombol dan link agar kontras lebih baik. Jangan menggunakan pink pucat untuk teks kecil di atas putih.

### 6.2 Tipografi
- Heading: Nunito atau Quicksand dengan bobot tebal.
- Isi surat: Nunito atau Georgia sebagai alternatif bergaya surat.
- Ukuran isi harus nyaman untuk dibaca; gunakan line-height sekitar 1.6–1.8.
- Teks dan tombol perlu memiliki jarak yang cukup.

## 7. Struktur Halaman

### 7.1 Intro
Konten contoh:
- Label kecil: `a little letter for you ♡`
- Heading: **Untuk kamu yang sudah hebat hari ini**
- Deskripsi: `Ada pesan kecil yang ingin disampaikan...`
- Instruksi: `Klik amplopnya untuk membuka surat ♡`

Heading perlu cukup ringkas agar amplop masih terlihat pada layar mobile.

### 7.2 Scene amplop dan bunga
Amplop berada di tengah dengan flap, segel hati, serta surat tersembunyi di dalamnya. Bunga membingkai amplop dari sisi kiri, kanan, dan bawah. Elemen dekoratif harus memakai `pointer-events: none` jika berpotensi menutupi area klik.

Pada desktop, gunakan komposisi lebih lebar. Pada mobile, kurangi ukuran dan jumlah ornamen, tetapi jangan menghilangkan fokus amplop.

### 7.3 Surat romantis
Saat amplop terbuka:
1. Segel hati mengecil atau memudar.
2. Flap amplop berputar ke atas.
3. Surat bergerak naik dari amplop.
4. Surat muncul di lapisan depan dengan teks lengkap.
5. Tombol `Tutup surat` tampil.

**Pesan default:**

> Hai, sayangku ♡
>
> Kalau hari ini terasa melelahkan, sini istirahat sebentar, ya.
>
> Aku tahu mungkin ada banyak hal yang bikin kamu bete, capek, atau ingin menghela napas panjang. Tapi lihat kamu—kamu berhasil melewati hari ini. Kamu tetap bertahan, menjalani satu per satu hal yang datang, dan sampai juga di penghujung hari.
>
> Aku bangga sama kamu. Kamu nggak harus selalu kuat setiap saat, nggak harus selalu tersenyum, dan nggak harus menyelesaikan semuanya dengan sempurna. Kalau hari ini rasanya berantakan, itu nggak mengurangi hebatnya kamu sedikit pun.
>
> Sekarang, tarik napas pelan-pelan. Lepaskan dulu hal-hal yang bikin kepala penuh. Kamu pantas mendapatkan waktu untuk istirahat, merasa tenang, dan disayang.
>
> Terima kasih sudah berusaha sejauh ini. Besok boleh dicoba lagi, pelan-pelan saja. Untuk malam ini, cukup ingat satu hal: kamu sudah melakukan yang kamu bisa, dan itu berarti.
>
> Kalau aku bisa, aku ingin kasih kamu pelukan hangat, kecupan di kening, dan bilang langsung kalau kamu nggak sendirian.
>
> Aku sayang kamu—di hari yang menyenangkan, di hari yang melelahkan, dan bahkan di hari ketika semuanya terasa menyebalkan. ♡
>
> **Istirahat yang nyaman, kesayanganku. Kamu sudah hebat hari ini.**
>
> Dengan cinta,  
> seseorang yang selalu mendukungmu ♡

Nama penerima dan tanda tangan dapat diganti melalui HTML. Jangan menyatakan pesan terkirim ke pihak lain; pesan hanya ditampilkan di halaman.

### 7.4 Kontrol
- Saat amplop tertutup: amplop dapat diklik/tap atau tombol `Buka surat ♡` dapat digunakan.
- Saat terbuka: tampil tombol `Tutup surat`.
- Setelah ditutup, pengguna dapat membuka surat kembali.

### 7.5 Footer opsional
`dibuat dengan banyak cinta dan bunga kecil ♡`

## 8. User Flow

1. Pengunjung membuka halaman.
2. Melihat heading singkat dan amplop yang dikelilingi bunga.
3. Membaca instruksi untuk membuka amplop.
4. Mengeklik atau mengetuk amplop.
5. Flap terbuka dan surat bergerak naik.
6. Pengunjung membaca pesan.
7. Pengunjung menutup surat bila diinginkan.
8. Pengunjung dapat membuka surat kembali.

## 9. Fitur Interaktif

| ID | Fitur | Perilaku yang diharapkan | Prioritas |
|---|---|---|---|
| INT-01 | Buka amplop | Klik/tap membuka flap dan memperlihatkan surat | Wajib |
| INT-02 | Tutup surat | Surat tertutup dan amplop kembali ke keadaan awal | Wajib |
| INT-03 | Buka kembali | Surat dapat dibuka lagi | Wajib |
| INT-04 | Flap animation | Flap berputar menggunakan CSS transform | Wajib |
| INT-05 | Letter reveal | Surat naik dan muncul perlahan | Wajib |
| INT-06 | Flower sway | Bunga bergoyang lembut | Wajib |
| INT-07 | Bloom | Bunga membesar sedikit seolah mekar | Wajib |
| INT-08 | Floating petals/hearts | Ornamen melayang dengan jumlah terbatas | Opsional |
| INT-09 | Keyboard support | Enter/Space membuka kontrol amplop saat difokuskan | Wajib |
| INT-10 | Reduced motion | Gerakan dikurangi sesuai preferensi pengguna | Wajib |

JavaScript harus menghindari klik berulang selama transisi apabila dapat membuat status animasi tidak konsisten.

## 10. Spesifikasi Animasi

### Bunga
- Goyang dengan rotasi kecil.
- Durasi sekitar 2–4 detik.
- Bunga menggunakan delay berbeda agar tidak bergerak serempak.
- Efek mekar memakai perubahan scale kecil.
- Animasi dekoratif tidak menggeser layout.

### Kelopak/hati
- Bergerak perlahan ke atas atau menyamping.
- Jumlah dibatasi agar tidak mengganggu.
- Tidak boleh menutupi tombol dan amplop.

### Membuka surat
- Segel hati memudar.
- Flap terbuka.
- Surat naik dari amplop.
- Surat muncul dengan transisi opacity.
- Fokus keyboard dipindahkan secara wajar ke isi surat atau judulnya.

### Menutup surat
- Surat turun atau memudar.
- Flap kembali ke posisi awal.
- Segel hati muncul kembali.
- Kontrol diaktifkan setelah transisi selesai.

### Batasan animasi
- Hindari efek berkedip/flash.
- Hindari gerakan besar yang terus-menerus.
- Hormati `prefers-reduced-motion: reduce`.
- Isi surat harus tetap dapat dibaca meskipun animasi dimatikan.

## 11. Responsivitas

### Desktop
- Amplop berada di tengah.
- Bunga membentuk bingkai floral.
- Surat memiliki lebar terbatas agar nyaman dibaca.

### Tablet
- Ukuran bunga dan jarak dekorasi disesuaikan.
- Surat tidak bertabrakan dengan ornamen.

### Mobile
- Layout satu kolom.
- Dekorasi sisi diperkecil.
- Amplop tetap menjadi elemen yang paling menonjol dan mudah disentuh.
- Surat dapat di-scroll jika tinggi konten melebihi viewport.
- Tombol tidak terlalu dekat ke tepi layar.
- Tidak boleh ada horizontal scrolling.

## 12. Aksesibilitas

1. Amplop dibuat sebagai `<button>` atau kontrol yang dapat menerima fokus keyboard.
2. Berikan label yang jelas seperti `Buka surat` dan `Tutup surat`.
3. Ornamen yang tidak informatif memakai `aria-hidden="true"` atau tidak diekspos pada pembaca layar.
4. Gambar konten mempunyai teks alternatif yang bermakna.
5. Focus indicator terlihat jelas.
6. Kontras teks memadai.
7. Dukungan keyboard harus tersedia.
8. Hormati `prefers-reduced-motion`.
9. Jangan memutar musik otomatis.
10. Fokus dipulihkan ke kontrol amplop setelah surat ditutup.

## 13. Struktur Folder

```text
blooming-love-letter/
├── index.html
├── README.md
└── assets/
    ├── css/
    │   └── style.css
    ├── js/
    │   └── script.js
    └── images/
        ├── flowers/
        └── decorations/
```

- `index.html`: struktur halaman dan konten.
- `style.css`: warna, layout, amplop, bunga, surat, responsivitas, dan animasi.
- `script.js`: status buka/tutup surat dan interaksi keyboard.
- `images/`: aset opsional. Ilustrasi juga dapat dibuat dengan CSS/SVG.

## 14. Kualitas dan Pemeliharaan

### Performa
- Utamakan animasi `transform` dan `opacity`.
- Hindari library animasi berat.
- Optimalkan gambar.
- Batasi jumlah elemen yang terus bergerak.

### Kompatibilitas
- Mendukung browser modern desktop dan mobile.
- Tidak perlu instalasi khusus selain browser.

### Keandalan
- Tampilan awal tetap terlihat jika JavaScript gagal.
- Klik berulang tidak merusak status amplop.
- Isi surat tetap terbaca di layar kecil.
- Semua tombol yang tampak interaktif benar-benar berfungsi.

### Kustomisasi
- Pesan dan sapaan mudah diedit di HTML.
- Warna dapat disesuaikan melalui CSS custom properties.
- Ukuran dekorasi dapat diubah melalui CSS.

## 15. Kriteria Penerimaan

### Tampilan
- [ ] Pink pastel menjadi warna dominan.
- [ ] Amplop berada di fokus utama dan dikelilingi bunga.
- [ ] Instruksi membuka amplop terlihat jelas.
- [ ] Dekorasi lucu tetapi tidak membuat halaman berantakan.

### Animasi bunga
- [ ] Bunga bergoyang atau mekar secara lembut.
- [ ] Animasi tidak menghalangi klik.
- [ ] Tidak ada kedipan cepat.

### Interaksi surat
- [ ] Klik/tap membuka flap dan menampilkan surat.
- [ ] Pesan tampil lengkap dan bisa dibaca.
- [ ] Tombol `Tutup surat` bekerja.
- [ ] Surat dapat dibuka kembali.
- [ ] Klik ganda selama transisi tidak merusak state.

### Isi pesan
- [ ] Pesan menyatakan bahwa penerima berhasil melewati hari ini.
- [ ] Pesan mengakui hari yang melelahkan atau menyebalkan.
- [ ] Pesan memberi dukungan tanpa menuntut penerima selalu kuat.
- [ ] Pesan berisi apresiasi, cinta, dan ajakan beristirahat.

### Responsivitas dan aksesibilitas
- [ ] Tidak ada horizontal scrolling di mobile.
- [ ] Surat dapat di-scroll jika terlalu tinggi.
- [ ] Kontrol dapat digunakan dengan keyboard.
- [ ] Focus state terlihat dan reduced motion dihormati.
- [ ] Teks memiliki kontras yang baik.

### Implementasi
- [ ] Menggunakan HTML5, CSS3, Bootstrap 5, dan JavaScript vanilla.
- [ ] File HTML, CSS, dan JavaScript dipisahkan.
- [ ] Tidak membutuhkan backend/database.
- [ ] Tidak ada error JavaScript yang menghalangi fitur utama.

## 16. Tahapan Implementasi

### Tahap 1 — Kerangka
1. Buat `index.html`.
2. Hubungkan Bootstrap 5.
3. Buat `style.css` dan `script.js`.

### Tahap 2 — Visual
1. Background pink.
2. Amplop dan flap.
3. Bunga, daun, dan segel hati.
4. Surat berisi pesan default.
5. Dekorasi tambahan.

### Tahap 3 — Animasi dan interaksi
1. Animasi bunga.
2. Animasi flap terbuka.
3. Surat muncul dari amplop.
4. Tombol tutup dan buka kembali.
5. Dukungan keyboard dan reduced motion.

### Tahap 4 — Pengujian
1. Uji desktop, tablet, dan mobile.
2. Uji buka/tutup berulang.
3. Uji keyboard.
4. Uji reduced motion.
5. Periksa keterbacaan isi surat dan posisi dekorasi.

## 17. Definisi Selesai

Landing page dianggap selesai ketika pengunjung dapat melihat amplop pink yang dikelilingi bunga-bunga bergerak lembut, membuka amplop dengan klik/tap, membaca surat romantis penyemangat, lalu menutup dan membukanya kembali. Halaman harus tetap nyaman digunakan di desktop maupun smartphone.

**Arah akhir:** sebuah kejutan romantis digital yang terasa seperti menerima surat cinta kecil di taman bunga pink—dengan animasi yang lembut, pesan yang tulus, dan pengingat bahwa penerima sudah berjuang dengan baik hari ini serta layak beristirahat dan disayangi.
