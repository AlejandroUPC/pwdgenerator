const charArray = require('../seeds/characters')
const numArray = require('../seeds/numbers')
const specArray = require('../seeds/specials')

module.exports.passWordGen = (len, alpha, num, spec) => {
    var newPwd = ''
    while (newPwd.length < len) {
        typeChar = getRandom(1, 3)
        switch (typeChar) {
            case 1:
                if (Boolean(parseInt(alpha))) {
                    newPwd += getRandomItem(charArray)
                }
                break;
            case 2:
                if (Boolean(parseInt(num))) {
                    newPwd += getRandomItem(numArray)
                }
                break;
            case 3:
                if (Boolean(parseInt(spec))) {
                    newPwd += getRandomItem(specArray)
                }
                break;
        }

    }
    return newPwd

}

const getRandom = (min, max) => {
    randomBase = Math.random()
    return Math.floor(randomBase * max) + min

}

const getRandomItem = (array) => {
    position = getRandom(0, array.length)
    return array[position]
}

