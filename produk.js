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
  whatsapp: "62895415204928",

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

[Account Basic]
ketentuan:
- Akun bersifat Private
- Tidak termasuk paket Premium
- Gunakan akun secara wajar
- Pastikan data login sesuai saat melakukan login
garansi:
- Garansi berlaku jika akun gagal login
- Wajib menyertakan bukti klaim (SS / video)


[Alight Motion]
badge: Backfree 3 Bulan
ketentuan:
- Akun Private
- Maksimal login 5 Device
- Support All Device
- Gunakan akun secara wajar (hindari login berlebihan)
garansi:
- Garansi Backfree 3 Bulan
- Wajib menyertakan bukti klaim (SS / Video)
- Garansi tidak berlaku jika melanggar S&K


[Apple Music]
badge: Backfree 1 Bulan
ketentuan:
- Akun Private
- Maksimal login 3 Device
- Support Android Device
- Bisa invite 5 user
- Gunakan akun secara wajar (hindari login berlebihan)
garansi:
- Garansi Backfree 1 Bulan
- Wajib menyertakan bukti klaim (SS / Video)
- Garansi tidak berlaku jika melanggar S&K


[Canva]
badge: Backfree 1 Bulan
ketentuan:
- Akun Private
- Maksimal login 3 Device
- Support All Device
- Bisa invite 100 user (Famhead PRO)
- Bisa invite 500 user (Famhead EDU)
- Gunakan akun secara wajar (hindari login berlebihan)
garansi:
- Garansi Backfree 1 Bulan PRO
- Garansi Backfree 3 Bulan EDU
- Wajib menyertakan bukti klaim (SS / Video)
- Garansi tidak berlaku jika melanggar S&K


[CapCut Individual]
badge: Backfree 7 Hari
ketentuan:
- Akun Private
- Maksimal login 2 Device
- Support All Device
- Gunakan akun secara wajar (hindari login berlebihan)
garansi:
- Garansi Backfree 7 Hari
- Wajib menyertakan bukti klaim (SS / Video)
- Garansi tidak berlaku jika melanggar S&K


[CapCut Team]
badge: Backfree 7 Hari
ketentuan:
- Akun Private
- Maksimal login 4 Device
- Support All Device
- Gunakan akun secara wajar (hindari login berlebihan)
garansi:
- Garansi Backfree 7 Hari
- Wajib menyertakan bukti klaim (SS / Video)
- Garansi tidak berlaku jika melanggar S&K


[ChatGPT]
badge: Full Masa Aktif
ketentuan:
- Akun Sharing
- Support All Device
- Gunakan akun secara wajar
- Maksimal ganti device 1x
garansi:
- Garansi Penuh (selama masa aktif)
- Wajib menyertakan bukti klaim (SS / Video)
- Garansi tidak berlaku jika melanggar S&K


[Claude AI]
badge: Full Masa Aktif
ketentuan:
- Akun Sharing
- Support All Device
- Gunakan akun secara wajar
- Maksimal ganti device 1x
garansi:
- Garansi Penuh (selama masa aktif)
- Wajib menyertakan bukti klaim (SS / Video)
- Garansi tidak berlaku jika melanggar S&K


[Discord Nitro]
badge: Link Redeem
ketentuan:
- Produk berupa Link Redeem
- Paket produk: Nitro Boost
- Wajib di-redeem dalam 7x24 Jam setelah diterima
- Pastikan akun tujuan sesuai sebelum redeem
garansi:
- Garansi berlaku jika link error/used
- Wajib menyertakan bukti klaim (SS / Video)
- Garansi tidak berlaku jika melanggar S&K


[Duolingo]
badge: Full Masa Aktif
ketentuan:
- Akun Private
- Maksimal login 3 Device
- Support All Device
- Gunakan akun secara wajar (hindari login berlebihan)
garansi:
- Garansi Penuh (selama masa aktif)
- Wajib menyertakan bukti klaim (SS / Video)
- Garansi tidak berlaku jika melanggar S&K


[GSuite Payment]
ketentuan:
- Akun Fresh
- GSuite x GoPay : Region ID
- GSuite x Paysafe : Region UK
- Support Trial Apps
garansi:
- Garansi Akun Fresh
- Garansi berlaku untuk kendala yang tidak terkait Payment
- Wajib menyertakan bukti klaim (SS / Video)
- Garansi tidak berlaku jika melanggar S&K


