/* Pada Chapter 9 kali ini, kita akan mempelajari tipe data Number.
   Javascript memiliki dua tipe data numerik, yaitu Number dan BigInt.
   Tipe Number digunakan untuk merepresentasikan bilangan bulat maupun-
   bilangan pecahan, sedangkan BigInt digunakan untuk bilangan bulat-
   yang berukuran sangat besar. Dari semua jenis tipe data numerik-
   tersebut, semuanya bisa menggunakan nilai bilangan positif dan negatif.
   Number - 64-bit.
*/

/* 1. Tipe data number Integer
      Integer = Nilai bilangan bulat seperti 0, 1, 2, -1, -2, dst.
                Dalam Javascript, bilangan Integer tidak memiliki tipe data-
                khusus, melainkan direpresentasikan menggunakan tipe data-
                Number, yang juga digunakan untuk menyimpan bilangan Decimal/Pecahan.
                Oleh karena itu, bilangan Integer/Bulat di Javascript hanya dapat-
                disimpan secara akurat hingga batas tertentu.
*/
let nilai_integer = 16;
console.log(typeof nilai_integer);

console.log("");

/* 2. Tipe data number Float
      Float = Nilai bilangan desimal seperti 1.1, 2.1, -1.1, -2.1, dst.
              Di Javascript, bilangan Float/Pecahan juga disimpan menggunakan-
              tipe data Number, karena Javascript tidak membedakan antara bilangan-
              Integer/Bulat dengan bilangan Float/Pecahan dalam tipe datanya.
              Akibatnya, perhitungan bilangan Float/Pecahan dapat mengalami ketidak-
              tepatan kecil karena cara penyimpanan floating-point.
              Floating-point adalah cara komputer menyimpan angka yang punya koma,-
              dimana posisi komanya bisa berpindah-pindah sesuai dengan besar-
              kecilnya angka.
*/
let nilai_float = 1.618;
console.log(typeof nilai_float);

console.log("");

/* 3. Tipe data number Big Integer
      Big Integer = Bilangan bulat dengan ukuran sangat besar yang melebihi-
                    batas aman tipe data Number. Javascript menyediakan tipa-
                    data khusus bernama BigInt untuk menyimpan bilangan bulat-
                    besar secara akurat, namun tipe data ini hanya dapat digunakan-
                    untuk bilangan bulat dan tidak mendukung bilangan desimal.
*/
let nilai_bigInt = 10000n;
console.log(typeof nilai_bigInt);

console.log("1. Merubah nilai Desimal menjadi Integer");

// Bagaimana cara menggunakan data ini?
/* 1. Kita bisa mengubah variabel dengan nilai Desimal menjadi-
   bernilai Integer seperti berikut:
*/
let angka = 1.618;
let angka_int = parseInt(angka);
console.log(angka_int);
/* parseInt = Fungsi bawaan (built-in global function) dalam Javascript-
              yang digunakan untuk mengonversi string menjadi bilangan-
              bulat. parseInt mengubah number desimal menjadi string dulu-
              lalu dia membaca dari kiri, dan berhenti setelah ketemu karakter-
              non angka yaitu (.) atau koma, dan nantinya dia akan mengeluarkan-
              output angka yang integer/bulat saja, tidak beserta angka dibelakang-
              koma.
*/

console.log("2. Merubah nilai Integer menjadi Desimal");

/* 2. Kita bisa mengubah variabel dengan nilai Integer menjadi-
      bernilai Desimal/Float seperti berikut:
*/
let angka_2 = 10;
let angka_des = parseFloat(angka_2);
console.log(angka_des);
/* parseFloat = Fungsi global bawaan Javascript yang digunakan untuk mem-parsing-
                string dan mengonversinya menjadi bilangan pecahan (floating-point number).
*/

console.log("3. Merubah String menjadi Integer");

/* 3. Merubah String
*/
let data_1 = "1.618" + 10;
console.log(data_1);
console.log(parseInt(data_1) + 10);
console.log(parseFloat(data_1) + 10);
let data_2 = "1.618 halo ini adalah angka golden rasio";
console.log(data_2);
console.log(parseInt(data_2));
console.log(parseFloat(data_2));
let data_3 = "halo ini adalah angka golden rasio 1.618";
console.log(data_3);
console.log(parseInt(data_3));
/* Kalau kita memparsing String menjadi Integer harus dengan teliti,-
   dikarenakan kalau kita menaruh data string dulu di variabel, browser akan-
   membaca nilai dari vriabel tersebut itu NaN atau Not a Number. Jadi ketika-
   kita ingin memparsing String ke Integer, kita dahulukan nilai Number dulu-
   baru setelah itu nilai Stringnya.
*/

console.log("4. Contoh");

// 4. Contoh
// Contoh salah:
console.log("Contoh salah:")
let biaya_1 = "10000";
let pajak_1 = 1300;
let bayar_1 = biaya_1 + pajak_1;
console.log(bayar_1);
// Contoh benar:
console.log("Contoh benar:");
let biaya_2 = "10000";
let pajak_2 = 1300;
let bayar_2 = parseInt(biaya_2) + pajak_2;
console.log(bayar_2);
/* Ketika kita ingin menjumlahkan atau melakukan operasi aritmatika-
   pada suatu nilai pada variabel, kita harus memastikan terlebih dahulu,-
   nilainya itu sama-sama tipe data Number atau ada salah satu yang berbeda.
   Ketika ada salah satu nilai pada variabel yang berbeda tipe datanya, misal-
   ada yang menggunakan tipe data String, maka kita bisa menggunakan fungsi-
   bawaan Javascript tadi yaitu parseInt ataupun parseFloat.
*/