const multiplication = require('./multiply');

describe('Multiply.', () => {
    it('Multiplies 2 and 3', () => {
        expect(multiplication(2,3)).toBe(6);
    });

    it('Multiplies 9 and 0', () => {
        expect(multiplication(9,0)).toBe(0);
    });
});