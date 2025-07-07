// Palidroma
// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma


//dichiarazione variabile//
const nameRequest = prompt("Inserisci la Parola")

function reverseString(text){
    let result = "";

    for (let i = text.length-1; i>=0; i--){
        console.log(text[i]);
        result+=text[i];
    }

    return result;
}

const reversedString = reverseString(nameRequest)


if (nameRequest.toLowerCase()===reversedString.toLowerCase()){
    console.log("è Palindroma")

}else{
    console.log(" non è Palindroma")
}
     


//------//

// Pari e Dispari
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.


//dichiarazione variabile//

const evenOdd = prompt("scegli tra pari o dispari")


const number = parseInt(prompt("scegli un numero tra 1 e 5"))