[Gemini AI]
badge: Garansi 3x24 Jam
ketentuan:
- Akun Private
- Maksimal login 1 Device
- Support All Device
- Disarankan login pertama kali melalui HP
- Segera ganti data akun setelah diterima
garansi:
- Garansi 3x24 Jam untuk Link Redeem
- Garansi 1x24 Jam untuk Account
- Wajib menyertakan bukti klaim (SS / Video)
- Garansi tidak berlaku jika melanggar S&K


[Getcontact]
badge: Full Masa Aktif
ketentuan:
- Akun Private
- Menggunakan Nomor GTC Sendiri
- Nomor GTC harus sama dengan WhatsApp
- Support All Device
garansi:
- Garansi sesuai masa aktif
- Wajib menyertakan bukti klaim (SS / Video)
- Garansi tidak berlaku jika melanggar S&K


[Gmail Fresh]
badge: Garansi 1x24 Jam
ketentuan:
- Akun Private
- Akun Fresh
- Gmail/Hotmail dibuat secara manual
- Support registrasi, verifikasi, dll
- Support All Device
- Disarankan login pertama kali melalui HP
garansi:
- Garansi 1x24 Jam
- Wajib menyertakan bukti klaim (SS / Video)
- Garansi tidak berlaku jika melanggar S&K


[HBO Max]
badge: Backfree 25 Hari
ketentuan:
- Akun Private
- Maksimal login 3 Device
- Support All Device
- Gunakan akun secara wajar (hindari login berlebihan)
garansi:
- Garansi Backfree 25 Hari
- Wajib menyertakan bukti klaim (SS / Video)
- Garansi tidak berlaku jika melanggar S&K


[IQIYI]
badge: Backfree 25 Hari
ketentuan:
- Akun Private
- Maksimal login 3 Device
- Support All Device
- Gunakan akun secara wajar (hindari login berlebihan)
garansi:
- Garansi Backfree 25 Hari
- Wajib menyertakan bukti klaim (SS / Video)
- Garansi tidak berlaku jika melanggar S&K


[Leonardo AI]
badge: Backfree 25 Hari
ketentuan:
- Akun Private
- Paket Essential
- Token 8.500
- Maksimal login 2 Device
- Support All Device
- Gunakan akun secara wajar (hindari login berlebihan)
garansi:
- Garansi Produk
- Garansi Backfree 25 Hari
- Wajib menyertakan bukti klaim (SS / Video)
- Garansi tidak berlaku jika melanggar S&K


[Microsoft Office 365]
badge: Backfree 25 Hari
ketentuan:
- Akun Private
- Maksimal login 2 Device
- Support All Device
- Gunakan akun secara wajar (hindari login berlebihan)
garansi:
- Garansi Backfree 25 Hari
- Wajib menyertakan bukti klaim (SS / Video)
- Garansi tidak berlaku jika melanggar S&K


[Perplexity AI]
badge: Full Masa Aktif
ketentuan:
- Akun Sharing
- Support All Device
- Gunakan akun secara wajar
- Maksimal ganti device 1x
garansi:
- Garansi Penuh (selama masa aktif)
- Wajib menyertakan bukti klaim (SS / Video)
- Garansi tidak berlaku jika melanggar S&K


[Prime Video]
badge: Backfree 25 Hari
ketentuan:
- Akun Private
- Maksimal login 3 Device
- Support All Device
- Gunakan akun secara wajar (hindari login berlebihan)
garansi:
- Garansi Backfree 25 Hari
- Wajib menyertakan bukti klaim (SS / Video)
- Garansi tidak berlaku jika melanggar S&K


[Scribd]
badge: Backfree 25 Hari
ketentuan:
- Akun Private
- Maksimal login 3 Device
- Support All Device
- Gunakan akun secara wajar (hindari login berlebihan)
garansi:
- Garansi Backfree 25 Hari
- Wajib menyertakan bukti klaim (SS / Video)
- Garansi tidak berlaku jika melanggar S&K


