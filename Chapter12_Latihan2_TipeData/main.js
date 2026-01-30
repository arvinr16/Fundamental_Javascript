/* Kita akan membuat kalkulator sederhana.
   Notes: 1. Properti '.value' itu penting untuk menampilkan atau-
             mengubah nilai dari suatu elemen tag Input di HTML.
          2. '${namaVariabel}' digunakan di dalam template literal-
             string dengan tanda backtick (`). Fungsinya adalah-
             untuk menyisipkan nilai variabel atau ekspresi Javascript-
             ke dalam sebuah string.
          3. '.textContent = nama id' digunakan untuk mengambil atau-
             mengubah teks yang ada di dalam suatu elemen HTML. Disini-
             yang diambil adalah teks murni, dan tidak membaca tag HTML.
*/
// 1. Kita pertama-tama akan membuat variabel tanpa nilai atau undefined.
let angka_1, angka_2, hasil;
/* 2. Setelah itu kita bisa mengambil nilai ID dari tag button dengan id 'button-jumlah'
      dan juga kita bisa menambahkan properti 'onclick' dan juga tambahkan function,-
      yang nantinya kita bisa membuat logika di dalam fungsi tersebut.
*/
document.getElementById("button-jumlah").onclick = function() {
    angka_1 = document.getElementById("angka-1").valueAsNumber; /* Digunakan untuk mengambil id dari angka-1
                                                                   .value digunakan untuk mengambil nilai atau-
                                                                   mengubah nilai dari elemen input di HTML-
                                                                   atau DOM
                                                                */
    console.log(`angka_1 = ${angka_1} tipe = ${typeof angka_1}`); /* Ini nanti akan menghasilkan nilai string-
                                                                     jadi kita harus ubah dulu nilainya dari-
                                                                     string ke number. Misal kita ubah dari-
                                                                     HTMLnya yaitu kita ubah attribut type di-
                                                                     tag input, dia akan tetap menghasilkan-
                                                                     nilai string bukan number.
                                                                     Maka dari itu kita bisa mengubah variabel-
                                                                     'angka_1' itu propertinya tidak hanya-
                                                                     '.value' saja, tetapi '.valueAsNumber'.
                                                                  */
    angka_2 = document.getElementById("angka-2").valueAsNumber;
    console.log(`angka_2 = ${angka_2} tipe = ${typeof angka_2}`);

    hasil = parseFloat(angka_1) + angka_2; // Kita juga bisa mengubah nilai dari string ke number dengan cara seperti ini.

    console.log(`Hasil = ${hasil} tipe = ${typeof hasil}`);

    document.getElementById("hasil").textContent = hasil;
};
