let aritmatikaAngka1, operatorAritmatika, aritmatikaAngka2, hasilAritmatika;
document.getElementById("buttonAritmatika").onclick = function () {
  //input:
  aritmatikaAngka1 = document.getElementById("aritmatikaAngka1").value;
  aritmatikaAngka2 = document.getElementById("aritmatikaAngka2").valueAsNumber;
  operatorAritmatika = document.getElementById("operatorAritmatika").value;
  // console.log(aritmatikaAngka1);
  // console.log(operatorAritmatika);
  // console.log(aritmatikaAngka2);

  //operasi:
  hasilAritmatika = eval(aritmatikaAngka1 + operatorAritmatika + aritmatikaAngka2);   
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
