//write your code here
function replaceWithYerr(array, startIndex = 0, numOfElements = array.length) {
    const yerrArray = [...array];
    // If only 1 or 2 parameters, iterate from start to array length 
    // Else, iterate from start to numOfElements + startIndex
    // Replace element in iteration with 'yerr'
    if (numOfElements === array.length) {
        for (let i = startIndex; i < array.length; i++) {
            yerrArray[i] = 'yerr';
        }
    }
    else {
        for (let i = startIndex; i < numOfElements + startIndex; i++) {
            yerrArray[i] = 'yerr';
        }
    }
    return yerrArray;
}

const months = ['Jan', 'February', 'March', 'April', 'May', 'June'];    
console.log(replaceWithYerr(months, 1, 3));     //['Jan', 'yerr', 'yerr, 'yerr', 'May', 'June']
console.log(replaceWithYerr(months, 1));        //['Jan', 'yerr', 'yerr, 'yerr', 'yerr', 'yerr']
console.log(replaceWithYerr(months));           //['yerr', 'yerr', 'yerr, 'yerr', 'yerr', 'yerr']