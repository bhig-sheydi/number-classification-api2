const axios = require('axios');

async function fetchFunFact(number) {
    try {
        const response = await axios.get(`http://numbersapi.com/${number}/math?json`);
        return response.data.text;
    } catch (error) {
        return "Fun fact not available";
    }
}

module.exports = fetchFunFact;
