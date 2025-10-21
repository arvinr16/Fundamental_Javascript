// => Materi Penjelasan variabel-variabel dalam Javascript <=
/* 1. => Command dalam Javascript <=
      Kita bisa menggunakan tanda garis miring (/) dua kali untuk membuat suatu syntax 'command' pada-
      file Javascript kita. Tujuan dibuatnya command dalam sebuah kode, untuk memberi suatu tanda-
      seperti teks, perintah, dll pada kode kita, tetapi tanda tersebut tidak akan tereksekusi oleh-
      sistem atau komputer kita. */
//============================================================================================================================





// 2. => Variabel bertipe 'let' <=
/*    Cara modern untuk mendeklarasikan variabel yang nilainya bisa berubah. Variabel 'let' tidak bisa dideklarasikan ulang-
      dalam blok yang sama, tapi nilainya bisa berubah.
      */
let makanan = "Ayam Goreng";
// Cara menampilkan data yang berada pada variabel yang sudah dideklarasikan:
console.log(makanan)
// Cara merubah data pada variabel yang sudah dideklarasikan:
makanan = "Nasi Goreng";
console.log(makanan);
//============================================================================================================================





// 3. => Variabel bertipe 'var' <=
/*    Digunakan untuk mendeklarasikan variabel (cara lama, sebelum ES6). Variabel 'var' bisa dideklarasikan ulang dan diubah-
      nilainya.
      */
var makananDaerah = "Nasi Padang";
console.log(makananDaerah);
var makananLuar = "Pizza";
console.log(makananLuar);
//============================================================================================================================





// 4. => Variabek bertipe 'const' <=
/*    Digunakan untuk mendeklarasikan variabel yang nilainya tidak bisa diubah setelah dideklarasikan/ ditetapkan.
      Jika kita menggunakan variabel 'const' kita bisa membedakan variabel tersebut dengan variabel yang lainnya supaya mudah-
      untuk dibaca, dengan cara kita memberikan nama variabel 'const' tersebut dengan huruf KAPITAL semua atau UPPER CASE.
      */
const ID_NAMA = "1001";
console.log(ID_NAMA);
/* ID_NAMA = "101"; Nilai dari variabel 'const' yang diganti seperti itu, akan menghasilkan error, karena tujuan dari variabel-
                    const itu sendiri adalah mendeklarasikan nilai diawal yang tidak bisa lagi diubah nilainya kemudian.
                    */
//============================================================================================================================





// 5. => Scoping dalam Javascript <=
// Behavior/ kelakuan dari variabel bertipe 'let' dalam Scoping
let makananLokal = "Gudeg";
{
    let makananLokal = "Bakpia"
    console.log(makananLokal);
}
console.log(makananLokal);
// Behavior/ kelakuan dari variabel 'var; dalam Scoping
var makananInternasional = "Burger";
{
    var makananInternasional = "Sushi";
    console.log(makananInternasional);
}
console.log(makananInternasional);
/* Perbedaan penggunaan Scoping pada variabel 'let' dan 'var':
   > Jika kita menggunakan variabel let, variabel yang sudah dideklarasikan didalam dan diluar kurung kurawal akan mempunyai-
     nilai dari variabelnya sendiri2, jadi print/ console.log yang berada diluar scope tidak akan mengambil data terbaru dari-
     deklarasi variabel yang baru dilakukan. Singkatnya scope dari variabel let akan tergantung dimana scope itu berada.
   > Sedangkan pada variabel var, dia akan mengambil data terbaru yang dideklarasikan didalam Scope walaupun kita print-
     variabel tersebut diluar Scope. Singkatnya scope dari variabel var akan selalu tersedia atau selalu Global.
     */
//============================================================================================================================





// 6. => Kasus Khusus Scoping tanpa Variabel <=
// Kita juga bisa membuat Scoping dalam Javascript seperti berikut:
namaLauk = "Tahu";
{
    namaLauk = "Tempe";
}
console.log(namaLauk);
/* Tetapi jika kita membuat Scoping dengan metode tersebut, Scoping tersebut variabelnya akan seperti menggunakan variabel-
   'var'.
   */
