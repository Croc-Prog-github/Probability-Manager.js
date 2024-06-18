const probManager = new ProbabilityManager();

// Creation of instances and lists
probManager.addList('Instance1', '1');

// Adding objects with probability
probManager.addObject('Instance1', '1', 'Gold coin', 15);
probManager.addObject('Instance1', '1', 'Silver coin', 35);
probManager.addObject('Instance1', '1', 'Bronze coin', 50);

// Extraction of a random object
let randomEvent = probManager.getRandomObject('Instance1', '1');
console.log(`Extracted object: `+ randomEvent);

// Cleanup of instances
probManager.clearInstance('Instance1');