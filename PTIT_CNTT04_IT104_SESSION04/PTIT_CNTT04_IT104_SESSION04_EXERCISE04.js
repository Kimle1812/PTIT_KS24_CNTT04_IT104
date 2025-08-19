"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function handleUnionType(value) {
    if (typeof value === "string") {
        return value.length;
    }
    if (typeof value === "number") {
        if (value % 2 == 0) {
            return "Đây là số chẵn";
        }
        else {
            return "Đây là số lẻ";
        }
    }
    return "Giá trị không hợp lệ";
}
console.log(handleUnionType("Hello"));
console.log(handleUnionType(10));
//# sourceMappingURL=PTIT_CNTT04_IT104_SESSION04_EXERCISE04.js.map