var a = 100;
let b = 100;//Created in Script
const c = 100;//Created in Script
{
    var a = 10;//Created in Global Scope;
    let b = 20;//Created in Block Scope
    const c = 30;//Created in Block Scope
    console.log(a);
    console.log(b);//Will output 20 because of Shadowing
    console.log(c);//Will output 30 because of Shadowing
}
console.log(a);//Will output 10 because of Shadowing
console.log(b);//Will output 100 as "b" exists in Script
console.log(c);//Will output 100 as "c" exists in Script