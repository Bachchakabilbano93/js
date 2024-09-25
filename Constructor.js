function Alien(name, tech) {
    this.name = name;
    this.tech = tech;
    // return this;

    this.work = function () {
        console.log("solving bugs for 12 hours");
    }

    // return 7; Skips the line as the return type is not an Object and this is Constructor Function

}

let alien1 = new Alien("Abir", "JS");
let alien2 = new Alien("Navneet", "C#");

alien1.tech = "Blockchain";

console.log(alien1);
console.log(alien2);

alien1.work();