/* ==========================================================
   CONFIG — file utama yang paling sering kamu edit.
   Ubah isi di sini, tampilan akan ikut berubah otomatis.
   ========================================================== */
const SITE = {
  name: "Bento Kopi",
  foundedYear: 2012,

  // Foto hero. Taruh file di assets/images/ lalu isi nama file-nya.
  // Contoh: "assets/images/hero.jpg". Kosongkan untuk blok warna polos.
  heroImage: "assets/image/katti😒.jpg",

  // WhatsApp: format internasional tanpa + dan 0 di depan. Contoh: "6281234567890"
  whatsapp: "",
  instagram: "",   // contoh: "https://instagram.com/bentokopi"
  email: "",

  hours: "Setiap hari, 10.00 – 23.00 WIB", // [EDIT] sesuaikan jam buka asli

  footer: "© 2026 Bento Kopi. Semua hak dilindungi."
};

/* MENU — CATATAN: ini hanya CONTOH. Ganti dengan menu & harga asli.
   price dalam rupiah (angka saja). Hapus "price" jika tidak ingin menampilkan harga. */
const MENU_NOTE = "Menu dan harga dapat berbeda di tiap outlet.";
const MENU = {
  "Kopi": [
    { 
      name: "Kopi Susu",      
      desc: "Espresso, susu, gula aren", 
      price: 18000,
      image: "assets/image/kopi-susu.jpg"
    },
    { 
      name: "Americano",      
      desc: "Espresso dan air",          
      price: 16000,
      image: "assets/image/americano.jpg"
    }
  ],
  "Non-kopi": [
    { 
      name: "Matcha Latte",   
      desc: "Matcha dan susu",           
      price: 20000,
      image: "assets/image/matcha-latte.jpg"
    }
  ]
};

/* OUTLET — satu baris per outlet. "maps" = link Google Maps outlet (boleh kosong). */
const OUTLETS = [
  { city: "Yogyakarta", name: "Bento Kopi Jakal",       address: "", maps: "" },
  { city: "Yogyakarta", name: "Bento Kopi Godean",      address: "", maps: "" },
  { city: "Yogyakarta", name: "Bento Kopi UMY",         address: "", maps: "" },
  { city: "Yogyakarta", name: "Bento Kopi Maguwoharjo", address: "", maps: "" },
  { city: "Bandung",    name: "Bento Kopi Cibiru",      address: "", maps: "" },
  { city: "Semarang",   name: "Bento Kopi Semarang",    address: "", maps: "" },
  { city: "Klaten",     name: "Bento Kopi Klaten",      address: "", maps: "" },
  { city: "Salatiga",   name: "Bento Kopi Salatiga",    address: "", maps: "" }
];
