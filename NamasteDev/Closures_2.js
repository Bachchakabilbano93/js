function x() {
    var a = function y() {
        console.log(a);
    };
    a();
}
x();
x(function y() {
    console.log(a);
});