function formatPhoneNumber(num) {
    return `(${num.slice(0, 3).join("")}) ${num.slice(3, 6).join("")}-${num.slice(6).join("")}`
}

module.exports = formatPhoneNumber;
