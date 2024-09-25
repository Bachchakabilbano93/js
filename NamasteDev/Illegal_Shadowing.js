let a = 20;  //let variable cannot be shadowed using var, if the var variable is in a function
{
    // var a = 20;
    let a = 25;
}

var b = 20;
{
    let b = 25;
}

let c = 20;
function x() {
    var c = 25;
}

const d = 20;
{
    const d = 100;
    {
        const d = 200;
        console.log(d);
    }
    console.log(d);
}
console.log(d);

//Scope rules for arrow functions and normal functions are same