class ProbabilityManager {
  constructor() {
    this.instances = {};
  }

  addList(instanceName, listName) {
    if (!this.instances[instanceName]) {
      this.instances[instanceName] = {};
    }
    if (!this.instances[instanceName][listName]) {
      this.instances[instanceName][listName] = { objects: [], totalWeight: 0 };
    }
  }

  addObject(instanceName, listName, object, probability) {
    if (!this.instances[instanceName] || !this.instances[instanceName][listName]) {
      throw new Error("List or instance does not exist");
    }

    const list = this.instances[instanceName][listName];
    list.objects.push({ object, probability });
    list.totalWeight += probability;

    // Verifica che la somma delle probabilità sia 100
    if (list.totalWeight > 100) {
      throw new Error("The sum of the probabilities is greater than 100%");
    } else if (list.totalWeight < 100) {
      throw new Error("The sum of the probabilities is less than 100%");
    }
  }

  getRandomObject(instanceName, listName) {
    if (!this.instances[instanceName] || !this.instances[instanceName][listName]) {
      throw new Error("List or instance does not exist");
    }

    const list = this.instances[instanceName][listName];
    let random = Math.random() * list.totalWeight;

    for (let { object, probability } of list.objects) {
      if (random < probability) {
        return object;
      }
      random -= probability;
    }
  }

  clearInstance(instanceName) {
    if (this.instances[instanceName]) {
      delete this.instances[instanceName];
    }
  }

  clearAll() {
    this.instances = {};
  }
}