{
    var a = 10;//Created in Global Scope
    let b = 20;//Created in Block Scope
    const c = 30;//Created in Block Scope
    console.log(a);
    console.log(b);
    console.log(c);
}
console.log(a);
// console.log(b);//ReferenceError
// console.log(c);//ReferenceError
