function findMissingNumber(arr) {
    const arrayLength = arr.length + 1;
    const total = (arrayLength * (arrayLength + 1)) / 2;
    const arraySum = arr.reduce((acc, ele) => acc + ele, 0)

    return total - arraySum;
}

module.exports = findMissingNumber;
