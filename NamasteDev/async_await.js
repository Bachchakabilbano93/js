// async await combo used to handle promises
//async await is just a syntaxical sugar over promises 

const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promise Resolved Value!!");
    }, 10000)

});

const p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promise Resolved Value!!");
    }, 5000)

});

const p3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promise Resolved Value!!");
    }, 5000)

});

const p4 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promise Resolved Value!!");
    }, 10000)

});

//await can only be used inside an async function

// const p = new Promise((resolve, reject) => {
//     resolve("Promise Resolved Value!!");
// });

// async function handlePromise() {
//     const val = await p;
//     console.log(val);
// };

// handlePromise();

// function getData() {
//     // JS Engine will not wait for promise to be resolved
//     p.then((res) => console.log(res)); // Used p instead of p1 promise object(for understanding) but the correct one is p1
//     console.log("Namaste JavaScript");
// };

// getData();

async function handlePromise() {
    console.log("Hello World!!");
    // JS Engine was waiting for promise to be resolved
    const val = await p1;
    console.log("Namaste JavaScript p1");
    console.log(val);

    const val2 = await p2;
    console.log("Namaste JavaScript 2 p2");
    console.log(val2);
};

handlePromise();

async function handlePromise1() {
    console.log("Hello World!!");
    // JS Engine appears to be waiting for promise to be resolved
    const val = await p3;
    console.log("Namaste JavaScript p3");
    console.log(val);


    const val2 = await p4;
    console.log("Namaste JavaScript 2 p4");
    console.log(val2);
};

handlePromise1();