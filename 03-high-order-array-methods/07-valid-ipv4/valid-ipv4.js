const isValidIPv4 = (str) => {
    const splittedArray = str.split(".");

    if (splittedArray.length !== 4) {
        return false;
    };

    for (let i = 0; i < 4; i++) {
        if (+splittedArray[i] > 255 || splittedArray[i].startsWith('0')) return false
    }

    return true;

};

module.exports = isValidIPv4;
