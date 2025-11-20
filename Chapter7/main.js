// String Operation
/* 1. Char At
      Kita bisa mengambil sebagian value atau nilai pada variabel yang kita punya 
      contoh: */
let data = "ABCD";
let dataChar = data.charAt(0); /* 'charAt(numberValue)' digunakan untuk mengambil-
                                   nilai tertentu dari sebuah nilai pada variabel kita. */
console.log(`Pengambilan character atau char pada index ke 0: ${dataChar}`);
dataChar = data.charAt(1);
console.log(`Pengambilan character atau char pada index ke 1: ${dataChar}`);
dataChar = data.charAt(2);
console.log(`Pengambilan character atau char pada index ke 2: ${dataChar}`);
dataChar = data.charAt(3);
console.log(`Pengambilan character atau char pada index ke 3: ${dataChar}`);

console.log("")

/* 2. Menyambung String */
let namaDepan = "Paijo";
let namaBelakang = "Dalmoyo";
let namaLengkap = namaDepan.concat(' ',namaBelakang, " yang paling keren");
/* '.concat' adalah method yang digunakan untuk menggabungkan beberapa string-
   menjadi satu string baru. */
console.log(namaLengkap);

console.log("")

/* 3. Mengambil Index 
      Index yang terambil adalah index pertama-
      dari suatu nilai jika nilai tersebut lebih dari satu*/
let namaPanggilan = "PaDalmoyo"
console.log(namaPanggilan.indexOf('a'));
/* 'indexOf' digunakan untuk mengambil index pertama atau untuk mencari posisi index di-
   dalam array atau string */


/* 4. Substring */
