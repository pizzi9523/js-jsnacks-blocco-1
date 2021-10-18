const containerElement = document.querySelector(".container");

/*JSnack 8*/
/*Chiedi un numero di 4 cifre all’utente
e calcola la somma di tutte le cifre che compongono il numero.*/

//chiedo all'utente di inserire un numero a 4 cifre
const user_number = prompt("inserisci un numero a 4 cifre");

let i = 0;
let sum = 0;

while (i < user_number.length) {
    sum += parseInt(user_number[i]);

    i++;
}

containerElement.insertAdjacentHTML("beforeend", sum)
console.log(sum);










