function mergeObjects<T, U>(obj1: T, obj2: U): T & U {
    return { ...obj1, ...obj2 };
}

const objA = { name: "Ngọc", age: 25 };
const objB = { job: "Developer", country: "Vietnam" };

const merged = mergeObjects(objA, objB);
console.log(merged);
