// Chiedere all'utente pari o dispari, poi un numero fra 1 e 5, infine generiamo un numero col pc da 1 a 5, sommiamo e dichiariamo il vincitore.

// ----- PROGRAMMA PRINCIPALE -----

// L'utente sceglie fra pari e dispari
do {

    userWord = prompt("Pari o dispari?").toLowerCase();

    // Errore
    if (userWord != "pari" && userWord != "dispari") {
        console.log ("Scegli solamente fra le due opzioni!");
    }

} while (userWord != "pari" && userWord != "dispari");
console.log ("La tua scelta è: " + userWord);


// L'utente sceglie un numero idoneo
do {

    userNumber = prompt("Scrivi un numero da 1 a 5:");
    number = parseInt(userNumber);

    // Errore
    if (isNaN(number) || number < 1 || number > 5) {
        console.log ("Scrivi un numero fra 1 e 5 compresi!");
    }

} while (isNaN(number) || number < 1 || number > 5)
console.log ("Il tuo numero è: " + number);

// Numero scelto dal computer
let pcnumber = randomNumber(1, 5);
console.log ("Il numero del computer è: " + pcnumber);

let sum = number + pcnumber;
console.log ("La somma è: " + sum);

// Controllo del risultato
let result = isEvenOrOdd(sum);
console.log ("Il risultato è: " + result);

if (userWord == result) {
    console.log ("Il vincitore è l'utente!");
}
else {
    console.log ("Il vincitore è il computer!");
}



// ----- FUNZIONI -----

// Numero casuale
function randomNumber(min, max) {
    return Math.floor(Math.random() * 6) + 1;
}

// Controllo se il numero è pari o dispari
function isEvenOrOdd(number) {
    if (number % 2 == 0) {
        return 'pari';
    }
    else {
        return 'dispari';
    }
}