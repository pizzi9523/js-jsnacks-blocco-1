const containerElement = document.querySelector(".container");

/*JSnack 2*/
const userWord_1 = prompt("Inserisci la prima parola");
const userWord_2 = prompt("Inserisci la seconda parola");

if (userWord_1.length < userWord_2.length) {
    //console.log(userWord_1, userWord_2);
    containerElement.insertAdjacentHTML("beforeend", userWord_1)
    containerElement.insertAdjacentHTML("beforeend", "<br>")
    containerElement.insertAdjacentHTML("beforeend", userWord_2)

}
else if (userWord_1.length > userWord_2.length) {
    containerElement.insertAdjacentHTML("beforeend", userWord_2)
    containerElement.insertAdjacentHTML("beforeend", "<br>")
    containerElement.insertAdjacentHTML("beforeend", userWord_1)
    //console.log(userWord_2, userWord_1);
}
else {
    containerElement.insertAdjacentHTML("beforeend", userWord_1)
    containerElement.insertAdjacentHTML("beforeend", "<br>")
    containerElement.insertAdjacentHTML("beforeend", userWord_2)
    containerElement.insertAdjacentHTML("beforeend", "<br> Le parole hanno la stessa lunghezza");
    //console.log(userWord_1, userWord_2);
    //console.log("Le parole hanno la stessa lunghezza");
}






