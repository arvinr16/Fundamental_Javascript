// Operasi Komparasi
/* Operasi Komparasi pada dasarnya adalah membandingkan dua buah nilai-
   dan selalu mengembalikan nilai boolean True atau False.
*/

/* 1. '=='(Equality) = Membandingkan dua nilai dengan mengabaikan perbedaan-
                       tipe data.
*/

/* 2. '!='(Inequality) = Mengecek apakah dua nilai tidak sama, namun tetap-
                         mengabaikan perbedaan tipe data.
*/

/* 3. '==='(Strict equality) = Membandingkan dua nilai sekaligus tipe datanya.
                               (Direkomendasikan untuk menghindari bug tidak terduga)
*/

/* 4. '!=='(Strict inequality) = Mengecek apakah dua nilai tidak sama dengan-
                                 mempertimbangkan tipe datanya juga.
*/

/* 5. '>'(Greater than/lebih besar dari) = Mengecek apakah nilai di kiri lebih besar-
                                           dari nilai di kanan.
*/

/* 6. '<'(Less than/lebih kecil dari) = Mengecek apakah nilai di kiri lebih kecil-
                                        dari nilai di kanan.
*/

/* 7. '>='(Greater or equal/lebih besar sama dengan) = Mengecek apakah nilai di kiri lebih-
                                                       besar dari atau sama dengan nilai di kanan.
*/

/* 8. '<='(Less or equal/lebih kecil sama dengan) = Mengecek apakah nilai di kiri lebih-
                                                    kecil dari atau sama dengan nilai di kanan.
*/

console.log("Contoh komparasi")
// 1. '>'(Lebih besar dari):
console.log("1. Contoh '>'(Lebih besar dari):");
console.log(`10 > 10 = ${10 > 10}`);
let dataGreaterThan = (10 > 10);
console.log(dataGreaterThan);
console.log(typeof dataGreaterThan);

console.log("");

// 2. '>='(Lebih besar sama dengan):
console.log("2. Contoh '>='(Lebih besar sama dengan):");
console.log(`10 >= 10 = ${10 >= 10}`);

console.log("");

// 3. '<'(Lebih kecil dari):
console.log("3. Contoh '<'(Lebih kecil dari):");
console.log(`10 < 10 = ${10 < 10}`);

console.log("");

// 4. '<='(Lebih kecil sama dengan):
console.log("4. Contoh '<='(Lebih kecil sama dengan):");
console.log(`10 <= 10 = ${10 <= 10}`);

console.log("");

// Persamaan
console.log("");
console.log("Contoh persamaan")
console.log("1. Contoh '=='(Equality):");
console.log(`3 == 3 = ${3 == 3}`);
console.log(`3 == "3" = ${3 == "3"}`); /* tidak diperbolehkan karena kalau misal kita nulis HTML-
                                          saat kita masukan pakai input dengan menggunakan type text-
                                          jika kita masukan nilai number maka nantinya nilai number-
                                          tersebut akan otomatis dibaca sebagai number, yang seharusnya-
                                          dibaca sebagai string. Bisa beroperasi seperti itu dikarenakan-
                                          Equality menghiraukan perbedaan tipe data antar nilainya.
                                       */
console.log(`3 == 4 = ${3 == 4}`);

console.log("");

console.log("2. Contoh '!='(Inequality):");
console.log(`3 != 3 = ${3 != 3}`);
console.log(`3 != "3" = ${3 != "3"}`); // ini juga tidak diperbolehkan atau tidak disarankan.

console.log("");

console.log("3. Contoh '==='(Strict equality):");
console.log(`3 === 3 = ${3 === 3}`);
console.log(`3 === "3" = ${3 === "3"}`); /* solusi jika membandingkan kedua nilai dengan tipe data yang-
                                            berbeda adalah dengan menggunakan operator '==='(Strict equality),-
                                            supaya tidak otomatis merubah tipe data ketika misal di input HTML.
                                         */
console.log(`"3" === "3" = ${"3" === "3"}`);

console.log("")

console.log("4. Contoh '!=='(Strict inequality):");
console.log(`3 !== 3 = ${3 !== 3}`);
console.log(`3 !== "3" = ${3 !== "3"}`);
console.log(`"3" !== "3" = ${"3" !== "3"}`);
