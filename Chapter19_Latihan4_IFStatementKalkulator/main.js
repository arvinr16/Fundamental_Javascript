function calculate() {
  const number1 = parseFloat(document.getElementById("number1").value);
  const number2 = parseFloat(document.getElementById("number2").value);
  const operator = document.getElementById("operator").value.trim();
  let hasil;

  if(Number.isNaN(number1) || Number.isNaN(number2)) {
    document.getElementById("hasil").textContent = "Tolong masukkan angka yang valid!";
    return;
  };
  /**
   * trim() = Digunakan untuk menghapus spasi kosong (whitespace) di awal-
   *          dan di akhir sebuah string.
   *          Method ini sering digunakan untuk membersihkan input user,-
   *          validasi form, dan menghindari error karena spasi yg tidak-
   *          sengaja.
   * Contoh:  'let nama = " Paijo ";'
   *          'console.log(nama.trim());'
   *          nanti outputnya tetap 'Paijo'.
   *          Tapi trim() tidak menghapus spasi di tengah string:
   *          'let nama = "Paijo   Dalijo";'
   *          'console.log(nama.trim());'
   *          outputnya tetap 'Paijo   Dalijo'.
   */
}
