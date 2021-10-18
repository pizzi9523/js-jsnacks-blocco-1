const containerElement = document.querySelector(".container");

/*JSnack 3*/
/*Il software deve chiedere per 10 volte all’utente di inserire un numero.
Il programma stampa la somma di tutti i numeri inseriti.*/

let sum = 0;
for (let i = 0; i < 10; i++) {
    let userNumber = parseInt(prompt("Inserisci un numero"));
    //console.log(userNumber);
    sum += userNumber;
}

//console.log(sum);
containerElement.innerHTML = `La somma dei numeri è ${sum}`







