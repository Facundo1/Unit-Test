const assert = require('assert');
const Rectangle = require('../rectangle');

describe('Rectangle', ()=> {
    describe('CalculatePerimeter', ()=> {
        it('Should return 40 when a side is 10', () => {
            const height = 10;
            const width = 10;
            const expected = 40;
            const result = Rectangle.CalculatePerimeter(height,width);
            assert.equal(expected, result);
        })
        it('Should return -4 when height and width are -1', () => {
            const height = -1;
            const width = -1;
            const expected = -4;
            const result = Rectangle.CalculatePerimeter(height,width);
            assert.equal(expected, result);
        })
        it('Should return error when height is [] and width is a', () => {
            const height = [];
            const width = 'a';
            const expected = 'error';
            const result = Rectangle.CalculatePerimeter(height,width);
            assert.equal(expected, result);
        })
        it('Should return error when height is a and width is {}', () => {
            const height = 'a';
            const width = {};
            const expected = 'error';
            const result = Rectangle.CalculatePerimeter(height,width);
            assert.equal(expected, result);
        })
    })
    describe('constructor', () => {
       it('should return 20 when height is 5 and width is 5',() => {
           const height = 5;
           const width = 5;
           const result = new Rectangle(height,width)
           const expectedHeight = 5
           const expectedWidth = 5
           assert.equal(result.height, expectedHeight);
           assert.equal(result.width, expectedWidth);
           })

           it("Should return a new Rectangle(1,1) when height or width are 0", () => {
            const height = 2
            const width = 0
            const expectedHeight = 1
            const expectedWidth = 1
            const result = new Rectangle(height,width)
            assert.equal(result.height, expectedHeight)
            assert.equal(result.width, expectedWidth)
        })
    
        it("Should return a new Rectangle(1,1) when height is 5 and width is -5", () => {
            const height = 5
            const width = -5
            const expectedHeight = 1
            const expectedWidth = 1
            const result = new Rectangle(height,width)
            assert.equal(result.height, expectedHeight)
            assert.equal(result.width, expectedWidth)
        })
       
    })

    describe('set and get height' , () => {

        it("Should return 5 when rectangle.height is 5", () => {
            const rectangle = new Rectangle(1,2)
            const expected = 5
            rectangle.height = 5
            const result = rectangle.height
            assert.equal(result, expected)
        })

        it("Should return 5.5 when rectangle.height is 5", () => {
            const rectangle = new Rectangle(1,2)
            const expected = 5.5
            rectangle.height = 5.5
            const result = rectangle.height
            assert.equal(result, expected)
        })

        it("Should return the same rectangle.height as before when set height to 0", () => {
            const rectangle = new Rectangle(1,2)
            const expected = 1
            rectangle.height = 0
            const result = rectangle.height
            assert.equal(result, expected)
        })
    })

    describe('set and get width' , () => {

        it("Should return 5 when rectangle.width is 5", () => {
            const rectangle = new Rectangle(2,1)
            const expected = 5
            rectangle.width = 5
            const result = rectangle.width
            assert.equal(result, expected)
        })

        it("Should return 5.5 when rectangle.width is 5", () => {
            const rectangle = new Rectangle(2,1)
            const expected = 5.5
            rectangle.width = 5.5
            const result = rectangle.width
            assert.equal(result, expected)
        })

        it("Should return the same rectangle.width as before when set width to 0", () => {
            const rectangle = new Rectangle(2,1)
            const expected = 1
            rectangle.width = 0
            const result = rectangle.width
            assert.equal(result, expected)
        })
    })
    
    describe('get area' , () => {

        it("Should return 4 when height and width are 2", () => {
            const quad = new Rectangle(2,2)
            const expected = 4
            const result = quad.area
            assert.equal(expected, result)
        })

        it("Should return 1 when height or width are 0", () => {
            const quad = new Rectangle(2,0)
            const expected = 1
            const result = quad.area
            assert.equal(expected, result)
        })

        it("Should return 1 when parameter height is 5 and width is []", () => {
            const quad = new Rectangle(2,[])
            const expected = 1
            const result = quad.area
            assert.equal(expected, result)
        })
    })

   
})

    

    

    