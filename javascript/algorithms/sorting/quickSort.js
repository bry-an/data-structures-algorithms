const quickSort = arr => {

    if (arr.length <= 1)
    return arr

    const [pivot, ...rest] = arr;

    const left = []
    const right = []

    rest.forEach(num => {
        (num < pivot)
            ? left.push(num)
            : right.push(num)
    })

     return quickSort(left).concat(pivot).concat(quickSort(right))
}

console.log(quickSort([1, 6, 3, 7, 22, 8, 12]))

/*
Function takes an array
Necessary ending condition since it's recursive:
if (arr <=1) return arr
Take an array, split at pivot (convenient if it's first elem so can use with spread operator), 
make two new arrays, left and right, and push smaller-than-pivot to left, larger-or-equal to right,
then call quick sort on both arrays while concatenating the pivot in the middle. 
Each of those calls to quick sort will telescope through the stack until they return, and will 
concatenate when they do. 

*/