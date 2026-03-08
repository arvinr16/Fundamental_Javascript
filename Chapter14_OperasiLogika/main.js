// Operator Logika
/* Javascript memiliki 3 Operator Logika utama, yaitu:
   1. '!'(NOT)  = Membalik nilai. Jika True jadi False, jika False jadi True.
   2. '||'(OR)  = Menghasilkan True jika minimal satu nilai bernilai True.
   3. '&&'(AND) = Menghasilkan True hanya jika kedua nilai bernilai True.
*/

// 1. NOT (Operasi dengan menggunakan satu buah tipe data Boolean)
console.log("Operasi Logika '!'(NOT):");
let data = true;
console.log(`!true = ${!data}`);
console.log(`!false = ${data}`); // Flip data Boolean
console.log(`!0 = ${!0}`);
console.log(`!1 = ${!1}`);

console.log("");

// 2. OR (Operasi dengan menggunakan dua buah tipa data Boolean)
console.log("Operasi Logika '||'(OR)");
/* Operasi logika OR menggunakan tanda '||'(pipe)
   Logika:
   A. True || True = True
   B. True || False = True
   C. False || True = True
   D. False || False = False
*/
// Contoh:
console.log(`True || True = ${true || true}`);
console.log(`True || False = ${true || false}`);
console.log(`False || True = ${false || true}`);
console.log(`False || False = ${false || false}`);
// Pengaplikasian:
console.log("Pengaplikasian Operasi Logika OR:");
let baca = true;
let menulis = false;
console.log(`Sudah Baca? = ${baca}`);
console.log(`Sudah Menulis? = ${menulis}`);
let dianggap_belajar = baca || menulis;
console.log(
  `Kalau sudah baca atau menulis, maka anda sudah dianggap belajar = ${dianggap_belajar}`,
);

console.log("");

// 3. AND (Operasi dengan menggunakan dua buah tipe data Boolean)
console.log("Operasi Logika '&&'(AND)");
/* Operasi logika AND menggunakan tanda '&&'
   Logika:
   A. True && True = True
   B. True && False = False
   C. False && True = False
   D. False && False = False
*/
// Contoh:
console.log(`True && True = ${true && true}`);
console.log(`True && False = ${true && false}`);
console.log(`False && True = ${false && true}`);
console.log(`False && False = ${false && false}`);
// Pengaplikasian:
console.log("Pengaplikasian Operasi Logika AND:");
baca = true;
menulis = true;
console.log(`Sudah Baca? = ${baca}`);
console.log(`Sudah Menulis? = ${menulis}`);
let beneran_belajar = baca && menulis;
console.log(
  `Kalau sudah membaca dan menulis, maka anda benar-benar sudah belajar = ${beneran_belajar}`,
);
