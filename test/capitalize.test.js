const capitalize = require("../code/capitalize")

test ("Captialize first character", ()=>{
    expect(capitalize("tom")).toBe("Tom")
})

test ("Captialize a captial letter", ()=>{
    expect(capitalize("Cat")).toBe("Cat")
})

test ("Captialize string with number", ()=>{
    expect(capitalize("123")).toBe("123")
})

test ("Captialize number", ()=>{
    expect(capitalize(123)).toBe(123)
})
