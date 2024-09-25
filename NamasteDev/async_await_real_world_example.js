const API_URL = "https://api.github.com/users/Bachchakabilbano93";

async function handlePromise() {
    const data = await fetch(API_URL);

    // fetch() => Response Object which is a readable stream => Response.json() => jsonValue

    const jsonValue = await data.json();

    console.log(jsonValue);

    fetch(API_URL).then(res => res.json()).then(res => console.log(res));

};

handlePromise();