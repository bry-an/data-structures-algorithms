// if length === 0 || 1 return false
// copy each letter to an array
// set subsequence index to zero
// at each letter, compare if letter === subsequence[index]
// true: increment index
// false, check subseq[0]
        

const subpatternRec = str => {
    if (str.length === 0 || str.length === 1) {
        return false;
    }
    const strArr = str.split('');
    const subsequence = [];

    strArr.forEach(letter => {
        
        subsequence.push(letter);


        
    });
};
