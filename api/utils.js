function isPrime(num) {
    if (num < 2) return false;
    for (let i = 2; i * i <= num; i++) {
        if (num % i === 0) return false;
    }
    return true;
}

function isArmstrong(num) {
    const digits = num.toString().split('');
    const power = digits.length;
    return digits.reduce((sum, d) => sum + Math.pow(parseInt(d), power), 0) === num;
}

function getDigitSum(num) {
    return num.toString().split('').reduce((sum, d) => sum + parseInt(d), 0);
}



  
function isPerfect(num) {
    if (num < 2) return false;
    let sum = 1; // 1 is a proper divisor for all numbers > 1
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

module.exports = { isPrime, isArmstrong, getDigitSum, isPerfect, isArmstrong};