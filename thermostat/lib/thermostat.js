class Thermostat {
    constructor() {
        this.temperature = 20;
        this.max_temperature = 25;
    };

    getTemperature() {
        return this.temperature;
    };

    up() {
        if (this.temperature < this.max_temperature) {
            return this.temperature += 1;
        } else {
            throw new Error(`The max temperature is ${this.max_temperature}!`);
        }
    }

    down() {
        if (this.temperature > 10) {
            return this.temperature -= 1;
        } else {
            throw new Error('The minimum temperature is 10! Go back to warmth!');
        }
    }

    setPowerSavingMode(state) {
        if (state === true) {
            return this.max_temperature = 25;
        } else {
            return this.max_temperature = 32;
        }
    }

    maxTemperature() {
        return this.max_temperature;
    }

    reset() {
        return this.temperature = 20;
    }

    usage() {
        if (this.temperature < 18) {
            return 'Low';
        } else if (this.temperature <= 25) {
            return 'Medium';
        } else {
            return 'High';
        }
    }
}

module.exports = Thermostat;