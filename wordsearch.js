//A function that searches through a letters array to find a given word
const wordSearch = (letters, word) => {
    const horizontalJoin = letters.map(ls => ls.join(''))
    for (let i = 0; i < letters.length; i++) {
        let verticalJoin = letters.map((ls) => ls[i]).join('');
        let reversedV = verticalJoin.split("").reverse().join("");
        if (verticalJoin.includes(word) || reversedV.includes(word)) {
            return true;
        };
    };
    for (l of horizontalJoin) {
        let reversedL = l.split("").reverse().join("");
        if (l.includes(word) || reversedL.includes(word)) {
            return true;
        }
    };
    return false;
}

module.exports = wordSearch

