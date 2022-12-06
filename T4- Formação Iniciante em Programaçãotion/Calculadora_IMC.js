function calculaImc(altura, peso) {

    return imc = peso / (altura * altura);

}
function mostra(imc) {
    document.write("O IMC é" , Math.round(imc))
}


var imcFlavio = calculaImc(1.71, 73);
var imcAmigo = calculaImc(1.72, 68);

mostra(imcFlavio);
mostra(imcAmigo);