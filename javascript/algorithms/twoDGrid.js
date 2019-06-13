class GridCell {
    constructor(value) {
        this.value = value
        this.left = null
        this.right = null
        this.up = null
        this.down = null
        this.visited = false
    }
}

class TwoDGrid {
    constructor() {
        this.head = null
        this.size = 0
    }
    
    add(arr) {
        if (arr[0].length !== arr.length) {
            console.log("Grid requires an M * N two-dimensional array where M === N")
            return
        }
        
                const cell = new GridCell(arr[row][col])
                if (this.head === null) {
                    this.head = cell
                }
                cell.right = add()
                
            

        
    }
    clockwiseSpiral() {
        if (this.head === null) {
            return null
        }
        function traverse(trav) {
            while (trav.right && !trav.right.visited) {
                console.log(trav.value)
                trav = trav.right
                traverse(trav)
            }
        }
        traverse(this.head)
    }
}

const grid = new TwoDGrid()

grid.add([[1, 2, 3], [4, 5, 6], [7, 8, 9]])

grid.clockwiseSpiral()


/*
if (row > 0) {
                    cell.up = arr[row - 1][col]
                }
                if (row < arr.length - 1) {
                    cell.down = arr[row + 1][col]
                }
                if (col > 0) {
                    cell.left = arr[row][col - 1]
                }
                if (col < arr[0].length - 1) {
                    cell.right = arr[row][col + 1]
                }
*/