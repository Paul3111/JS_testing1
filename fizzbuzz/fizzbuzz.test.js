const fizz = require ('../../JavaScript-learning/fizzbuzz');

describe('Fizzbuzz.', () => {
    it('Returns Fizz when parameter is 3.', () => {
        expect(fizz(3)).toEqual ('Fizz');
    });

    it('Returns Buzz when parameter is 5.', () => {
        expect(fizz(5)).toEqual ('Buzz');
    });

    it('Returns 8 when parameter is 8.', () => {
        expect(fizz(8)).toEqual (8);
    });

    it('Returns FizzBuzz when parameter is 15.', () => {
        expect(fizz(15)).toEqual ('FizzBuzz');
    });

    it('Returns Fizz when parameter is 18.', () => {
        expect(fizz(18)).toEqual ('Fizz');
    });

    it('Returns Buzz when parameter is 20.', () => {
        expect(fizz(20)).toEqual ('Buzz');
    });
});