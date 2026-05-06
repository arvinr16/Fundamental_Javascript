let aritmatikaAngka1, operatorAritmatika, aritmatikaAngka2, hasilAritmatika;
// Calculator Aritmatika
document.getElementById("buttonAritmatika").onclick = function () {
  //input:
  aritmatikaAngka1 = document.getElementById("aritmatikaAngka1").value;
  aritmatikaAngka2 = document.getElementById("aritmatikaAngka2").valueAsNumber;
  operatorAritmatika = document.getElementById("operatorAritmatika").value;
  // console.log(aritmatikaAngka1);
  // console.log(operatorAritmatika);
  // console.log(aritmatikaAngka2);

  //operasi:
  hasilAritmatika = eval(
    aritmatikaAngka1 + operatorAritmatika + aritmatikaAngka2,
  );
  /* eval("10+10");  Fungsi 'eval' adalah mengubah string menjadi sebuah kode-
                    Javascipt. Tetapi penggunaan 'eval' tidak disarankan-
                    dikarenakan dia mempunyai kerentanan terhadap serangan-
                    cybersecurity XSS(Cross Site Scripting). Jadi alangkah-
                    lebih baik kita menggunakan function 'JSON.parse'.   */
  /* let user = JSON.parse(`{"nama": "John"}`); Disarankan menggunakan 'JSON.parse' seperti itu
     console.log(user); */

  //output:
  document.getElementById("hasilAritmatika").textContent = hasilAritmatika;
};

// Calculator Logika
let boolean1, operatorLogika, boolean2, hasilLogika;
document.getElementById("buttonLogika").onclick = function () {
  //input:
  boolean1 = document.getElementById("boolean1").value;
  boolean2 = document.getElementById("boolean2").valueAsNumber;
  operatorLogika = document.getElementById("operatorLogika").value;

  //operasi:
  hasilLogika = eval(boolean1 + operatorLogika + boolean2);

  //output:
  document.getElementById("hasilLogika").textContent = hasilLogika
    ? "True"
    : "False";
  /* '? "(Nilai Pertama)" : "(Nilai Kedua)";' = Dinamakan Ternary Operator (conditional operator)-
                                                biasa digunakan untuk membandingkan hasil dari-
                                                suatu variabel yang kita buat, nanti hasilnya-
                                                berupa Boolean True dan False, tetapi teksnya-
                                                bisa kita Custom sendiri begitu. Jadi Ternary-
                                                itu bisa disebut versi singkat dari if-else.
  */
};
/*
Syntax alternatif Ternary Operation: 
  'const (object variabelnya) = {
    true: "(custom teks benar)",
    false: "(custom teks salah)"
  };
  textContent = (object variabelnya)[Bracket Notation];'
  contoh:
  'let hasilLogika = true;
   const statusLogika = {
    true: "Benar",
    false: "Salah"
   };
   textContent = statusLogika[hasilLogika];'
   maka:
   'statusLogika[hasilLogika];' diubah menjadi 'statusLogika("true")' hasilnya nanti 'Benar'.
  */

// Contoh kode Ternary Operation:
let hasilTernary1 = true;
document.getElementById("buttonTernary1").onclick = function () {
  const statusTernary1 = {
    true: "Benar",
    false: "Salah",
    1: "Satu"
  };
  textContent = statusTernary1[hasilTernary1];
  document.getElementById("hasilTernary1").textContent = statusTernary1[hasilTernary1];
};

// Calculator Komparasi
let komparasi1, operatorKomparasi, komparasi2, hasilKomparasi;
document.getElementById("buttonKomparasi").onclick = function() {
  komparasi1 = document.getElementById("komparasi1").value;
  komparasi2 = document.getElementById("komparasi2").valueAsNumber;
  operatorKomparasi = document.getElementById("operatorKomparasi").value;

  hasilKomparasi = eval(komparasi1 + operatorKomparasi + komparasi2);

  document.getElementById("hasilKomparasi").textContent = hasilKomparasi ? "Benar Coyyy" : "Salah Coyyy";
};
