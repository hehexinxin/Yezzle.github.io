/**
 * 格网坐标
 */
class GridMetrix {  

    constructor(row, col){
        this._ROW = row || this._ROW;
        this._COL = col || this._COL;
        this._numbers = this._init();
    }

    _init(){
        let numbers = []
        for (let i = 0; i < this._ROW; i++) {
            let row = [];
            for (let j = 0; j < this._COL; j++) {
                row.push( j + 1 );
            }
            numbers.push(row);
        }
        return numbers;
    }

    /**
     * 将一个数组打乱
     * @param {*} arr 
     */
    messArr(arr){
        for (let i = 0; i < arr.length; i++) {
           let random = Math.round(Math.random() * (arr.length - i -1)) + i ;
           [arr[i], arr[random]] = [arr[random], arr[i]];
        }
    }

    messMeTrix(){
        for (let i = 0; i < this._ROW; i++) {
            this.messArr(this._numbers[i])
        }
        return this._numbers;
    }

}

// /**
//  * 宫坐标
//  */
// class BoxMetrix {

// }

let metrix = new GridMetrix(9,9);
metrix.messMeTrix().forEach( row => {
    console.log( row.reduce((a,b)=>{
        return `${a}, ${b}`
    },''))
});
console.log(metrix._numbers)