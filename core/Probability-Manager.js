class ProbabilityManager {
    constructor() {
        this.events = [];
        this.totalWeight = 0;
    }

    addEvent(event, probability) {
        this.events.push({ event, probability });
        this.totalWeight += probability;
    }

    getRandomEvent() {
        let random = Math.random() * this.totalWeight;
        for (let { event, probability } of this.events) {
            if (random < probability) {
                return event;
            }
            random -= probability;
        }
    }

    clearEvents() {
        this.events = [];
        this.totalWeight = 0;
    }
}