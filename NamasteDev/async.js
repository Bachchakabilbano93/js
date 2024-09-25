// async function always returns a promise

const p = new Promise((resolve, reject) => {
    resolve("Promise Resolved Value!!");
});

async function getData() {
    // return "Namaste";
    return p;
};

const dataPromise = getData();

console.log(dataPromise);

dataPromise.then((res) => console.log(res));

p.then((res) => console.log(res));