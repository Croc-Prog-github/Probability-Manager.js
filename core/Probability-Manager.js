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
      throw new Error(`List or instance does not exist. Instance: ${instanceName}, List: ${listName}`);
    }

    const list = this.instances[instanceName][listName];
    list.objects.push({ object, probability });
    list.totalWeight += probability;

    // Verifica che la somma delle probabilità non superi 100
    if (list.totalWeight > 100) {
      throw new Error(`The sum of the probabilities is greater than 100%. Instance: ${instanceName}, List: ${listName}`);
    }
  }

  getRandomObject(instanceName, listName) {
    if (!this.instances[instanceName] || !this.instances[instanceName][listName]) {
      throw new Error(`List or instance does not exist. Instance: ${instanceName}, List: ${listName}`);
    }

    const list = this.instances[instanceName][listName];
    let random = Math.random() * list.totalWeight;

    for (let { object, probability } of list.objects) {
      if (random < probability) {
        return object;
      }
      random -= probability;
    }

    throw new Error(`Failed to get random object. Instance: ${instanceName}, List: ${listName}`);
  }

  clearInstance(instanceName) {
    if (this.instances[instanceName]) {
      delete this.instances[instanceName];
    } else {
      throw new Error(`Instance does not exist. Instance: ${instanceName}`);
    }
  }

  clearAll() {
    this.instances = {};
  }
}