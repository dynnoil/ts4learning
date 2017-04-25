let cats: string[] = ["Vasya", "Boris", "Barsik"];
let [first, second] = cats;
console.log(first);
console.log(second);

function keepWholeObject(wholeObject: { a: string, b?: number }) {
    let { a, b = 1001 } = wholeObject;
}