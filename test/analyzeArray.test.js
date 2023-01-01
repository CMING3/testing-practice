const analyzeArray = require("../code/analyzeArray")

test("[2,4,6,8,10] should be ", ()=>{
    expect(analyzeArray([2,4,6,8,10])).toEqual({ average: 6, min: 2, max: 10, length: 5})
})