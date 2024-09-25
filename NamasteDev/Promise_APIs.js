// Promise.all() --> Fail Fast, To handle multiple promises together. Takes an array of promises as an input i.e. the input is iterable, wait for all the promises to finish, ouput will be an array of response. Also known as FAIL FAST. As soon as any of the promise is rejected, Promise.all() throws error and the error will be same as the error for the failed promise, the error will be thrown as soon as a promise fails. Although the other promises are not cancelled.
// Promise.allSettled() --> Even if a promise is rejected, it will wait for all promises to settle irrespective of success or failure, output will be an array of the same number of promises as given in input in the same order. Safest option among all. Returns Objects in the array.
// Promise.race() --> Takes an array of promises. Returns value of first settled promise. Whatever promise settles first irrespective of sucess or failure, that will be the result. Error or value of the first settled promise will be the return.
// Promise.any() --> Takes array of promises as input. Wait for first promise to be successful/resolved. Waits for the first settled successful/resolved promise. Returns the value of the first successful promise. If all promise fails, return will be an Aggregate Error i.e. array of all the errors. Seeking for first success.
// Promise Settled --> Got the result. Resolve/Success/Fulfilled:Reject/Failure/Rejected.
// Never have uncaught error in your code

const p1 = new Promise((resolve, reject) => {
    // setTimeout(() => resolve("P1 Success"), 3000);
    setTimeout(() => reject("P1 Fail"), 3000); // For Promise.any()
});

const p2 = new Promise((resolve, reject) => {
    // setTimeout(() => resolve("P2 Success"), 1000);
    // setTimeout(() => reject("P2 Fail"), 1000);
    // setTimeout(() => resolve("P2 Success"), 5000); // For Promise.race()
    setTimeout(() => reject("P2 Fail"), 5000); // For Promise.any()
});

const p3 = new Promise((resolve, reject) => {
    // setTimeout(() => resolve("P3 Success"), 2000);
    setTimeout(() => reject("P3 Fail"), 2000); // For Promise.allSettled()
});

/*Promise.all([p1, p2, p3])
    .then(res => {
        console.log(res);
    })
    .catch((err) => {
        // console.log(err);
        console.error(err);
    });

Promise.allSettled([p1, p2, p3])
    .then(res => {
        console.log(res);
    })
    .catch((err) => {
        // console.log(err);
        console.error(err);
    });

Promise.race([p1, p2, p3])
    .then(res => {
        console.log(res);
    })
    .catch((err) => {
        // console.log(err);
        console.error(err);
    });*/

Promise.any([p1, p2, p3])
    .then(res => {
        console.log(res);
    })
    .catch((err) => {
        // console.log(err);
        console.error(err);
        console.log(err.errors);
        // console.log(err.errors[0]);
    });

