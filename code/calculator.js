const checkValid = (x, y) => {
    if (typeof(x) !== "number" || typeof(y) !== "number"){
        return false
    } else {
        return true
    }
}

const add = (x, y) => {
    if (!checkValid(x, y)){
        return "Not a Valid integer"
    }
    return x+y
}

const subtract = (x, y) => {
    if (!checkValid(x, y)){
        return "Not a Valid integer"
    }
    return x-y
}

const divide = (x, y) => {
    if (!checkValid(x, y)){
        return "Not a Valid integer"
    }
    return x/y
}

const multiply = (x, y) => {
    if (!checkValid(x, y)){
        return "Not a Valid integer"
    }
    return x*y
}

const calculator = {
    add,
    subtract,
    divide,
    multiply
}

module.exports = calculator;