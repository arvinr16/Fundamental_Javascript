/* Boolean = Tipe data yang hanya memiliki dua nilai kemungkinan yaitu True(bernilai benar)-
             dan False(bernilai salah). Tipe data ini biasanya dipakai untuk Pengambilan-
             keputusan, Logika program, Pengecekan suatu keadaan, seperti contoh saklar-
             lampu yang cuma ada ON(True) dan OFF(False).

*/

console.log("1. Introduce");

/* 1. Introduce
      True sama dengan 1 atau ON/Nyala,
      False sama dengan 0 atau OFF/Mati = Binary.
*/
let data_bool_1 = false;
console.log(data_bool_1);
console.log(typeof data_bool_1);

console.log("2. Statement");

let data_bool_2 = (10<20); // Hasil True
let data_bool_3 = (10>20);  // Hasil False 
console.log(data_bool_2);
console.log(data_bool_3);
/* Boolean bisa dihasilkan lewat statement atau pernyataan pada point nomor 2-
   tersebut.
*/
let data_bool_4_string = ("Paijo" == "Dalijo");
let data_bool_5_string = ("Paijo" == "Paijo");
console.log(data_bool_4_string);
console.log(data_bool_5_string);
/* Tanda (==) artinya adalah untuk membandingkan antara kedua data, apakah-
   kedua data itu identik/sama atau salah satunya berbeda.
*/
console.log("");

let data_bool_4 = (true == 1); // Hasil True karena nilai True adalah 1.
console.log(data_bool_4);

data_bool_4 = (false == 0); // Hasil True karena nilai False adalah 0.
console.log(data_bool_4);

data_bool_4 = (false == 0n); // Hasil True karena bernilai BigInt 0.
console.log(data_bool_4);

data_bool_4 = (false == ""); // Hasil True karena False bernilai Empty String.
console.log(data_bool_4);