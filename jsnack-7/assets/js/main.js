const containerElement = document.querySelector(".container");

/*JSnack 7*/
/*Stampa le potenze di 2 fino a 1000.*/



//elevo al quadrato i primi 1000 numeri 
let i = 0;
while (i <= 1000) {
    let quadrato = Math.pow(i, 2);
    console.log(quadrato);
    containerElement.insertAdjacentHTML("beforeend", quadrato);
    containerElement.insertAdjacentHTML("beforeend", " ");

    i++;
}

//elevo le potenze di 2 fino a che il risultato è inferiore di 1000 
let x = 0;
while (x <= 9) {
    let quadrato = Math.pow(2, x);
    console.log(quadrato);
    containerElement.insertAdjacentHTML("beforeend", quadrato);
    containerElement.insertAdjacentHTML("beforeend", " ");

    x++;
}











