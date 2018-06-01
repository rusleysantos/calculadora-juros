var Tempo=0, Valor=0, Taxa=0, TaxaR=0, i=0, Resultado=0, cont=0,re;

function Calculo() 
{


    Tempo = parseInt(document.getElementById("tempo").value);
    Valor = parseInt(document.getElementById("valor").value);
    Taxa = parseInt(document.getElementById("taxa").value);
    TaxaR = Taxa / 100;
    //Resultado = Math.pow((Valor * (1 + TaxaR)), Tempo);

   // for (i = 0; i < Tempo; i++) 
   // {
       // cont++;
        re = Valor * (1 + TaxaR);
        Resultado = re^2;
        

  //  }

    debugger;

}
