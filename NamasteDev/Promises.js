const cart = ["shoes", "pants", "kurta"];

// createOrder(cart, function (orderId) {
//     proceedToPayment(orderId);
// });

// const promise = createOrder(cart);

// promise.then(function (orderId) {
//     proceedToPayment(orderId);
// });


const GITHUB_API = "https://api.github.com/user/akshaymarch7";

const user = fetch(GITHUB_API);

console.log(user);

user.then(function (data) {
    console.log(data);
})

//Using Callback

/*createOrder(cart, function (orderId) {
    proceedToPayment(orderId, function (paymentInfo) {
        showOrderSummary(paymentInfo, function () {
            updateWalletBalance();
        });
    });
});*/

//Using promises

createOrder(cart)
    .then(function (orderId) {
        return proceedToPayment(orderId);
    })
    .then(function (paymentInfo) {
        return showOrderSummary(paymentInfo);
    })
    .then(function (paymentInfo) {
        return updateWalletBalance(paymentInfo);
    });

// Using arrow functions

createOrder(cart)
    .then((orderId) => proceedToPayment(orderId))
    .then((paymentInfo) => showOrderSummary(paymentInfo))
    .then((paymentInfo) => updateWalletBalance(paymentInfo));
