function findMaxNumber(numbersArray) {
    let max = numbersArray[0];

    for (let i = 1; i < numbersArray.length; i++) {
        if (max < numbersArray[i]) max = numbersArray[i]
    };

    return max;
}

module.exports = findMaxNumber;
