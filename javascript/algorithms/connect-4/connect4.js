
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
                return "Blue Wins"
            }
            if (red.inARow === 3) {
                return "Red Wins"
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
                        return "No winner yet"
                    }
                case left:
                    if (g[r][c - 1] === color) {
                        [color].inARow++
                        if (g[r][c - 1] === color) {
                            trav(right, color)
                        }
                        if (direction[directionPointer + 1]) {
                            blue.inARow = 0
                            red.inARow = 0
                            return trav(direction[++directionPointer], color)
                        }
                        return "No winner yet"
                    }
                case down:
                    if (g[r + 1][c] === color) {
                        [color].inARow++
                        if (g[r + 1][c] === color) {
                            trav(right, color)
                        }
                        if (direction[directionPointer + 1]) {
                            blue.inARow = 0
                            red.inARow = 0
                            return trav(direction[++directionPointer], color)
                        }
                        return "No winner yet"
                    }
                case up:
                    if (g[r - 1][c] === color) {
                        [color].inARow++
                        if (g[r - 1][c] === color) {
                            trav(right, color)
                        }
                        if (direction[directionPointer + 1]) {
                            blue.inARow = 0
                            red.inARow = 0
                            return trav(direction[++directionPointer], color)
                        }
                        return "No winner yet"
                    }
                case upLeft:
                    if (g[r - 1][c - 1] === color) {
                        [color].inARow++
                        if (g[r - 1][c - 1] === color) {
                            trav(right, color)
                        }
                        if (direction[directionPointer + 1]) {
                            blue.inARow = 0
                            red.inARow = 0
                            return trav(direction[++directionPointer], color)
                        }
                        return "No winner yet"
                    }
                case upRight:
                    if (g[r - 1][c + 1] === color) {
                        [color].inARow++
                        if (g[r - 1][c + 1] === color) {
                            trav(right, color)
                        }
                        if (direction[directionPointer + 1]) {
                            blue.inARow = 0
                            red.inARow = 0
                            return trav(direction[++directionPointer], color)
                        }
                        return "No winner yet"
                    }
                case downRight:
                    if (g[r + 1][c + 1] === color) {
                        [color].inARow++
                        if (g[r + 1][c + 1] === color) {
                            blue.inARow = 0
                            red.inARow = 0
                            trav(right, color)
                        }
                        if (direction[directionPointer + 1]) {
                            return trav(direction[++directionPointer], color)
                        }
                        return "No winner yet"
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
                        return "No winner yet"
                    }
                default:
                    return "Specify a direction and color"
            }
        }
        trav(direction[directionPointer], color)
    }
}

