// # PALINDROMA
// - creare una funzione per capire se la parola inserita è palindroma
//   - creo una funzione:
function checkPalindromo(parola) { // Dichiarazione
	let isPalindrome = true;
	for (let i = 0; i < parola.length / 2; i++) {
		const charFromBeginnig = parola[i];
		const charFromEnd = charFromBeginnig[parola.length - 1 - i];
		if (charFromBeginnig !== charFromEnd) {
			isPalindrome = false;
		}
	}
	return isPalindrome;
}

// - chiedere all' utente di inserire una parola
//   - creo una variabile prompt ' inserisci una parola ' per l'utente
//    - converto la stringa della variabile parola in minuscola
const parola = prompt("inserisci una parola").toLowerCase();
console.log(parola);
const risultato = checkPalindromo(parola); // Invocazione
 



// # PARI O DISPARI

// - chiediamo all'utente di scegliere pari o dispari
const utentePariODispari = prompt(" scegli pari o dispari");
console.log(utentePariODispari);
// - chiediamo all'utente di inserire un numero da 1 a 5
const utenteNum = parseInt(prompt("inserisci un numero da 1 a 5"));
console.log(utenteNum);
// - generiamo un numero random per il computer da 1 a 5
function getRandomNumber() {
	return parseInt(Math.random() * (5 - 1) + 1);
}
const pcNumero = getRandomNumber();
console.log(pcNumero);
// - stabiliamo se la somma dei numeri è pari o dispari
const SommaNumeri = utenteNum + pcNumero;
console.log(SommaNumeri);

function PariODispari(SommaNumeri) { // Dichiarazione
	if (SommaNumeri % 2 === 0) { // è pari
		return 'pari';
	} else { // è dispari
		return 'dispari';
	}
}

const totale = PariODispari(SommaNumeri);

if ((totale === 'pari' && utentePariODispari === 'pari') ||
(totale === 'dispari' && utentePariODispari === 'dispari')) {

} else {

}

// Invocazioni
//PariODispari(2);
//PariODispari(8);

// Non è un invocazione
//PariODispari

console.log(totale);
// - dichiariamo chi è il vincitore
