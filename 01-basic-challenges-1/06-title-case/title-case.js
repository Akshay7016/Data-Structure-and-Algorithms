function titleCase(str) {
    return str.split(" ").map((ele) => ele.charAt(0).toUpperCase() + ele.slice(1)).join(" ");
}

module.exports = titleCase;
