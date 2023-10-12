// # PALINDROMA

// - chiedere all' utente di inserire una parola
//   - creo una variabile prompt ' inserisci una parola ' per l'utente
 //    - converto la stringa della variabile parola in minuscola
const parola = prompt('inserisci una parola').toLowerCase();
console.log(parola)

// - creare una funzione per capire se la parola inserita è palindroma
//   - creo una funzione:
//     - creo una variabile   parola rovesciata 
//     - SE la parola è uguale alla parola rovescita return la parola è palindroma
//     - ALTRIMENTI return non è palindroma