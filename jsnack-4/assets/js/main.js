const containerElement = document.querySelector(".container");

/*JSnack 4*/
/*In un array sono contenuti i nomi degli invitati alla festa del grande
Gatsby, chiedi all’utente il suo nome e comunicagli se può partecipare o
no alla festa.*/

//creo l'array
const lista_invitati = [
    "giuseppe",
    "tiziano",
    "fabiola",
    "fabio",
    "chiara",
    "matteo",
    "pablo",
    "valentina",
    "stefano",
    "gaia"
];

//chiedo il nome all'utente
const user_name = prompt("Buonasera, Come si chiama?").toLowerCase();


//verifico se l'utente è tra gli invitati
let flag = false;
for (let i = 0; i < lista_invitati.length; i++) {
    const element = lista_invitati[i];
    //console.log(element);
    //console.log(user_name);

    if (user_name == element) {
        flag = true;
        i = lista_invitati.length;
    }
    else {
        flag = false;
    }
}

//comunico se può entrare

if (flag) {
    //console.log("puoi entrare");
    containerElement.innerHTML = `Benvenuto/a alla festa ${user_name.toUpperCase()}, entri pure.`;
}
else {
    //console.log("non puoi entrare");
    containerElement.innerHTML = "Mi dispiace non può entrare, non è tra gli invitati alla festa."

}









