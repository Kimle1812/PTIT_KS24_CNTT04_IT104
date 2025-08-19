function isPrime(n) {
    if (n < 2)
        return false;
    for (var i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0)
            return false;
    }
    return true;
}
function processInput(input) {
    if (typeof input === "string") {
        if (/^\d+$/.test(input)) {
            let num = Number(input);
            console.log(num ** 2);
        } else {
            let letterCount = (input.match(/[a-zA-Z]/g) || []).length;
            console.log(`${letterCount} ký tự chữ cái`);
        }
    }
    else if (typeof input === "number") {
        if (isPrime(input)) {
            console.log("Là số nguyên tố");
        }
        else {
            console.log("Không phải số nguyên tố");
        }
    }
    else if (typeof input === "boolean") {
        if (input) {
            console.log("Giá trị là true - tiến hành xử lý");
        }
        else {
            console.log("Giá trị là false - dừng xử lý");
        }
    }
}
processInput("123");
processInput("abc123!");
processInput(29);
processInput(10);
processInput(true);
processInput(false);