[Spotify Link]
badge: Link Redeem
ketentuan:
- Produk berupa Link Redeem
- Paket produk: Student & H&M
- Wajib di-redeem dalam 7x24 Jam setelah diterima
garansi:
- Garansi berlaku jika link error/used
- Wajib menyertakan bukti klaim (SS / Video)
- Garansi tidak berlaku jika melanggar S&K


[Spotify Premium]
badge: Claim 1x
ketentuan:
- Akun Private
- Masa Aktif 30 & 60 Hari
- Maksimal login 1 Device
- Support All Device
- Gunakan akun secara wajar (hindari login berlebihan)
garansi:
- Garansi Claim 1X
- Wajib menyertakan bukti klaim (SS / Video)
- Garansi tidak berlaku jika melanggar S&K
- Garansi tidak berlaku jika sudah pernah claim 1x


[VPN Express]
badge: Backfree 25 Hari
ketentuan:
- Akun Private
- Maksimal login 5 Device
- Support All Device
- Gunakan akun secara wajar (hindari login berlebihan)
garansi:
- Garansi Backfree 25 Hari
- Wajib menyertakan bukti klaim (SS / Video)
- Garansi tidak berlaku jika melanggar S&K


[VPN HMA]
badge: Backfree 25 Hari
ketentuan:
- Akun Private
- Maksimal login 5 Device
- Support All Device
- Gunakan akun secara wajar (hindari login berlebihan)
garansi:
- Garansi Backfree 25 Hari
- Wajib menyertakan bukti klaim (SS / Video)
- Garansi tidak berlaku jika melanggar S&K


[VPN Surfshark]
badge: Backfree 50 Hari
ketentuan:
- Akun Private
- Maksimal login 3 Device
- Support All Device
- Gunakan akun secara wajar (hindari login berlebihan)
garansi:
- Garansi Backfree 50 Hari
- Wajib menyertakan bukti klaim (SS / Video)
- Garansi tidak berlaku jika melanggar S&K


[VIU]
badge: Backfree 25 Hari
ketentuan:
- Akun Private
- Maksimal login 3 Device
- Support All Device
- Gunakan akun secara wajar (hindari login berlebihan)
garansi:
- Garansi Backfree 25 Hari
- Wajib menyertakan bukti klaim (SS / Video)
- Garansi tidak berlaku jika melanggar S&K


[Wink]
badge: Backfree 5 Hari
ketentuan:
- Akun Private
- Maksimal login 1 Device
- Support Android Device
- Gunakan akun secara wajar (hindari login berlebihan)
garansi:
- Garansi Backfree 5 Hari
- Wajib menyertakan bukti klaim (SS / Video)
- Garansi tidak berlaku jika melanggar S&K


[YouTube Premium]
badge: Backfree 25 Hari
ketentuan:
- Akun Private
- Maksimal login 3 Device
- Support All Device
- Gunakan akun secara wajar (hindari login berlebihan)
garansi:
- Garansi Backfree 25 Hari
- Wajib menyertakan bukti klaim (SS / Video)
- Garansi tidak berlaku jika melanggar S&K


[Zoom]
badge: Full Masa Aktif
ketentuan:
- Akun Private
- Akun 30 Hari (system auto-renew)
- Maksimal login 2 Device
- Support All Device
- Gunakan akun secara wajar (hindari login berlebihan)
garansi:
- Garansi Penuh (sesuai masa aktif)
- Wajib menyertakan bukti klaim (SS / Video)
- Garansi tidak berlaku jika melanggar S&K


[Grok AI]
ketentuan:
- Akun bersifat Private
- Masa aktif 30 Hari
- Dilarang mengganti email akun
- Dilarang mengubah paket akun
- Gunakan akun secara wajar (hindari spam / multi login berlebihan)
garansi:
- Garansi berlaku jika akun backfree & suspend
- Wajib menyertakan bukti klaim (SS / video)
- Garansi tidak berlaku jika melanggar S&K


# ---- Contoh produk baru, hapus tanda # di depan buat aktifin ----
# [Netflix Premium]
# badge: Backfree 25 Hari
# tag: Hot
# ketentuan:
# - Akun Private
# garansi:
# - Garansi Backfree 25 Hari

