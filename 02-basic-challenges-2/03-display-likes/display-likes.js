function displayLikes(arr) {
    const arrayLength = arr.length;
    if (arrayLength === 0) return 'no one likes this';
    if (arrayLength === 1) return `${arr[0]} likes this`;
    if (arrayLength === 2) return `${arr[0]} and ${arr[1]} like this`
    if (arrayLength === 3) return `${arr[0]}, ${arr[1]} and ${arr[2]} like this`

    return `${arr[0]}, ${arr[1]} and ${arrayLength - 2} others like this`
}

module.exports = displayLikes;
