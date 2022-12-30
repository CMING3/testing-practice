function reverseString(string) {
    let reversed = string.toString().split("").reverse().join("")
    if (typeof(string)=== "number"){
        return parseInt(reversed)
    } else {
        return reversed
    }

}
module.exports = reverseString;