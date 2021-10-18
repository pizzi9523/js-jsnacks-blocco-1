const containerElement = document.querySelector(".container");

/*JSnack 9*/
/*Calcola la somma e la media dei primi 10 numeri..*/

let sum = 0;
for (let i = 1; i <= 10; i++) {
    sum += i;
    // console.log(sum);
}

//console.log(sum);

let media = sum / 10;
//console.log(media);
containerElement.insertAdjacentHTML("beforeend", `La somma dei primi 10 numeri è ${sum} <br>`)
containerElement.insertAdjacentHTML("beforeend", `La media dei primi 10 numeri è ${media}`)












