const containerElement = document.querySelector(".container");

/*JSnack 1*/
const userNumber_1 = parseInt(prompt("Inserisci il primo numero"));
const userNumber_2 = parseInt(prompt("Inserisci il secondo numero"));

if (userNumber_1 > userNumber_2) {
    //console.log(userNumber_1);
    containerElement.innerHTML = `Il numero più grande è: ${userNumber_1}`;
}
else if (userNumber_2 > userNumber_1) {
    //console.log(userNumber_2);
    containerElement.innerHTML = `Il numero più grande è: ${userNumber_2}`;
}
else {
    //console.log("I numeri inseriti sono uguali");
    containerElement.innerHTML = "I numeri inseriti sono uguali.";
}





