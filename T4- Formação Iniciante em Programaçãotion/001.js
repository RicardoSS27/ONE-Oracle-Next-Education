var totalIdades = 0;

while(numero <= totalFamiliares) {
    var idade = parseInt(prompt("Informe idade do familiar"));
    totalIdades = totalIdades + idade;
    numero++;

}
var mediaDasIdades = totalIdades/totalFamiliares
mostra("A média das idades dos familiares é " + mediaDasIdades);
mostra("FIM");