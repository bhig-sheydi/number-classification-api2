function isPrime(num) {
    if (num < 2) return false;
    if (num === 2 || num === 3) return true;
    if ((num & 1) === 0 || num % 3 === 0) return false; // Faster even check
    for (let i = 5; i * i <= num; i += 6) {
        if (num % i === 0 || num % (i + 2) === 0) return false;
    }
    return true;
}

function isArmstrong(num) {
    let originalNum = num;
    num = Math.abs(num); // Work with positive digits
    let sum = 0, temp = num, power = 0;

    // Fast digit count without log
    while (temp > 0) {
        power++;
        temp = (temp / 10) | 0; // Faster than Math.floor
    }

    temp = num;
    while (temp > 0) {
        let digit = temp % 10;
        let powered = 1;
        for (let i = 0; i < power; i++) powered *= digit; // Faster than Math.pow()
        sum += powered;
        temp = (temp / 10) | 0;
    }

    return sum === Math.abs(originalNum);
}

function getDigitSum(num) {
    let sum = 0;
    num = Math.abs(num); // Ensure it's positive
    while (num > 0) {
        sum += num % 10;
        num = (num / 10) | 0; // Faster than Math.floor
    }
    return sum;
}

function isPerfect(num) {
    if (num < 2 || (num & 1) === 1) return false; // No odd perfect numbers known
    let sum = 1, sqrtNum = Math.sqrt(num);
    
    for (let i = 2; i <= sqrtNum; i++) {
        if (num % i === 0) {
            sum += i + (i !== num / i ? num / i : 0);
        }
    }
    return sum === num;
}

function getProperties(num) {
    const properties = [];
    if (isArmstrong(num)) properties.push("armstrong");
    properties.push((num & 1) === 0 ? "even" : "odd"); // Faster than modulus
    if (isPerfect(num)) properties.push("perfect");
    return properties;
}

module.exports = { isPrime, isArmstrong, getDigitSum, isPerfect, getProperties };
