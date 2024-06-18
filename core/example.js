const probManager = new ProbabilityManager();

// Creazione di istanze e liste
probManager.addList('Istanza1', '1');
probManager.addList('Istanza1', '2');

// Aggiunta di oggetti con probabilità
try {
  probManager.addObject('Istanza1', '1', 'Moneta d\'oro', 50);
  probManager.addObject('Istanza1', '1', 'Moneta d\'argento', 50);
  probManager.addObject('Istanza1', '2', 'Moneta di bronzo', 100);
} catch (error) {
  console.error(error.message);
}

// Estrazione di un oggetto casuale
try {
  let randomEvent = probManager.getRandomObject('Istanza1', '1');
  console.log(`Oggetto estratto: ${randomEvent}`);

  randomEvent = probManager.getRandomObject('Istanza1', '2');
  console.log(`Oggetto estratto: ${randomEvent}`);
} catch (error) {
  console.error(error.message);
}

// Pulizia delle istanze
try {
  probManager.clearInstance('Istanza1');
} catch (error) {
  console.error(error.message);
}