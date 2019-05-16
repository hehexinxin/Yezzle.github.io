/**
 * 格网坐标
 */
class GridMetrix {

    constructor(row, col) {
        this._ROW = row || this._ROW;
        this._COL = col || this._COL;
        this._numbers = this._init();
    }

    _init() {
        let numbers = []
        for (let i = 0; i < this._ROW; i++) {
            let row = [];
            for (let j = 0; j < this._COL; j++) {
                row.push(0);
            }
            numbers.push(row);
        }
        return numbers;
    }

    /**
     * 将一个数组打乱
     * @param {*} arr 
     */
    messArr(arr, fromIndex) {
        if(!fromIndex) fromIndex = 0;
        for (let i = fromIndex; i < arr.length; i++) {
            let random = Math.floor(Math.random() * (arr.length - i)) + i;
            [arr[i], arr[random]] = [arr[random], arr[i]];
        }
        return arr;
    }

    buildMessArr(from, length){
        let result = [];
        for (let i = 0; i < length ; i++) {
            result.push(from+i);
        }
        return this.messArr(result);
    }

    build() {
        let messedIndex = messArr([9, 1, 2, 3, 4, 5, 6, 7, 8]);

        for (const key in messedIndex) {

        }
    }

    fillRowNums(rowIndex, colIndex, messArr){
        // let messedNumbers = this.buildMessArr(colIndex + 1 , this._COL - colIndex);
        let checkResult = this.isInvalide(rowIndex,colIndex);
        
    }

    isInvalide(rx, cy){
        let rowNums , colNums , boxNums, filtableNums ;
        colNums = this.getColNums(cy);
        rowNums = this.getRowNums(rx);
        boxNums = this.getBoxNums(rx, cy);
        filtableNums = this.getFiltableNumbers(Array.from(new Set([...colNums,...rowNums,...boxNums])));
        return [!this.checkArr(rowNums,rx)||!this.checkArr(colNums,cy)||!this.checkArr(boxNums,Math.floor(rx)*3+cy%3),filtableNums] //返回校验结果
    }

    getRowNums(index) {
        return this._numbers[index];
    }

    getColNums(index) {
        return this._numbers.reduce((arrA, arrB) => { return [...arrA, arrB[index]] }, []);
    }

    /**
     * 宫数据
     * @param {*} rowIndex 
     * @param {*} colIndex 
     */
    getBoxNums(rowIndex, colIndex) {
        let rx = Math.floor(rowIndex / 3) * 3;
        let cy = Math.floor(colIndex / 3) * 3;
        let result = [];
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                result.push(this._numbers[rx + i][cy + j]);
            }
        }
        return result;
    }

    getFiltableNumbers(arr){
        let result = [];
        for(let i = 1; i <= this._ROW; i++){
            if(!arr.includes(i)){
                result.push(i)
            }
        }
        return result
    }

    /**
     * 检查行，包含重复非零数则返回false
     * @param {*} rowArr 一行数组的数据
     * @param {*} index 索引
      */
    checkArr(rowArr, index) {
        return !rowArr.some((v, i) => { rowArr[index] == v && i != index && !rowArr[index] })
    }

}

// /**
//  * 宫坐标
//  */
// class BoxMetrix {

// }

let metrix = new GridMetrix(9, 9);
metrix.forEach(row => {
    console.log(row.reduce((a, b) => {
        return `${a}, ${b}`
    }, ''))
});
console.log(metrix._numbers)