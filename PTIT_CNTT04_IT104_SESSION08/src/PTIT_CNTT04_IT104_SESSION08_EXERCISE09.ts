function _flatten<T>(arr: T[]): T[] {
    const result: T[] = [];
    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        if (Array.isArray(element)) {
            result.push(..._flatten<any>(element));
        } else {
            result.push(element);
        }
    }
    return result;
}

console.log(_flatten([1, [2, [3, 4], 5], 6, 7]));
