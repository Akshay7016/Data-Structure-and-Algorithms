function countVowels(str) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    let count = 0;
    const formattedStr = str.toLowerCase();

    for (let i = 0; i < formattedStr.length; i++) {
        if (vowels.includes(formattedStr.charAt(i))) count++;
    }

    return count;
}

module.exports = countVowels;
