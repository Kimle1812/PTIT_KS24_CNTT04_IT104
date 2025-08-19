function findElement(search, arr) {
    let index = arr.findIndex(item => item == search);
    return arr[index];
}
console.log(findElement(3, [1, 3, 5, 8, 10]));
console.log(findElement(10, [1, 3, 5]));
