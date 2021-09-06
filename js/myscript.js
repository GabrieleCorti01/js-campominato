  
let listaBombe = [];      
let numeroBombe;           
let numeroMassimo;
let numeroScelte;          
const listaLivelli = ['facile', 'medio', 'difficile'];
let livelloScelto = prompt('Inserisci un livello di difficoltà tra: facile, medio, difficile');


while (livelloScelto.length == 0 || !listaLivelli.includes( livelloScelto.trim().toLowerCase())){
    livelloScelto = prompt('DIfficoltà non valida! Inserisci un livello di difficoltà tra: facile, medio, difficile');
}

let listaTemporanea = numeriDaLivello(livelloScelto);
numeroBombe = listaTemporanea[0];       
numeroMassimo = listaTemporanea[1];

numeroScelte = numeroMassimo - numeroBombe;

let listaScelte = [];

while ( listaBombe.length < numeroBombe){
    const numeroRandomico = getRandomNumber(1, numeroMassimo);   
    if (!listaBombe.includes(numeroRandomico)){ 
        listaBombe.push(numeroRandomico);
    }
}
console.log(listaBombe);


while ( listaScelte.length < numeroScelte ){   

    let numeroUtente = chiediNumero("Inserisci un numero"); 
    
    while ( !isNumeroValido(numeroUtente, 1, numeroMassimo) || (listaScelte.includes(numeroUtente) == true) ){
        if ( (listaScelte.includes(numeroUtente) == true) ) {   
            numeroUtente = chiediNumero( numeroUtente + " è già stato scelto! Inseriscine uno diverso!");  
        } else if ( numeroUtente < 1 || numeroUtente > numeroMassimo ) { 
            numeroUtente = chiediNumero("Hai inserito un numero fuori dall'intervallo consentito! Inseriscine uno tra 1 e " + numeroMassimo + "!");
        } else {    
            numeroUtente = chiediNumero("Hai inserito un numero non valido! Inserisci nuovamente un numero");   
        }
    }
    if ( listaBombe.includes(numeroUtente) ) {     
        alert('Mi dispiace hai perso, il tuo punteggio è: ' + listaScelte.length);
        listaScelte.length = numeroScelte; 
    } else {   
        listaScelte.push(numeroUtente);     
        if (listaScelte.length == numeroScelte){
            alert('Complimenti, hai vinto!!! Il tuo punteggio è: ' + listaScelte.length);  
        }
    }
}
console.log(listaScelte);


// INIZIO FUNZIONI!!

function numeriDaLivello(livelloDeciso){
    let numeroTemporaneoBombe;
    let tettoRandomicoTemporaneo;

    switch (livelloDeciso){
        case 'facile':
            numeroTemporaneoBombe = 16;
            tettoRandomicoTemporaneo = 100;
            break;
        case 'medio':
            numeroTemporaneoBombe = 16;
            tettoRandomicoTemporaneo = 80;
            break;
        case 'difficile':
            numeroTemporaneoBombe = 16;
            tettoRandomicoTemporaneo = 50;
            break;
        default:
            numeroTemporaneoBombe = 16;
            tettoRandomicoTemporaneo = 100;
    }
    return [numeroTemporaneoBombe, tettoRandomicoTemporaneo];
}


function chiediNumero (stringa){
    return parseInt(prompt(stringa));
}


function getRandomNumber(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


function isNumeroValido(numeroUtenteTemporaneo, numeroMin, numeroMax){
    if ( numeroUtenteTemporaneo < numeroMin || numeroUtenteTemporaneo > numeroMax 
        || isNaN(numeroUtenteTemporaneo)){ 
        return false;
    }
    return true;
}




