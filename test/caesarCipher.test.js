const caesarCipher = require ("../code/caesarCipher")

test("aabbcc should be bbccdd", ()=>{
    expect(caesarCipher("aabbcc")).toBe("bbccdd")
})

test("AABBCC should be BBCCDD", ()=>{
    expect(caesarCipher("AABBCC")).toBe("BBCCDD")
})

test("xxyyzz should be yyzzaa", ()=>{
    expect(caesarCipher("xxyyzz")).toBe("yyzzaa")
})

test("Gdkkn Vnqkc! should be Hello World!", ()=>{
    expect(caesarCipher("Gdkkn Vnqkc!")).toBe("Hello World!")
})