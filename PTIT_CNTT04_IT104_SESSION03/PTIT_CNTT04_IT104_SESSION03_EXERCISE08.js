function toNumber(value) {
    var num = typeof value === "string" ? Number(value) : value;
    if (isNaN(num)) {
        return null;
    }
    return num;
}
function calculate(a, b, operator) {
    var numA = toNumber(a);
    var numB = toNumber(b);
    if (numA === null || numB === null) {
        return "Số không hợp lệ";
    }
    if (operator === "+") {
        return numA + numB;
    }
    else if (operator === "-") {
        return numA - numB;
    }
    else if (operator === "*") {
        return numA * numB;
    }
    else if (operator === "/") {
        if (numB === 0) {
            return "Không thể chia cho 0";
        }
        return numA / numB;
    }
    else {
        return "Toán tử không hợp lệ";
    }
}
console.log(calculate("10", "5", "+")); // 15
console.log(calculate("10", "5", "-")); // 5
console.log(calculate("10", "5", "*")); // 50
console.log(calculate("10", "5", "/")); // 2
console.log(calculate("10", "0", "/")); // Không thể chia cho 0
console.log(calculate("10", "abc", "+")); // Số không hợp lệ
