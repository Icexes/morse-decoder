const MORSE_TABLE = {
    '.-': 'a',
    '-...': 'b',
    '-.-.': 'c',
    '-..': 'd',
    '.': 'e',
    '..-.': 'f',
    '--.': 'g',
    '....': 'h',
    '..': 'i',
    '.---': 'j',
    '-.-': 'k',
    '.-..': 'l',
    '--': 'm',
    '-.': 'n',
    '---': 'o',
    '.--.': 'p',
    '--.-': 'q',
    '.-.': 'r',
    '...': 's',
    '-': 't',
    '..-': 'u',
    '...-': 'v',
    '.--': 'w',
    '-..-': 'x',
    '-.--': 'y',
    '--..': 'z',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '-----': '0',
};

function decode(expr) {
    let result = [];
    let inputArr = expr.split("")

    for (let i = 0; i < inputArr.length; i++) {
        if ((+inputArr[i] == 1 || +inputArr[i] == 0) && inputArr[i - 1] == "*") result.push(" ")
        if (inputArr[i] == "1" && i + 1 !== inputArr.length) {
            if (inputArr[i + 1] == "1") {
                result.push("-");
                i++;
            }
            else {
                result.push(".");
                i++;
            }

        }
        if ((i + 1) % 10 == 0) result.push("*");
    }
    return result.join("").split("*").map(elem => {
        if (elem == undefined) return ''
        if (elem.includes(" ")) {
            return " " + MORSE_TABLE[elem.slice(1)]
        }
        return MORSE_TABLE[elem]
    }).join("");
}

module.exports = {
    decode
}
