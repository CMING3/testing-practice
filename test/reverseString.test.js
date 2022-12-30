const reverseString = require("../code/reverseString")

test ("reverse a string", ()=>{
    expect(reverseString("Hello")).toBe("olleH")
})

test ("reverse a number", ()=>{
    expect(reverseString(123)).toBe(321)
})

test ("reverse a sentence", ()=>{
    expect(reverseString("Hello World!")).toBe("!dlroW olleH")
})