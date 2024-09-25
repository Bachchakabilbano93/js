const users = [
    { firstName: "Abir", lastName: "Bhattacharya", age: 31 },
    { firstName: "Navneet", lastName: "Kumar", age: 32 },
    { firstName: "Cristiano", lastName: "Ronaldo", age: 39 },
    { firstName: "Shahrukh", lastName: "Khan", age: 58 },
    { firstName: "John", lastName: "Doe", age: 31 },
];

// list of full names

const output = users.map(x => x.firstName + " " + x.lastName);

console.log(output);

// list of age and count

const outputAge = users.reduce(function (acc, curr) {
    if (acc[curr.age]) {
        acc[curr.age] = ++acc[curr.age];
    }
    else {
        acc[curr.age] = 1;
    }
    return acc;
}, {});

console.log(outputAge);

// list first name of all people age < 35;

const outputLessThan35 = users.filter((x) => x.age < 35).map((x) => x.firstName);

console.log(outputLessThan35);