function analyzeArray(array) {
    let sum = 0
    array.forEach(function(num){sum += num})
    const average = sum/array.length
    const min = Math.min(...array)
    const max = Math.max(...array)
    const length = array.length

    let object = {
        average: average,
        min: min,
        max: max,
        length: length,
    }

    return object
}
module.exports = analyzeArray