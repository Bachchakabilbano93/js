let alien = {
    name: "Abir",
    tech: 'JS',
    laptop: {
        cpu: "i7",
        ram: 4,
        brand: "hp"
    }
}

for (let key in alien) {
    console.log(key, alien[key]);
}

for (let p in alien.laptop) {
    console.log(p, alien.laptop[p]);
}