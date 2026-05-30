function calculate() {
  const number1 = parseFloat(document.getElementById("number1").value);
  const number2 = parseFloat(document.getElementById("number2").value);
  const operator = document.getElementById("operator").value.trim();
  let hasil;

  if (Number.isNaN(number1) || Number.isNaN(number2)) {
    document.getElementById("hasil").textContent =
      "Tolong masukkan dua angka yang valid!";
    return;
  }
  /**
   * Penjelasan:
   * 1. trim() = Digunakan untuk menghapus spasi kosong (whitespace) di awal-
   *             dan di akhir sebuah string.
   *             Method ini sering digunakan untuk membersihkan input user,-
   *             validasi form, dan menghindari error karena spasi yg tidak-
   *             sengaja.
   *             CONTOH:
   *             'let nama = " Paijo ";'
   *             'console.log(nama.trim());'
   *             nanti outputnya tetap 'Paijo'.
   *             Tapi trim() tidak menghapus spasi di tengah string:
   *             'let nama = "Paijo   Dalijo";'
   *             'console.log(nama.trim());'
   *             outputnya tetap 'Paijo   Dalijo'.
   * 2. isNaN() = Digunakan untuk mengecek apakah sebuah nilai itu Not a Number(NaN)-
   *              atau tidak?
   *              CONTOH:
   *              Di 'isNaN()' mempunyai beberapa kekurangan yaitu jika kita menggunakan-
   *              nilai seperti 'number = "123"' maka nanti outputnya false atau dalam-
   *              kasus ini Javascript mengubah string menjadi number terlebih dahulu.
   * 3. Number.isNaN() = Digunakan untuk mengecek nilai apakah ini benar-benar NaN atau-
   *                     tidak?
   *                     CONTOH:
   *                     'console.log(Number.isNaN("123"));'
   *                     nanti outputnya tetap false dikarenakan "123" tidak benar-benar NaN.
   * 4. Perbedaan isNaN() dengan Number.isNaN() = Sebenarnya kegunaannya itu hampir sama tetapi-
   *                                              ada perbedaan yang bisa kita lihat.
   *                                              Kalau kita pakai 'isNaN()' itu mencoba mengubah-
   *                                              ke number dahulu.
   *                                              Sedangkan 'Number.isNaN()' langsung cek apakah-
   *                                              nilainya NaN asli atau tidak.
   * 5. return = Digunakan untuk menghentikan kode di Function.
   */

  if (operator === "+") {
    hasil = number1 + number2;
  } else if (operator === "-") {
    hasil = number1 - number2;
  } else if (operator === "*") {
    hasil = number1 * number2;
  } else if (operator === "/") {
    if (number2 === 0) {
      hasil = "Hasil tak hingga";
    } else {
      hasil = number1 / number2;
    } // Logika ini digunakan khusus pada operator pembagian untuk memberi validasi ketika dibagi 0.
  } else {
    hasil = "Operator tidak dikenali";
  }

  document.getElementById("hasil").textContent = `Hasil: ${hasil}`;
}
