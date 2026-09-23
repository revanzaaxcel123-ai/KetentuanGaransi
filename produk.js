/* =====================================================================
   PRODUK.JS — "ENV" VANZSHOP
   =====================================================================
   Cuma file INI yang perlu lo edit buat nambah / ubah produk.
   Gak perlu ngerti coding, cukup ikutin format di bawah.

   FORMAT SATU PRODUK:

     [Nama Produk]
     badge: Teks pill kecil di samping judul      (opsional)
     tag: Hot                                     (opsional, label kecil di list)
     ketentuan:
     - poin ketentuan 1
     - poin ketentuan 2
     garansi:
     - poin garansi 1
     - poin garansi 2

   ATURAN:
   • Nama produk ditulis di dalam [kurung siku], 1 baris.
   • Tiap poin diawali tanda "- " (strip + spasi).
   • Baris kosong bebas, gak ngaruh.
   • Baris diawali "#" = komentar, gak ditampilin.
   • Urutan produk di website otomatis A–Z.
   • Link produk otomatis dari nama, contoh:
       [ChatGPT Premium]  →  garansi.html#chatgpt-premium
   • JANGAN pakai tanda backtick ( ` ) di teks.
   ===================================================================== */

window.VANZ_CONFIG = {
  // Nomor WhatsApp admin, format 62xxxx (tanpa + / 0 di depan)
  whatsapp: "6281234567890",

  // Nama toko (dipakai di footer & judul tab)
  namaToko: "VanzShop.com",

  // Link tombol "Kembali ke Home"
  linkHome: "https://vanzshop.com",

  // Template pesan klaim WA. {produk} otomatis diganti nama produk.
  pesanKlaim:
    "Halo admin VanzShop, saya mau klaim garansi.\n\n" +
    "Produk: {produk}\n" +
    "Email/Username akun: \n" +
    "Tanggal pembelian: \n" +
    "Kendala: \n\n" +
    "(Bukti SS/Video saya lampirkan setelah ini)"
};


window.VANZ_PRODUK = `

[Alight Motion 1 Tahun]
badge: Garansi 1 Tahun
ketentuan:
- Akun hanya digunakan untuk kebutuhan editing pribadi / komersial ringan.
- Dilarang menjual ulang akun tanpa izin.
- Login maksimal pada 2–3 device milik sendiri.
- Tidak digunakan untuk modifikasi ilegal aplikasi.
garansi:
- Garansi 1 tahun akses premium Alight Motion.
- Jika tiba-tiba kembali ke versi free, admin akan bantu perbaikan.
- Tidak ada penggantian jika akun diubah email/password tanpa konfirmasi.
- Garansi tidak menanggung banned dari developer akibat misuse.


[Canva Lifetime]
badge: Garansi 1 Tahun
tag: Best
ketentuan:
- Produk berupa akun Canva resmi (bukan trial / crack).
- Tidak boleh digunakan untuk spam, phising, atau konten melanggar hukum.
- Akun boleh dipakai di beberapa device milik sendiri.
- Dilarang ganti email utama tanpa izin admin.
garansi:
- Garansi login 1 tahun penuh sejak tanggal aktivasi.
- Jika akun logout sendiri / tidak bisa diakses, admin akan ganti akun baru.
- Garansi hangus jika akun dipakai untuk melanggar ToS Canva.
- Tidak ada refund setelah akun berhasil aktif.


[CapCut Pro]
badge: Full Masa Aktif
ketentuan:
- Aktivasi via akun yang disediakan atau akun pribadi (sesuai paket).
- Wajib mengikuti panduan aktivasi yang dikirim admin.
- Pastikan aplikasi CapCut sudah versi terbaru.
- Tidak boleh share akun ke pihak lain di luar 1 rumah tangga.
garansi:
- Garansi full akses tools PRO selama masa aktif paket.
- Jika fitur PRO hilang, akan dibantu aktivasi ulang maksimal 3x.
- Garansi tidak berlaku jika logout akun sendiri tanpa backup.
- Tidak menanggung banned akibat pelanggaran hak cipta.


[ChatGPT Premium]
badge: Sesuai Paket
tag: Hot
ketentuan:
- Hanya untuk keperluan normal (belajar, kerja, bisnis, riset).
- Dilarang spam request untuk aktivitas ilegal / melanggar ToS OpenAI.
- Tidak boleh share akun ke publik / grup besar.
- Wajib menjaga kerahasiaan email & password akun.
garansi:
- Garansi akses ChatGPT Premium sesuai paket yang dibeli.
- Jika akun tiba-tiba suspend tanpa pelanggaran, admin akan bantu cek & ganti.
- Garansi gugur jika digunakan untuk tindakan abuse (spam, cracking, dll).
- Tidak ada refund jika suspend karena pelanggaran kebijakan OpenAI.


[Netflix Premium]
badge: Sesuai Masa Aktif
ketentuan:
- Profil hanya untuk 1 orang, tidak boleh diubah nama akun utama.
- Dilarang mengubah email/password pemilik utama.
- Gunakan maksimal pada jumlah device yang diizinkan paket.
- Pastikan jaringan internet stabil saat streaming.
garansi:
- Garansi nonton sesuai masa aktif paket (7/30 hari, dst).
- Jika profil hilang/tidak bisa masuk, akan diganti akses baru.
- Garansi tidak menanggung kendala dari ISP / blokir regional.
- Tidak ada refund jika diblokir karena penggunaan di luar ketentuan.


[Spotify Premium]
badge: Full Masa Aktif
ketentuan:
- Akun bisa berupa invite ke Family / akun khusus.
- Dilarang ganti email / negara akun tanpa konfirmasi.
- Gunakan hanya di aplikasi resmi Spotify.
- Tidak boleh dijual kembali ke pihak lain.
garansi:
- Garansi full premium selama masa aktif paket.
- Jika kembali ke versi free, akan dibantu aktivasi ulang.
- Garansi hangus jika akun diutak-atik (ganti email/region sembarangan).
- Tidak ada pengembalian dana untuk kendala di luar kontrol (misal kartu ditolak).


# ---- Contoh produk baru, hapus tanda # di depan buat aktifin ----
# [YouTube Premium]
# badge: Garansi 30 Hari
# ketentuan:
# - Akun invite ke Family.
# garansi:
# - Garansi full selama masa aktif.

`;
