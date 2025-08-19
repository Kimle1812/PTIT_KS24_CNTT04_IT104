function checkBoolean<T extends boolean>(value: T): void {
    if (value) {
        console.log("Xin chào");
    } else {
        console.log("Tạm biệt");
    }
}

checkBoolean(true);
checkBoolean(false);
