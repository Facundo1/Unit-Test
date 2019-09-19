class Quad {
     
    static CalculatePerimeter(height, width) {
        if (isNaN(width)){
            return 'error';
        }
        if (isNaN(height)) {
            return 'error';
        }    
        return parseFloat((width * 2) + (height * 2));
    }
    constructor(height=1, width=1) {
        if (isNaN(width) || isNaN(height)){
            this._height = 1;
            this._width = 1;
            return
        } 
        this._height = parseFloat(height);
        this._width = parseFloat(width);
    }
    
    set height(value) {
        if(isNaN(value)) {
            return this._height = parseFloat(value);
        }
    }
    
    get height() {
        return this._height;
    }
    
    set width(value) {
        if(isNaN(value)){
         return this._width = parseFloat(value);
        }
    }
    
    get width() {
        return this._width;
    }
    
    get area() {
        return  parseFloat(this._width * this._height);
    }
    
    calculatePerimeter() {
        return parseFloat((this._width * 2) + (this._height * 2));
    }
}
module.exports = Quad;
//export default Quad;
