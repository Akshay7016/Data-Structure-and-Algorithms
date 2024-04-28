function arrayIntersection(arr1,arr2) {
    return arr1.filter((ele) => arr2.includes(ele));
}

module.exports = arrayIntersection;
