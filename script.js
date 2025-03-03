// https://icanhazdadjoke.com/

async function getJokerFromTheApi() {
    const config = {
        headers: {
            Accept: 'application/json',
        },
    };

    try {
        const response = await fetch('https://icanhazdadjoke.com/', config);

        if (!response.ok) {
            throw new Error(response.status);
        };

        const jokeData = await response.json();

        console.log(jokeData);
    }
    catch(error) {
        console.error(error);
    };
};

getJokerFromTheApi();