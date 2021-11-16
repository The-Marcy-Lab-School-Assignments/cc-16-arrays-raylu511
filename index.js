//write your code here
function replaceWithYerr(array, startIndex = 0, numOfElements = array.length) {
    const yerrArray = [...array];
    // If only 1 or 2 arguments is given, add startingIndex to numOfElements
    // Iterate from startIndex to numOfElements
    // Replace element in iteration with 'yerr'
    if (numOfElements !== array.length) {
        numOfElements += startIndex;
    }
    for (let i = startIndex; i < numOfElements; i++) {
            yerrArray[i] = 'yerr';
    }
    return yerrArray;
}

const months = ['Jan', 'February', 'March', 'April', 'May', 'June'];    
console.log(replaceWithYerr(months, 1, 3));     //['Jan', 'yerr', 'yerr, 'yerr', 'May', 'June']
console.log(replaceWithYerr(months, 1));        //['Jan', 'yerr', 'yerr, 'yerr', 'yerr', 'yerr']
console.log(replaceWithYerr(months));           //['yerr', 'yerr', 'yerr, 'yerr', 'yerr', 'yerr']