`;


/* =====================================================================
   🛠️  ALAT IMPORT — ambil data Ketentuan & Garansi dari web lain
   =====================================================================
   Script di bawah SENGAJA dikomentari (gak jalan di web lo).
   Dia cuma disimpen di sini biar gampang dicari lagi.

   CARA PAKAI:
   1. Buka halaman ketentuan sumber di Chrome (laptop/PC).
   2. Tekan F12 → tab "Console".
      (Kalau Chrome minta, ketik: allow pasting  lalu Enter)
   3. Copy semua kode di antara garis ✂️ di bawah, paste ke Console, Enter.
   4. Tunggu sampai muncul "✅ Beres" — hasil otomatis ke-copy.
   5. Paste hasilnya di atas, di dalam window.VANZ_PRODUK = ` ... `
   6. Baca ulang & sesuaikan dengan kebijakan garansi toko lo sendiri.

   Tiap produk tampil di Console dengan jumlah poin, misal:
     ✓ Duolingo (4/3)
   Kalau ada yang (0/0), berarti gak kebaca → isi manual.

✂️ ---------------------------------------------------------------------

(async () => {
  const sleep = ms => new Promise(r => setTimeout(r, ms));
  const norm = s => (s || "").replace(/\s+/g, " ").trim();
  const isLeaf = el => el.children.length === 0 && !/^(SCRIPT|STYLE|NOSCRIPT|TEMPLATE|svg|path)$/i.test(el.tagName);
  const scrollable = el => el !== document.body && el !== document.documentElement &&
    /(auto|scroll)/.test(getComputedStyle(el).overflowY) && el.scrollHeight > el.clientHeight + 5 &&
    el.clientHeight < innerHeight * 0.9;

  // 1. Cari label "PRODUK", lalu kotak scroll terdekat di bawahnya
  const label = [...document.querySelectorAll("body *")]
    .find(el => isLeaf(el) && norm(el.textContent).toUpperCase() === "PRODUK");
  let box = null;
  for (let node = label; node && !box; node = node.parentElement) {
    box = [...node.querySelectorAll("*")].find(scrollable);
  }
  if (!box) box = [...document.querySelectorAll("body *")].filter(scrollable)
    .sort((a, b) => b.children.length - a.children.length)[0];
  if (!box) return console.error("❌ List produk gak ketemu");

  // 2. Ambil nama produk (teks pendek, unik) di dalam kotak itu aja
  const seen = new Set();
  const items = [...box.querySelectorAll("*")].filter(el => {
    const t = norm(el.textContent);
    if (!isLeaf(el) || !t || t.length > 60 || seen.has(t)) return false;
    seen.add(t); return true;
  }).map(el => el.closest("button,a,li,[role=option]") || el);
  console.log(`🔎 Ketemu ${items.length} produk`);

  // 3. Ambil isi list setelah label KETENTUAN / GARANSI
  const grab = lbl => {
    const h = [...document.querySelectorAll("body *")]
      .find(el => isLeaf(el) && !box.contains(el) && norm(el.textContent).toUpperCase() === lbl);
    if (!h) return [];
    for (let node = h, up = 0; node && up < 3; node = node.parentElement, up++) {
      for (let n = node.nextElementSibling; n; n = n.nextElementSibling) {
        const ul = /^(UL|OL)$/.test(n.tagName) ? n : n.querySelector("ul,ol");
        if (ul) return [...ul.querySelectorAll("li")].map(li => norm(li.textContent));
      }
    }
    return [];
  };

  // 4. Klik satu-satu & susun format produk.js
  let out = "", gagal = [];
  for (const el of items) {
    const name = norm(el.textContent);
    el.click();
    await sleep(400);
    const k = grab("KETENTUAN"), g = grab("GARANSI");
    if (!k.length && !g.length) gagal.push(name);
    out += `[${name}]\nketentuan:\n${k.map(x => "- " + x).join("\n")}\ngaransi:\n${g.map(x => "- " + x).join("\n")}\n\n`;
    console.log("✓", name, `(${k.length}/${g.length})`);
  }

  try { copy(out); } catch { await navigator.clipboard.writeText(out).catch(() => {}); }
  console.log(out);
  console.log(`✅ Beres, ${items.length} produk udah kecopy ke clipboard`);
  if (gagal.length) console.warn("⚠️ Gak kebaca, isi manual:", gagal.join(", "));
})();

✂️ ---------------------------------------------------------------------
   ===================================================================== */
