function reverseString(str) {
    // 1st approach
    let reversedStr = "";
    for (let i = str.length - 1; i >= 0; i--) {
        reversedStr += str.charAt(i);
    }

    return reversedStr;

    // 2nd approach
    // return Array.from(str).reverse().join("");
}

module.exports = reverseString;
