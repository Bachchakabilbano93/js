function a() {
    var x = 0, z = 10; //z is Garbage collected, x is not
    return function b() {
        console.log(x);
    }
}

var y = a();
y();