const cart = ["shoes", "pants", "kurta"];

createOrder(cart)
    .then(function (orderId) {
        console.log(orderId);
        // proceedToPayment(orderId);
        return orderId;
    })
    .catch(function (err) {
        console.log(err.message);
    }) // Even if validateCart returns false, proceedToPayment will be executed
    .then(function (orderId) {
        return proceedToPayment(orderId);
    })
    .then(function (paymentInfo) {
        console.log(paymentInfo);
    })
    .catch(function (err) {
        console.log(err.message);
    })
    .then(function (orderId) {
        console.log("No matter what happens, I will definitely be called.");
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

function proceedToPayment(orderID) {
    return new Promise(function (resolve, reject) {
        resolve("Payment Successful");
    });
};

function validateCart(cart) {
    // return true;
    return false; // Will cause error in Browser, needs to be handled, so catch is required, code is written above
};