function fizzBuzzArray(num) {
    const result = []

    for (let i = 1; i <= num; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            result.push("FizzBuzz");
            continue;
        }

        if (i % 3 === 0) {
            result.push("Fizz");
            continue;
        }

        if (i % 5 === 0) {
            result.push("Buzz");
            continue;
        }

        result.push(i)
    }

    return result;
}

module.exports = fizzBuzzArray;
