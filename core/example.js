import probManager from "https://raw.githubusercontent.com/Croc-Prog-github/Probability-Manager.js/main/core/Probability-Manager.js";

// Creazione di istanze e liste
probManager.addList('Istanza1', '1');
probManager.addList('Istanza1', '2');

// Aggiunta di oggetti con probabilità
probManager.addObject('Istanza1', '1', 'Moneta d\'oro', 50);
probManager.addObject('Istanza1', '1', 'Moneta d\'argento', 50);
probManager.addObject('Istanza1', '2', 'Moneta di bronzo', 100);

// Estrazione di un oggetto casuale
let randomEvent = probManager.getRandomObject('Istanza1', '1');
console.log(`Oggetto estratto: `+ randomEvent);

randomEvent = probManager.getRandomObject('Istanza1', '2');
console.log(`Oggetto estratto: `+ randomEvent);

// Pulizia delle istanze
probManager.clearInstance('Istanza1');