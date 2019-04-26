
const inquirer = require("inquirer")

function connect4() {
    const g = new Array(7).fill(new Array(6).fill(0))
    const blue = {
        inARow: 0
    }
    const red = {
        inARow: 0
    }

    function checkWin() {
        const direction = {
            1: up,
            2: down,
            3: left,
            4: right,
            5: upLeft,
            6: upRight,
            7: downLeft,
            8: downRight
        }
        let directionPointer = 0

        function trav(direction, color) {

            if (blue.inARow === 3) {
                return ["Blue Wins", g]
            }
            if (red.inARow === 3) {
                return ["Red Wins", g]
            }
            switch (direction[directionPointer]) {
                case right:
                    if (g[r][c + 1] === color) {
                        [color].inARow++
                        if (g[r][c + 1] === color) {
                            trav(right, color)
                        }
                        if (direction[directionPointer + 1]) {
                            blue.inARow = 0
                            red.inARow = 0

                            return trav(direction[++directionPointer], color)
                        }
                        return g
                    }
                case left:
                    if (g[r][c - 1] === color) {
                        [color].inARow++
                        if (g[r][c - 1] === color) {
                            trav(right, color)
                        }
                        if (direction[directionPointer + 1]) {
                            [color].inARow = 0
                            return trav(direction[++directionPointer], color)
                        }
                        return g
                    }
                case down:
                    if (g[r + 1][c] === color) {
                        [color].inARow++
                        if (g[r + 1][c] === color) {
                            trav(right, color)
                        }
                        if (direction[directionPointer + 1]) {
                            [color].inARow = 0
                            return trav(direction[++directionPointer], color)
                        }
                        return g
                    }
                case up:
                    if (g[r - 1][c] === color) {
                        [color].inARow++
                        if (g[r - 1][c] === color) {
                            trav(right, color)
                        }
                        if (direction[directionPointer + 1]) {
                            [color].inARow = 0
                            return trav(direction[++directionPointer], color)
                        }
                        return g
                    }
                case upLeft:
                    if (g[r - 1][c - 1] === color) {
                        [color].inARow++
                        if (g[r - 1][c - 1] === color) {
                            trav(right, color)
                        }
                        if (direction[directionPointer + 1]) {
                            [color].inARow = 0
                            return trav(direction[++directionPointer], color)
                        }
                        return g
                    }
                case upRight:
                    if (g[r - 1][c + 1] === color) {
                        [color].inARow++
                        if (g[r - 1][c + 1] === color) {
                            trav(right, color)
                        }
                        if (direction[directionPointer + 1]) {
                            [color].inARow = 0
                            return trav(direction[++directionPointer], color)
                        }
                        return g
                    }
                case downRight:
                    if (g[r + 1][c + 1] === color) {
                        [color].inARow++
                        if (g[r + 1][c + 1] === color) {
                            [color].inARow = 0
                            trav(right, color)
                        }
                        if (direction[directionPointer + 1]) {
                            return trav(direction[++directionPointer], color)
                        }
                        return g
                    }
                case downLeft:
                    if (g[r + 1][c - 1] === color) {
                        [color].inARow++
                        if (g[r + 1][c - 1] === color) {
                            blue.inARow = 0
                            red.inARow = 0
                            trav(right, color)
                        }
                        if (direction[directionPointer + 1]) {
                            blue.inARow = 0
                            red.inARow = 0
                            return trav(direction[++directionPointer], color)
                        }
                        return g
                    }
                default:
                    return "Specify a direction and color"
            }
        }
        trav(direction[directionPointer], color)
    }
    function play(color, column) {
        const c = column
        currentRow = 0
        function drop(currentRow) {
            if (!currentRow[c + 1]) {
                currentRow++
                return drop(currentRow)
            }
            g[currentRow][c] = color
            this.checkWin()
        }
        drop(currentRow)
    }
}

