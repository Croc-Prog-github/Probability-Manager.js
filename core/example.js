const probManager = new ProbabilityManager();

// Creation of instances and lists
probManager.addList('Instance1', '1');
probManager.addList('Instance1', '2');
      
// Adding objects with probability
probManager.addObject('Instance1', '1', 'Gold coin', 50);
probManager.addObject('Instance1', '1', 'Silver coin', 50);
probManager.addObject('Instance1', '2', 'Bronze coin', 100);
      
// Extraction of a random object
let randomEvent = probManager.getRandomObject('Instance1', '1');
console.log(`Extracted object: `+ randomEvent);

randomEvent = probManager.getRandomObject('Instance1', '2');
console.log(`Extracted object: `+ randomEvent);

// Cleanup of instances
probManager.clearInstance('Instance1');