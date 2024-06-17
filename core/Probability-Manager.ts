declare module "https://raw.githubusercontent.com/Croc-Prog-github/Probability-Manager.js/main/core/Probability-Manager.js" {
  class ProbabilityManager {
    constructor();
    addList(instanceName: string, listName: string): void;
    addObject(instanceName: string, listName: string, object: string, probability: number): void;
    getRandomObject(instanceName: string, listName: string): string;
    clearInstance(instanceName: string): void;
    clearAll(): void;
  }
  export default ProbabilityManager;
}