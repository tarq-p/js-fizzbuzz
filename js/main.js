// creazione for di una lista di numeri da 0 a 100
// definizione della condizione dei multipli 3 e 5
// definire i multipli 3 e 5 rispettivamente "fizz" e "buzz"
// per i multipli sia di 3 che di 5 inserire fixxbuzz
// mettere a schermo il risultato

for (var i = 1; i <= 100; i++) {
    if (((i % 3) == 0) && ((i % 5) == 0)) {
        console.log('FizzBuzz');
        document.getElementById('lista').innerHTML = document.getElementById('lista').innerHTML + '<p>FizzBuzz</p>';
    } else if ((i % 5) == 0) {
        console.log('Buzz');
        document.getElementById('lista').innerHTML = document.getElementById('lista').innerHTML + '<p>Buzz</p>';
    } else if ((i % 3) == 0) {
        console.log('Fizz');
        document.getElementById('lista').innerHTML = document.getElementById('lista').innerHTML + '<p>Fizz</p>';
    } else {
        console.log(i);
        document.getElementById('lista').innerHTML = document.getElementById('lista').innerHTML + '<p>' + i + '</p>' ;
    }
}
