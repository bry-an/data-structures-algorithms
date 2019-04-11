const flattenBoard = function (board) {
    const result = []
    for (let i = 0; i < board.length; i++) {
        result.push(...board[i])
    }
    return result
}

const checkIfContained = function (dictionary, board) {
    const checkArray = new Array(board.length).fill(0)
    const result = []
    const flattenedBoard = flattenBoard(board)
    for (let i = 0; i < flattenedBoard.length; i++) {
        checkArray[flattenedBoard[i].charCodeAt(0)]++
    }
    for (let i = 0; i < dictionary.length; i++) {
        for (let j = 0; j < dictionary[i].length; j++) {
            if (!flattenedBoard[dictionary[i].charCodeAt(j)])
            break
        }
        result.push(dictionary[i])
    }
    return result
}

function boggleSearch(dictionary, board) {
    let indX = 0
    let indY = 0
    const flattenedBoard = flattenBoard(board)


}

console.log(checkIfContained(['hello', 'goodbye'], [['h', 'e'], ['w', 'o', 'l', 'l', 'd']]))