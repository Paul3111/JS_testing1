
/*
The Thermostat starts with an initial temperature of 20 degrees
You can increase the temperature with an up method
You can decrease the temperature with a down method
The minimum possible temperature is 10 degrees
The Power saving mode is on by default but it can also be turned off
If power saving mode is on, the maximum temperature is 25 degrees
If power saving mode is off, the maximum temperature is 32 degrees
You can reset the temperature to 20 with a reset method
You can ask about the thermostat's current energy usage: < 18 is low-usage,
<= 25 is medium-usage, anything else is high-usage.
*/

const Thermostat = require ('../lib/thermostat')

describe ('Thermostat.', () => {
    it('Starts with initial temperature of 20 degrees.', () => {
        thermostat1 = new Thermostat();
        expect(thermostat1.getTemperature()).toEqual (20);
    });

    it('Increases temperature by 2 degrees (gets to 22).', () => {
        thermostat1 = new Thermostat();
        thermostat1.up();
        thermostat1.up();
        expect(thermostat1.getTemperature()).toEqual (22);
    });

    it('Decreases temperature by 1 degrees (gets to 19).', () => {
        thermostat1 = new Thermostat();
        thermostat1.down();
        expect(thermostat1.getTemperature()).toEqual (19);
    });

    it('Decreases temperature by 1 degree (gets to 21).', () => {
        thermostat1 = new Thermostat();
        thermostat1.up();
        thermostat1.up();
        thermostat1.down();
        expect(thermostat1.getTemperature()).toEqual (21);
    });

    it('Decreases temperature by 2 degrees (gets to 20).', () => {
        thermostat1 = new Thermostat();
        thermostat1.up();
        thermostat1.up();
        thermostat1.down();
        thermostat1.down();
        expect(thermostat1.getTemperature()).toEqual (20);
    });

    it('Tries to decrease temperature below the min value (10) and returns error.', () => {
        thermostat1 = new Thermostat();
        thermostat1.down();
        thermostat1.down();
        thermostat1.down();
        thermostat1.down();
        thermostat1.down();
        thermostat1.down();
        thermostat1.down();
        thermostat1.down();
        thermostat1.down();
        thermostat1.down();
        expect(() => { thermostat1.down(); }).toThrow ('The minimum temperature is 10! Go back to warmth!');
    });

    it('Sets power saving mode off.', () => {
        thermostat1 = new Thermostat();
        state = thermostat1.setPowerSavingMode(false)
        expect(thermostat1.maxTemperature()).toEqual (32);
    });

    it('Sets power saving mode on.', () => {
        thermostat1 = new Thermostat();
        state = thermostat1.setPowerSavingMode(false)
        state = thermostat1.setPowerSavingMode(true)
        expect(thermostat1.maxTemperature()).toEqual (25);
    });

    it('Throws error when PSM is on and temp hits max.', () => {
        thermostat1 = new Thermostat();
        for (let i = 0 ; i < 5 ; i++) {
        thermostat1.up();
          }
        expect(() => { thermostat1.up(); }).toThrow ('The max temperature is 25!');
    });

    it('Throws error when PSM is off and temp hits max.', () => {
        thermostat1 = new Thermostat();
        thermostat1.setPowerSavingMode(false);
        for (let i = 0 ; i < 12 ; i++) {
        thermostat1.up();
          }
        expect(() => { thermostat1.up(); }).toThrow ('The max temperature is 32!');
    });

    it('Resets temperature to 20 degrees.', () => {
        thermostat1 = new Thermostat();
        thermostat1.down();
        thermostat1.down();
        thermostat1.reset();
        expect(thermostat1.getTemperature()).toEqual (20);
    });

    it('Asks energy usage and thermostat responds medium-usage.', () => {
        thermostat1 = new Thermostat();
        expect(thermostat1.usage()).toEqual ('Medium');
    });

    it('Asks energy usage and thermostat responds low-usage.', () => {
        thermostat1 = new Thermostat();
        for (let i = 0 ; i < 7 ; i++) {
            thermostat1.down();
        }
        expect(thermostat1.usage()).toEqual ('Low');
    });

    it('Asks energy usage and thermostat responds high-usage.', () => {
        thermostat1 = new Thermostat();
        thermostat1.setPowerSavingMode(false);
        for (let i = 0 ; i < 6 ; i++) {
            thermostat1.up();
        }
        expect(thermostat1.usage()).toEqual ('High');
    });
});