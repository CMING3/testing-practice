const caesarCipher = (str) => { 
    let string = ""
    for(let i = 0; i < str.length; i++) {
        let charCode = str.charCodeAt(i)
        let letter
        if (str[i] === "z" || str[i] === "Z") {
            letter = String.fromCharCode(charCode - 25)
        } else if (!str[i].match(/[a-z]/i)) {
            letter = str[i]
        } else {
            letter = String.fromCharCode(charCode + 1)
        }
        string += letter
      }
    return string
  }

module.exports = caesarCipher