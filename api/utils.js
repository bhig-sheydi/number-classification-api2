function isPrime(num) {
    if (num < 2) return false;
    if (num === 2 || num === 3) return true;
    if (num % 2 === 0 || num % 3 === 0) return false;
    for (let i = 5; i * i <= num; i += 6) {
        if (num % i === 0 || num % (i + 2) === 0) return false;
    }
    return true;
}

function isArmstrong(num) {
    let originalNum = num;
    let sum = 0;
    const power = Math.floor(Math.log10(num)) + 1; // Number of digits
    while (num > 0) {
        const digit = num % 10;
        sum += Math.pow(digit, power);
        num = Math.floor(num / 10);
    }
    return sum === originalNum;
}

function getDigitSum(num) {
    let sum = 0;
    while (num > 0) {
        sum += num % 10;
        num = Math.floor(num / 10);
    }
    return sum;
}

function isPerfect(num) {
    if (num < 2) return false;
    if (num % 2 !== 0) return false; // No known odd perfect numbers
    let sum = 1;
    for (let i = 2; i * i <= num; i++) {
        if (num % i === 0) {
            sum += i;
            if (i !== num / i) {
                sum += num / i;
            }
        }
    }
    return sum === num;
}

function getProperties(num) {
    const properties = [];
    if (isArmstrong(num)) properties.push("armstrong");
    num % 2 === 0 ? properties.push("even") : properties.push("odd")
    if (isPerfect(num)) properties.push("perfect");
    return properties;
}

module.exports = { isPrime, isArmstrong, getDigitSum, isPerfect, getProperties };