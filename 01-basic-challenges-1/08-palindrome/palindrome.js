function isPalindrome(str) {
    // return str === str.split("").reverse().join("");

    const formattedStr = str.toLowerCase().replace(/[^a-z0-9]/g, "");
    const reversedStr = formattedStr.split("").reverse().join("");

    return formattedStr === reversedStr;
}

module.exports = isPalindrome;
