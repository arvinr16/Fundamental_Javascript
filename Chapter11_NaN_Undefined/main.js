/* NaN       = Not a Number yang artinya bukan sebuah angka. Walaupun namanya-
               Not a Number, NaN masih termasuk ke dalam tipe data Number.
               NaN muncul ketika Javascript mencoba melakukan operasi matematika-
               tapi hasilnya tidak bisa menjadi angka yang valid.
   Undefined = Nilai default yang berarti variabel ada, tapi belum memiliki nilai.
*/

// 1. NaN (Not a Number)
console.log(`Akar dari -1 :${Math.sqrt(-1)}`);
/* Dalam kode tersebut akan menampilkan hasil perhitungan akar kuadrat dari -1 ke-
   console. Karena Javascript hanya mendukung bilangan real, operasi tersebut-
   menghasilkan NaN.
   ${Math.sqrt(nilai)} = method bawaan Javascript untuk menghitung akar kuadrat.
*/
console.log(`"Paijo" / "Dalijo" :${"Paijo" / "Dalijo"}`);
console.log(`"Paijo" * "Dalijo" :${"Paijo" * "Dalijo"}`);
console.log(`"Paijo" + "Dalijo" :${"Paijo" + "Dalijo"}`);
console.log(`"Paijo" + "Dalijo" :${"Paijo" - "Dalijo"}`);