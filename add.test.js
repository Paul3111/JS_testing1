const addition = require ('./add');

describe('add', () => {
    it('Adds 2 and 2', () => {
        expect(addition(2,2)).toBe(4);
    });

    it('Adds 3 and 1', () => {
        expect(addition(3,1)).toBe(4);
    });

    it('Adds 128 and 2', () => {
        expect(addition(128,2)).toBe(130);
    });
});