function getFirstEven<T extends number>(arr: T[]): T | undefined {
    return arr.find(item => item % 2 === 0);
}

console.log(getFirstEven([1, 3, 5, 8, 10])); 
console.log(getFirstEven([1, 3, 5]));  
