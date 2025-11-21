// String Operation
/* 1. Char At = Digunakan untuk mengambil nilai tertentu dari sebuah nilai pada-
                variabel kita.
                contoh: */
let data = "ABCD";
let dataChar = data.charAt(0);
console.log(`Pengambilan character atau char pada index ke 0: ${dataChar}`);
dataChar = data.charAt(1);
console.log(`Pengambilan character atau char pada index ke 1: ${dataChar}`);
dataChar = data.charAt(2);
console.log(`Pengambilan character atau char pada index ke 2: ${dataChar}`);
dataChar = data.charAt(3);
console.log(`Pengambilan character atau char pada index ke 3: ${dataChar}`);

console.log("");

/* 2. Menyambung String = Digunakan untuk menyambung string menggunakan method 'concat'*/
let namaDepan = "Paijo";
let namaBelakang = "Dalmoyo";
let namaLengkap = namaDepan.concat(" ", namaBelakang, " yang paling keren");
/* '.concat' adalah method yang digunakan untuk menggabungkan beberapa string-
   menjadi satu string baru. */
console.log(namaLengkap);

console.log("");

/* 3. Mengambil Index = Digunakan untuk mengambil index, dimana Index yang terambil-
                        adalah index pertama dari suatu nilai jika nilai tersebut-
                        lebih dari satu*/
let namaPanggilan = "PaDalmoyo";
console.log(namaPanggilan.indexOf("a"));
/* 'indexOf' digunakan untuk mengambil index pertama atau untuk mencari posisi index di-
   dalam array atau string */

console.log("");

/* 4. Substring = Digunakan untuk mengambil beberapa satu kalimat bukan hanya char saja */
let namaLengkap_6_25 = namaLengkap.substring(6, 25);
console.log(namaLengkap_6_25);
console.log(namaLengkap.substring(19, 25));
console.log(namaLengkap.substring(25, 19)); // Dibolak balik tetap keluar nilainya.

console.log("");

/* 5. Slice */
console.log(namaLengkap.slice(19, 25));
console.log(namaLengkap.slice(25, 19)); // Dibolak balik tidak keluar nilainya.

console.log("");

/* 6. Replace */
namaLengkap = namaLengkap.replace("Paijo Dalmoyo", "Gareng Prank");
console.log(namaLengkap);

console.log("");

/* 7. Lower Case */
console.log(namaLengkap.toLowerCase());

console.log("");

/* 8. Upper Case */
console.log(namaLengkap.toUpperCase());

console.log("");

/* 9. Extract Data Integer Number */
let dataIntegerString = "21";
console.log(typeof dataIntegerString);
let dataInteger = parseInt(dataIntegerString);
console.log(dataInteger);
console.log(typeof dataInteger);

console.log("");

/* 10. Extract Data Float Number */
let dataFloatString = "21.1025";
console.log(typeof dataFloatString);
let dataFloat = parseFloat(dataFloatString);
console.log(dataFloat);
console.log(typeof dataFloat);
