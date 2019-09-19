//import Quad from './Quad'
var Quad = require('./quad');

class Square extends Quad {  
    constructor(side = 0) {
      super(side,side);
      this._side = side >= 0 ? side :0;
    }
    set side(value) {
      if (isNaN(value)) throw 'side exptecs a numer';
      this._side = parseFloat(value);
      super.width = this.side;
      super.height = this.side;
  }
  get side() {
    return this._side;
  }
}

module.exports = Square;
//export default Square;
