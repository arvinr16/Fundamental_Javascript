let input1, input2, hasil;

document.getElementById('button').onclick = function() {
    input1 = parseFloat(document.getElementById('input1').value);
    input2 = parseFloat(document.getElementById('input2').value);
    let op = document.getElementById('operator').value;
    let hasil;
    console.log(hasil);

    switch(op) {
        case '+': hasil = input1 + input2; break;
        case '-': hasil = input1 - input2; break;
        case '*': hasil = input1 * input2; break;
        case '/': hasil = input1 / input2; break;
    }

    hasil = Number(hasil.toFixed(2));

    document.getElementById('hasil').textContent = hasil
}