
function multiple(valor, multiple)

{
    resto = valor % multiple;

    if(resto==0)
        return true;
    else
        return false;
}

var multipli_3=[];
var multipli_5=[];



for(var i=1;i<=100;i++)

{
    if(multiple(i,3))
        multipli_3.push(i);
    else if(multiple(i,5))
        multipli_5.push(i);
}

document.write("Multipli di 3: ",multipli_3);
document.write("<br>Multipli di 5: ",multipli_5);
