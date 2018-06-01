var Tempo = 0,
    Valor = 0,
    Taxa = 0,
    TaxaR = 0,
    i = 0,
    Resultado = 0,
    Cont = 0,
    Arre;

function Calculo() {

    Tempo = parseInt(document.getElementById("tempo").value);
    Valor = parseInt(document.getElementById("valor").value);
    Taxa = parseInt(document.getElementById("taxa").value);
    TaxaR = Taxa / 100;

    for (i = 0; i < Tempo; i++) {
        Cont++;
        Resultado = Math.pow(Valor * (1 + (Taxa / 100)), Cont);
        Arre = parseFloat(Resultado.toFixed(2));
        alert("No mês " + Cont + " sua divida e de R$" + Arre)
    }
}
