/*
=> Else IF = Digunakan untuk memeriksa kondisi tambahan ketika kondisi sebelumnya-
             pada 'if' bernilai salah(false). Konsepnya bekerja berurutan dari atas-
             kebawah.
             Alurnya seperti ini:
             a. Jadi jika kondisi pertama 'if' benar, maka program akan menjalankan kode-
                dan berhenti mengecek kondisi lainnya.
             b. Jika kondisi pertama 'if' salah, maka program lanjut memeriksa kondisi-
                'else if'.
             c. Jika kondisi 'else if' benar maka kode akan dijalankan.
             d. Jika semua kondisi salah, maka bagian 'else' akan dijalankan sebagai-
                kondisi cadangan terakhir.
*/
console.log("Materi Chapter 18 Else IF");
console.log("");
console.log("No 1. Contoh Else IF:");
let makanan = "Sop Ayam";
console.log(`Penjual: Kamu mau pesan apa broow?\nPembeli: Aku mau pesan ${makanan}`);

if(makanan === "Nasi Goreng") {
    console.log("Kamu sedang pesan Nasi Goreng");
} else if(makanan === "Mie Goreng") {
    console.log("Kamu memesan Mie Gorenggg...");
} else {
    console.log(`Kamu sedang memesan makanan ${makanan}`);
}

console.log("");

/*
=> Switch Case = Digunakan untuk memilih dan menjalankan kode berdasarkan nilai tertentu-
                 yang dibandingkan dengan beberapa kemungkinan kondisi.
                 Konsepnya mirip dengan 'if else', tapi lebih cocok digunakan ketika kita-
                 ingin memeriksa banyak pilihan nilai dari satu variabel sama.
                 Alurnya seperti ini:
                 a. 'switch' akan mengecek sebuah nilai.
                 b. 'case' berisi kemungkinan nilai yang dibandingkan.
                 c. Jika ada 'case' yang cocok, maka kode di dalamnya dijalankan.
                 d. Jika tidak adak yang cocok, maka 'default' akan dijalankan sebagai-
                    kondisi cadangan.
                Pada 'Switch Case', 'break;' digunakan untuk menghentikan pengecekan setelah-
                menemukan 'case' yang cocok, sehingga program tidak lanjut menjalankan 'case'-
                berikutnya. Jadi fungsi utamanya 'break;' adalah untuk menghentikan proses-
                yang sedang berjalan agar program tidak terus melanjutkan eksekusi berikutnya.
*/
console.log("No 2. Contoh Switch Case:")
let minuman = "ES Jeruk";
console.log(`Penjual: Kamu mau pesan minuman apa?\nPembeli: Saya mau pesan minuman ${minuman}`);

switch(minuman) {
    case"ES Jeruk":
        console.log("Kamu sedang pesan minuman ES Jeruk");
        break;
    case"ES Teh":
        console.log("Kamu sedang pesan minuman ES Teh");
        break;
    default:
        console.log(`Kamu sedang pesan minuman ${minuman}`);
};