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