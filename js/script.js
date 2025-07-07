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


const numberRequest = parseInt(prompt("scegli un numero tra 1 e 5"))

//generare numero tra 1 e 5//

function generateRandomNumbers (min, max){
    return Math.floor(Math.random()*(max - min + 1)) + min;
}

//assegnazione a pc il risultato della FUNZIONE//
const pcNumber = generateRandomNumbers(1,5);

//dichiarazione della variabile somma
let sum = numberRequest+pcNumber

//controllo della variabile pari o dispari
function checkEvenOrOdd(){

    if(sum % 2 === 0){
       return "Pari"

    }else{
    return "Dispari" 
    }
    
    }
//stampa il risultato della funzione pari o dispari//
    console.log(checkEvenOrOdd());
    

    //controllo della funzione hai vinto o hai perso in base al risultato//
    function result(){
      if(evenOdd==checkEvenOrOdd()){
        console.log("Hai vinto")
      }else{
        console.log("Hai perso")
      }
    }

    console.log(result())
