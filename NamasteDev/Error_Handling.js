const API_URL = "https://api.github.com/users/Bachchakabilbano93";

async function handlePromise() {
    try {
        const data = await fetch(API_URL);

        const jsonValue = await data.json();

        console.log(jsonValue);

    } catch (err) {
        console.log(err);
    }
};

handlePromise();

// Alternative method of Error Handling

async function handlePromise1() {
    const data = await fetch(API_URL);

    const jsonValue = await data.json();

    console.log(jsonValue);

};

handlePromise1().catch((err) => console.log(err));