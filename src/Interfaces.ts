interface LabelledValue {
    label: string;
}

function printLabel(labelledObj: LabelledValue) {
    console.log(labelledObj.label);
}

let myObj = { size: 10, label: "Size 10 Object" };
printLabel(myObj);

interface SquareConfig {
    // Optional properties
    color?: string;
    width?: number;
    [propName: string]: any;
}

function createSquare(config: SquareConfig): { color: string; area: number } {
    let newSquare = { color: "white", area: 100 };
    if (config.color) {
        newSquare.color = config.color;
    }
    if (config.width) {
        newSquare.area = config.width * config.width;
    }
    return newSquare;
}

let mySquare = createSquare({ color: "black" } as SquareConfig);
console.log(mySquare);
let yourSquare = createSquare({ center: 0 } as SquareConfig);
console.log(yourSquare);

interface Point {
    readonly x: number;
    readonly y: number;
}

let point: Point = { x: 1, y: 2 };
//point.x = 2; Error

// Array vs ReadonlyArray
let myArray: Array<any> = [1, 2, "3"];
myArray.push(4);
myArray[0] = 1;
let myReadonlyArray: ReadonlyArray<any> = myArray;
//myReadonlyArray.push(5); Error
//myReadonlyArray[0] = 1; Error
//let yourArray: Array<any> = myReadonlyArray; Error
let yourArray: Array<any> = myReadonlyArray as any[];
console.log(yourArray);

// Functions in interfaces
interface SearchFunc {
    (source: string, subString: string): boolean;
}

let mySearch: SearchFunc;
mySearch = function (src: string, sub: string): boolean {
    let result = src.search(sub);
    return result > -1;
}
let yourSearch: SearchFunc = function (src, sub) {
    return src.search(sub) > -1;
}
console.log(yourSearch("Hi, I'm Johny Knoxville!", "Knoxville"));

// Indexable Types
interface StringArray {
    [index: number]: string;
}

let array: StringArray;
array = ["Bob", "Fred"];
let myStr: string = array[0];
console.log(myStr);