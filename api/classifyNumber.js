const { isPrime, isArmstrong, getDigitSum , isPerfect, getProperties} = require('../api/utils');
const fetchFunFact = require('./funFactService');

async function classifyNumber(number) {
    const isArm = isArmstrong(number);
    const properties = isArm ? ["armstrong"] : [];
    
    properties.push(number % 2 === 0 ? "even" : "odd");

    const funFact = await fetchFunFact(number);
    
    return {
        number,
        is_prime: isPrime(number),
        is_perfect: isPerfect(number), 
        properties: getProperties(number),
        digit_sum: getDigitSum(number),
        fun_fact: funFact
    };
}

module.exports = classifyNumber;
