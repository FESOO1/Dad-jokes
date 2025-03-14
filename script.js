const jokeParagraph = document.querySelector('.main-joke-container-paragraph');
const getNewJokeButton = document.querySelector('#getNewJokeButton');

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

        jokeParagraph.textContent = jokeData.joke;
    }
    catch(error) {
        console.error(error);
        jokeParagraph.textContent = `"What time is it?" I don't know... it keeps changing.`;
    };
};

getJokerFromTheApi();

// INITIALIZE THE GET NEW JOKER BUTTON
getNewJokeButton.addEventListener('click', getJokerFromTheApi);