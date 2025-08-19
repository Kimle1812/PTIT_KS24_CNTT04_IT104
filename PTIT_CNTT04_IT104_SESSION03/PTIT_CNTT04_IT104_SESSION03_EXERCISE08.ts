function toNumber(value: number | string): number | null {
    const num = typeof value === "string" ? Number(value) : value;
    return isNaN(num) ? null : num;
}

function add(a: number | string, b: number | string): number | string {
    const numA = toNumber(a);
    const numB = toNumber(b);
    if (numA === null || numB === null) {
        return "Không hợp lệ";
    }
    return numA + numB;
}

function subtract(a: number | string, b: number | string): number | string {
    const numA = toNumber(a);
    const numB = toNumber(b);
    if (numA === null || numB === null) {
        return "Không hợp lệ";
    }
    return numA - numB;
}

function multiply(a: number | string, b: number | string): number | string {
    const numA = toNumber(a);
    const numB = toNumber(b);
    if (numA === null || numB === null) {
        return "Không hợp lệ";
    }
    return numA * numB;
}

function divide(a: number | string, b: number | string): number | string {
    const numA = toNumber(a);
    const numB = toNumber(b);
    if (numA === null || numB === null || numB === 0) {
        return "Không hợp lệ";
    }
    return numA / numB;
}

console.log(add("10", "20"));        // 30
console.log(subtract(100, "30"));    // 70
console.log(multiply("abc", 5));     // "Không hợp lệ"
console.log(divide(20, 0));          // "Không hợp lệ"
