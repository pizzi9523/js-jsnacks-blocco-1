const containerElement = document.querySelector(".container");

/*JSnack 7*/
/*Stampa le potenze di 2 fino a 1000.*/



//elevo al cubo i primi n numeri 
let i = 0;
while (i <= 1000) {
    let quadrato = Math.pow(i, 2);
    console.log(quadrato);
    containerElement.insertAdjacentHTML("beforeend", quadrato);
    containerElement.insertAdjacentHTML("beforeend", " ");

    i++;
}











