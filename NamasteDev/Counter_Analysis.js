function counter1() {
    var count1 = 0;
    function incrementCounter() {
        count1++;
    }
    incrementCounter();
    console.log(count1);
};

function counter2() {
    var count2 = 0;
    return function incrementCounter() {
        count2++;
        console.log(count2);
    }
};

var counter_result_1 = counter1;
console.log(counter_result_1);
counter_result_1();
counter_result_1();

var counter_result_2 = counter2;
console.log(counter_result_2);
counter_result_2()();
counter_result_2()(); counter_result_2()(); counter_result_2()(); counter_result_2()();

var counter_result_3 = counter1();
console.log(counter_result_3);
// counter_result_3();

var counter_result_4 = counter2();
console.log(counter_result_4);
counter_result_4();
counter_result_4(); counter_result_4(); counter_result_4(); counter_result_4();

