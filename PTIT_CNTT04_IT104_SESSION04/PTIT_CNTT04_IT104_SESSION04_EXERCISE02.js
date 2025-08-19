"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let numbers = [8.5, 7.2, 9.0, 6.8, 7.5, 8.0, 6.9, 9.2, 7.8, 8.3];
function agv(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    return sum;
}
let average = agv(numbers) / numbers.length;
console.log(`Giá trị trung bình của mảng là: ${average.toFixed(2)}`);
//# sourceMappingURL=PTIT_CNTT04_IT104_SESSION04_EXERCISE02.js.map