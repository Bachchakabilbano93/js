let alien = {
    name: "Abir",
    tech: "JS",
    laptop: {
        cpu: "i7",
        ram: 4,
        brand: "hp"
    }
}

// delete alien.laptop;

console.log(alien.laptop?.brand?.length);