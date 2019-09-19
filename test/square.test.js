const assert = require('assert');
const Square = require('../square');

describe('Square', ()=> {
    describe('getSide', ()=> {
        it('Should return 5 when created with a side of 5', ()=>{
            const data = new Square(5);
            const result = data.side;
            const expected = 5;
            assert.equal(result,expected);
        })
        it('Should return 0 when created with a side of -1', ()=>{
            const data = new Square(-1);
            const result = data.side;
            const expected = 0;
            assert.equal(result,expected);
        })
        it('Should return 0 when created with a character of a', ()=>{
            const data = new Square('a');
            const result = data.side;
            const expected = 0;
            assert.equal(result,expected);
        })
        it('Should return 0 when created with a undefined', ()=>{
            const data = new Square(undefined);
            const result = data.side;
            const expected = 0;
            assert.equal(result,expected);
        })

    })
})