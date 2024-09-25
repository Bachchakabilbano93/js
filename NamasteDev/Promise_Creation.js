const cart = ["shoes", "pants", "kurta"];

const promise = createOrder(cart);
// console.log(promise);

promise.then(function (orderId) {
    console.log(orderId);
    // proceedToPayment(orderId);
})
    .catch(function (err) {
        console.log(err.message);
    });


// Producer

function createOrder(cart) {
    const pr = new Promise(function (resolve, reject) {
        if (!validateCart(cart)) {
            const err = new Error("Cart is not valid");
            reject(err);
        };

        // Logic for createOrder

        const orderId = "12345";
        if (orderId) {
            // resolve(orderId);
            setTimeout(function () {
                resolve(orderId)
            }, 5000);
        };
    });

    return pr;

};

function validateCart(cart) {
    // return true;
    return false; // Will cause error in Browser, needs to be handled, so catch is required, code is written above
};