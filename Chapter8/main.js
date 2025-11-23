/* DOM = Document Object Model (DOM) adalah representasi struktur dokumen HTML dalam-
         bentuk objek yang bisa diakses dan dimanipulasi menggunakan Javascript.
         Sederhananya DOM adalah jembatan antara Javascript dengan halaman web/HTML.
         DOM memungkinkan Javascript untuk:
         1. Mengubah teks, warna, dan gambar.
         2. Menambah atau menghapus elemen HTML.
         3. Mengontrol even (click, input, hover, dll).
         4. Membuat halaman web dinamis dan interaktif.
         Dalam Javascript, semua yang terkait dengan DOM dimulai dengan objek 'document'.

         * DOM bukan bagian dari Javascript, DOM adalah Web API (Application Programming Interface)-
         yang disediakan oleh browser, Javascript hanya menggunakan API tersebut. 
         Karena itu DOM tidak bisa digunakan di lingkungan non-browser seperti Node.js, kecuali-
         pakai library.

         * Penjelasan ada di bawah dokumen.
         */

// Latihan:
let nama_depan, nama_belakang, nama_lengkap;

document.getElementById("button_merge").onclick = function() {
    nama_depan = document.getElementById("nama_depan").value;
    nama_belakang = document.getElementById("nama_belakang").value;
    nama_lengkap = nama_depan + " " + nama_belakang;
    console.log(nama_lengkap);

    document.getElementById("nama_lengkap").textContent = nama_lengkap;
};

/* 
Penjelasan:
1. 'document'       = Akar dari DOM (Document Object Model) dalam Javascript.
2. 'getElementById' = Mengambil elemen HTML berdasarkan IDnya.
3. 'onclick'        = Digunakan untuk menjalankan kode ketika suatu elemen diklik.
4. 'value'          = Digunakan untuk mengambil atau mengubah nilai yang berada di-
                      dalam element seperti 'input', 'textarea', 'select'.
5. 'alert'          = Digunakan untuk menampilkan popup berisi pesan di browser.
6. 'textContent'    = Digunakan untuk mengambil dan mengubah teks murni dari suatu-
                      elemen.
*/