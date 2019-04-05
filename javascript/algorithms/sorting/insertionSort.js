insertionSort = arr => {
    for (let i = 1; i < arr.length; i++) {
        for (let j = 0; j < i; j++) {
            if (arr[i] < arr[j]) {
                const tmp = arr.splice(i, 1)
                arr.splice(j, 0, tmp[0])
            }
        }
    }
    console.log(arr)
}

const inputted = process.argv.splice(2).map(number => parseInt(number))
insertionSort(inputted);


/* The idea is to set up two pointers, one starting at the second element,
another starting at the first. 

If the second pointer points to a value larger than the first, 
splice the second one out and insert it immediately following the first one. 
Then iterate the first pointer and repeat. 

The value of the insertion sort (over bubble sort, eg) is that the relative placement of items is preserved. 

this is good on smaller array where items are close to sorted
Google's V8 uses quick sort when the array size is greater than 10; otherwise it uses insertion sort
*/