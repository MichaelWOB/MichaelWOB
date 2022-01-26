function stringLength(value) {
    return value.length;
}
var count = stringLength("test 1");
console.log(count);
function stringNoSpaces(value) {
    return value.replace(/\s/, "").length;
}
var count2 = stringNoSpaces("h e l l o");
console.log(count2);
function count_both(value, spaces) {
    if (spaces) {
        return value.length;
    }
    else {
        return value.replace(/\s/, "").replace.length;
    }
}
var countBoth = count_both("test 1", true);
console.log(countBoth);
