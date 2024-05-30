// Creazione di un'istanza di ProbabilityManager
const probManager = new ProbabilityManager();

// Aggiunta di eventi con le loro probabilità
probManager.addEvent('Gold Coin', 10);
probManager.addEvent('Silver Coin', 30);
probManager.addEvent('Bronze Coin', 60);

// Estrazione di un evento casuale
const randomEvent = probManager.getRandomEvent();
console.log(`Evento estratto: ${randomEvent}`);
