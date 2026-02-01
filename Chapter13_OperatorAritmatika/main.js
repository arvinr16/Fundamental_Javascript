// Operator Aritmatika
/* 1. Ekspresi
      Ekspresi adalah potongan kode yang menghasilkan sebuah nilai (value).
      Ciri utama ekspresi:
      a. Selalu bisa dievaluasi
      b. Pasti menghasilkan nilai
      c. Nilainya bisa disimpan ke variabel, ditampilkan, atau digunakan lagi.
      contoh: '5+3', 'harga * jumlah'
   2. Statement
      Statement adalah instruksi atau perintah lengkap yang dijalankan oleh Javascript
      Ciri utama statement:
      a. Melakukan aksi
      b. Tidak selalu menghasilkan nilai
      c. Biasanya diakhiri dengan tanda ; (opsional tapi direkomendasikan)
      contoh: 'let total = harga * jumlah;'
*/
/* Beberapa operator yang bisa dilakukan:
   1. +(tambah), -(kurang), *(perkalian), /(pembagian)

   2. %  = Modulo, digunakan untuk mencari sisa hasil bagi dari dua bilangan.
           Modulo sering digunakan untuk mengecek bilangan ganjil/genap, perulangan-
           (loop).
           contoh: '10%3' = '1'

   3. ++ = Increment, digunakan untuk menambah nilai variabel sebesar 1.
           x++ = Dipakai dulu -> Tambah, nilai yang ditampilkan -> Nilai lama.
           ++x = Tambah dulu -> Dipakai, nilai yang ditampilkan -> Nilai baru.
           contoh: 'x++' setara dengan 'x = x + 1;'

   4. -- = Decrement, digunakan untuk mengurangi nilai variabel sebesar 1.
           x-- = Dipakai dulu -> Kurangi, nilai yang ditampilkan -> Nilai lama.
           --x = Kurang dulu -> Dipakai, nilai yang ditampilkan -> Nilai baru.
           contoh: 'x--' setara dengan 'x = x - 1;'

   5. ** = Pangkat atau Power, digunakan untuk menaikkan bilangan ke pangkat tertentu.
           contoh: '2 ** 3' hasilnya '8'
*/
let x = 10;
let y = 10;
console.log("let x = 10;");
console.log("let y = 10;");
console.log("Operator Penjumlahan (x + 1):");
console.log(x + 1);
console.log("Operator Pengurangan (x - 1):");
console.log(x - 1);
console.log("Operator Perkalian (x * 2):");
console.log(x * 2);
console.log("Operator Pembagian (x / 2):");
console.log(x / 2);
console.log("Aritmatika khusus Javascript");
console.log("Operator Modulo (x % 3):");
console.log(x % 3);
console.log("Operator Pangkat/Power (x ** 2):");
console.log(x ** 2);
console.log("Operator Increment dan Decrement")
console.log("Operator Increment (++x):");
console.log(++x);
console.log("Operator Decrement (--y):");
console.log(--y);

console.log("");
console.log("Contoh pemrograman biasa")

// Pemrograman biasa:
let z = 10;
z = z + 1;
console.log(z);
z = z + 1;
console.log(z);
z++;
console.log(z);

z = z - 1;
console.log(z);
z--;
console.log(z);

console.log("");
console.log("Studi kasus operasi string");

// Studi kasus operasi string
let a = 1 + "1";
console.log(typeof a);
a = 1 + parseInt("1");
console.log(typeof a);