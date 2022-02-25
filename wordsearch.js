const wordSearch = (letters, word) => {
    const horizontalJoin = letters.map(ls => ls.join(''))
    for (let i = 0; i < letters.length; i++) {
        let verticalJoin = letters.map((ls) => ls[i]).join('')
        if (verticalJoin.includes(word)) {
            return true;
        }
    }
    for (l of horizontalJoin) {
        let reversedL = l.split("").reverse().join("")
        console.log(reversedL)
        if (l.includes(word) || reversedL.includes(word)) {
            return true;
        }
    }
    return false;

}
console.log((wordSearch([
    ['A', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
    ['S', 'E', 'I', 'N', 'F', 'E', 'L', 'D'],
    ['Y', 'F', 'C', 'F', 'Q', 'U', 'A', 'L'],
    ['H', 'M', 'J', 'T', 'E', 'V', 'R', 'G'],
    ['W', 'H', 'C', 'S', 'Y', 'E', 'R', 'L'],
    ['B', 'F', 'R', 'E', 'N', 'E', 'Y', 'B'],
    ['U', 'B', 'T', 'W', 'A', 'P', 'A', 'I'],
    ['O', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
    ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
], "YEN")));

module.exports = wordSearch

