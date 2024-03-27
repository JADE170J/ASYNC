//Task 1
async function iterateWithAsyncAwait(array) {
    for (const value of array) {
        console.log(value);
        await new Promise(resolve => setTimeout(resolve, 1000));
    }
}

const values = [1, 2, 3, 4, 5];

iterateWithAsyncAwait(values);
// console.log(Async);

//Tak 2
const axios = require('axios');

async function fetchCNNNews() {
    const url = 'https://google-news13.p.rapidapi.com/entertainment?lr=en-US';

    try {
        const response = await fetch(url, options);
        const result = await response.text();
        console.log(result);
    } catch (error) {
        console.error(error);
    }
}

fetchCNNNews()
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.error(error.message);
    });
    



    //PROF AT THIS POINT MY BRAIN IS PAINING ME.

    //Task 3
