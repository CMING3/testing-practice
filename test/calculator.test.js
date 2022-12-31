const calculator = require("../code/calculator")

//test add
test("10 + 27 is 37", ()=>{
    expect(calculator.add(10, 27)).toBe(37)
})

test("-10 + 2 is 8", ()=>{
    expect(calculator.add(-10, 2)).toBe(-8)
})

test("30 + 1.5 is 31.5", ()=>{
    expect(calculator.add(30, 1.5)).toBe(31.5)
})

test("A + 13 is not valid", ()=>{
    expect(calculator.add("A", 13)).toBe("Not a Valid integer")
})

test("A + B is not valid", ()=>{
    expect(calculator.add("A", "B")). toBe("Not a Valid integer")
})

//test substract
test("10 - 27 is -17", ()=>{
    expect(calculator.subtract(10, 27)).toBe(-17)
})

test("-10 - 2 is 8", ()=>{
    expect(calculator.subtract(-10, 2)).toBe(-12)
})

test("30 - 1.5 is 28.5", ()=>{
    expect(calculator.subtract(30, 1.5)).toBe(28.5)
})

test("A - 13 is not valid", ()=>{
    expect(calculator.subtract("A", 13)).toBe("Not a Valid integer")
})

test("A - B is not valid", ()=>{
    expect(calculator.subtract("A", "B")). toBe("Not a Valid integer")
})

//test divide
test("10 / 2 is 5", ()=>{
    expect(calculator.divide(10, 2)).toBe(5)
})

test("-10 / 2 is -5", ()=>{
    expect(calculator.divide(-10, 2)).toBe(-5)
})

test("30 / 1.5 is 20", ()=>{
    expect(calculator.divide(30, 1.5)).toBe(20)
})

test("A / 13 is not valid", ()=>{
    expect(calculator.divide("A", 13)).toBe("Not a Valid integer")
})

test("A / B is not valid", ()=>{
    expect(calculator.divide("A", "B")). toBe("Not a Valid integer")
})

//test multiply
test("10 * 27 is 270", ()=>{
    expect(calculator.multiply(10, 27)).toBe(270)
})

test("-10 * 2 is -20", ()=>{
    expect(calculator.multiply(-10, 2)).toBe(-20)
})

test("30 * 1.5 is 45", ()=>{
    expect(calculator.multiply(30, 1.5)).toBe(45)
})

test("A * 13 is not valid", ()=>{
    expect(calculator.multiply("A", 13)).toBe("Not a Valid integer")
})

test("A * B is not valid", ()=>{
    expect(calculator.multiply("A", "B")). toBe("Not a Valid integer")
})