function counter() {
    var count = 0;
    function incrementCounter() {
        count++;
    }
}
// console.log(count);

function counter() {
    var count = 0;
    return function incrementCounter() {
        count++;
        console.log(count);
    }
}

var counter1 = counter();
counter1();
counter1();

var counter2 = counter();
counter2();
counter2(); counter2(); counter2(); counter2();