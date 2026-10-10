var num = document.getElementById("numero");
const valorTexto = num.value;
for(let i = 0; i < 10; i++){
    console.log(valorTexto + " x " + i + " = " + (valorTexto*i));
}
