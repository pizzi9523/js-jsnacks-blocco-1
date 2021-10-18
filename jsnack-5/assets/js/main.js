const containerElement = document.querySelector(".container");

/*JSnack 5*/
/*Crea un array vuoto.
Chiedi per 6 volte all’utente di inserire un numero,
se è dispari inseriscilo nell’array.*/

//creo l'array
let numbers = [];

//chiedo all'utente di inserire un numero 6 volte
for (let i = 0; i < 6; i++) {
    const number = parseInt(prompt("Inserisci un numero"));

    //verifico se è dispari e lo aggiungo
    if (number % 2 == 1) {
        numbers = [...numbers, number];
    }
}
console.log(numbers);











