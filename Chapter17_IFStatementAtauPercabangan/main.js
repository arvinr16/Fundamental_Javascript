/*
=> If Statement = Kondisi dimana 'Jika syarat terpenuhi, maka lakukan sesuatu'-
                  atau Program mengambil keputusan berdasarkan kondisi yang ada.
                  Jika benar(true)  -> Maka jalankan kode,
                  Jika salah(false) -> lewati kode.
                  Tetapi ketika menggunakan kode 'else' maka akan seperti ini:
                  Jika benar(true)  -> Jalankan kode di dalam IF,
                  Jika salah(false) -> Jalankan kode di dalam ELSE.
*/

console.log("Contoh studi kasus Percabangan");
console.log("No. 1:");
let makanan = "Tempe Goreng";
console.log("Makan Apa?" + " = " + makanan);

if(makanan === "Ayam Goreng") {
    console.log("Kalau makan Ayam Goreng, responmu apa?" + " = " + "Ayam Goreng Wenakkk");
}else {
    console.log("Kalau engga makan Ayam Goreng, responmu apa?" + " = " + "Bukan Ayam Goreng Ini Coyyy");
};

console.log("");

console.log("No. 2: (ini sudah masuk ranah materi Else IF)")
let umur = 18;
console.log("Berapa umurmu broow?" + " = " + umur);
if (umur >= 18) {
    console.log("Berarti kamu sudah dewasa");
}else if (umur >= 14) {
    console.log("Berarti kamu masih remaja")
}else if (umur < 14) {
    console.log("Berarti kamu masih kanak-kanak");
};