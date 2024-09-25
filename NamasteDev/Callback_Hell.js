console.log("Namaste");

setTimeout(function () {
    console.log("JavaScript");
}, 5000)

console.log("Season 2");

const cart = ["shoes", "pants", "kurta"];


//Callback Hell & Inversion of Control
createOrder(cart, function (orderId) {
    proceedToPayment(orderId, function (paymentInfo) {
        showOrderSummary(paymentInfo, function () {
            updateWalletBalance();
        });
    });
});