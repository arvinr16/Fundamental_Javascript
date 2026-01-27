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
let data = parseInt("test123");
console.log(data);
/* Jika kita membuat suatu operasi matematika dengan nilai tipe data NaN, maka-
   hasilnya nanti juga berupa NaN. Atau NaN tidak bisa dioperasikan.
*/

console.log("");

// 2. Undefined (belum diberi nilai atau belum tahu nilainya)
let a;
console.log(`a = ${a}`);
console.log(Math.sqrt(36));
console.log(console.log("testing")); /* Bernilai undefined dikarenakan console.log tidak-
                                        menghasilkan nilai apapun, melainkan dia hanya-
                                        nge print saja.
                                     */
/* Kesimpulan Undefined = Sesuatu yang kita lakukan dan tidak menghasilkan suatu-
                          nilai apapun, maka akan terjadi Undefined.
                          Dia bisa jadi sesuatu variabel yang kita tidak-
                          definisikan nilainya atau tidak punya nilai,-
                          atau bisa juga sesuatu yang tidak memiliki nilai-
                          apapun seperti console.log yang hanya nge print saja.
*/
let data_1 = console.log("Paijo"); // Ini sebenarnya tidak menghasilkan nilai apapun.
// berbeda dengan ini:
let data_2 = Math.cos(3.14);
console.log(data_2);