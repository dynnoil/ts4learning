function hello() {
    //it's possible
    return say;
}

//prints 'undefined'
console.log(hello());

let say: string = "Meow!";

//prints 'Meow!'
console.log(hello());

// var
for (var i = 0; i < 10; i++) {
    setTimeout(function () { console.log(i); }, 100 * i);
}

// Immediately Invoked Function Expression
for (var i = 0; i < 10; i++) {
    (function (i) {
        setTimeout(function () { console.log(i); }, 100 * i);
    })(i);
}

// Just let
for (let i = 0; i < 10 ; i++) {
    setTimeout(function() { console.log(i); }, 100 * i);
}