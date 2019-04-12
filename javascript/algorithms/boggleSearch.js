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
            if (flattenedBoard[dictionary[i].charCodeAt(j)] && j === dictionary[i].length - 1)
                result.push(dictionary[i])
        }
    }
    return result
}

function boggleSearch(dictionary, board) {
    let indX = 0
    let indY = 0
    let indWord = 0
    const results = []
    dictionary.forEach(word => {
        if (board[indX][indY] === word[0]) {
            search(indX, indY, wordInd)
        }
    })



}
