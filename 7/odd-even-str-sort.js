const str1 = "CodeWars"


function sortMyString (s) {
    const evenChars = []
    const oddChars = []
    s.split('').forEach((strChar, i) => {
        if (i%2 === 0) {
            oddChars.push(strChar)
        } else {
            evenChars.push(strChar)
        }
    });

    const result = evenChars.join('') + ' ' + oddChars.join('')
    console.log(result)
    return result
}

const sortMyStringRun = () => {
    sortMyString(str1)
}

module.exports = {
    sortMyStringRun
}