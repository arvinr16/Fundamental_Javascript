/* Ini adalah cara membuat variabel dengan tipe data 'string' 
   (hanya untuk pengingat saja dari Cahpter 5 saja) */
let dataString = "Paijo Dalmoyo";
console.log(dataString);

/* 1. Escaping String = Teknik untuk menghindari konflik karakter-
                        khusus di dalam tipe data String */
/* Pada kasus kita kali ini kita bisa menggunakan salah satu dari dua kutip-
   yaitu kutip satu ('') atau kutip dua ("") sebagai value dari variable tipe-
   data String yang kita punya.
   Kita juga bisa menggunakan backslash (\) seperti ini dibelakan kutip yang kita-
   pakai ketika kita ingin menggunakan kutip yang sama antara value dan penulisan-
   variabel tipe data String kita.
   Contoh benar ada dua yaitu: */
let data1 = 'Paijo berkata "Hello teman2 semuanya"';
let data2 = "Dalijo berkata \"Hello teman2 semuanya\"";
console.log(data1);
console.log(data2);
// Contoh salah:
// 'let data1 = "Paijo berkata "Hello teman2 semuanya"";
/* Kita juga bisa membuat tipe data String new line menggunakan-
   backslash (\) + (n) jadi seperti ini '\n' pada setiap kata atau kalimat-
   yang ingin diberikan new line atau Enter.
   contoh: */
let data3 = "Hello ini effect \nNew Line"
console.log(data3)
/* Kita juga bisa membuat tipe data String dengan effect Tab, jadi kita-
   bisa menambahkan backslash (\) + (t) pada setiap kata atau kalimat-
   yang ingin diberi effect Tab, contoh: 
   contoh: */
let data4 = "Hello ini effect \tTab"
console.log(data4)

console.log("");

/* 2. Literal String (template literal string) = Bentuk khusus Literal String-
                                                 yang menggunakan tanda backtick (``) */
// Contoh salah:
let namaDepan = "Paijo";
let namaBelakang = "Dalmoyo";
let umur = 20;
let namaLengkap = namaDepan + " " + namaBelakang + " " + umur;
console.log(namaLengkap);
/* Kita bisa menggunakan backtick (``) pada saat kita membuat suatu variabel dengan tipe-
   data yang berbeda antar valuenya dan juga kita bisa menggunakan syntax khusus yaitu '${namavariabel}'-
   pada saat kita menggabungkan beberapa variabel yang berbeda tipe datanya pada satu variabel saja. */
// Contoh benar:
let biodata = `${namaDepan} ${namaBelakang} ${umur}`;
console.log(biodata);

console.log("")

// Contoh lain:
let nama = "Paijo"
let usia = 20;
let hasil = `Nama: ${nama} \nUsia: ${usia}`;
console.log(hasil);