// Uso della funzione trovata su stackoverflow per il calcolo del numero multiplo usando il /
// definizione dei multipli 3 e 5
// creazione for di una lista di numeri da 0 a 100
// definizione della condizione dei multipli
// sostituire il multipli di 3 e 5 rispettivamente "fizz" e "buzz"
// per i multipli sia di 3 che di 5 inserire fixxbuzz


function multiple(valor, multiple)

{
    resto = valor % multiple;

    if(resto==0)
        return true;
    else
        return false;
}

var multipli_3=[];
var multipli_fix=[];



for(var i=1;i<=100;i++)

{
    if(multiple(i,3))
        multipli_3.push(i);
    else if(multiple(i,5))
        multipli_5.push(i);
        // console.log("fix");
}

document.write("Multipli di 3: ",multipli_3);
document.write("<br>Multipli di 5: ",multipli_5);
