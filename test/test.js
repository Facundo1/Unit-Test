const assert = require('assert');



describe('Array', ()=> {

  describe('#indexOf()', ()=> {

        it('should return -1 when the value is not present', ()=> {
            const data = [1,2,3];
            const result = data.indexOf(4);
            const expected = -1;
            assert.equal(result,expected);
            });
    });
});