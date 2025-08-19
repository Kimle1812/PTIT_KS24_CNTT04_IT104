function flatten(arr) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        let second = arr[i];
        for (let j = 0; j < second.length; j++) {
            result.push(second[j]);
        }
    }
    return result;
}
console.log(flatten([[1, 2], [3, 4], [5, 6]]));
console.log(flatten([['apple', 'banana'], ['cherry'], ['date', 'elderberry']]));
