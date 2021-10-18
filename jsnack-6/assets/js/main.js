const containerElement = document.querySelector(".container");

/*JSnack 6*/
/*Stampa il cubo dei primi N numeri,
dove N è un numero indicato dall’utente.*/

//chiedo all'utente di inserire un numero
const user_number = parseInt(prompt("inserisci un numero"));

//elevo al cubo i primi n numeri 
let i = 1;
while (i <= user_number) {
    let cubo = Math.pow(i, 3);
    //console.log(cubo);
    containerElement.insertAdjacentHTML("beforeend", cubo);
    containerElement.insertAdjacentHTML("beforeend", " ");

    i++;
}











