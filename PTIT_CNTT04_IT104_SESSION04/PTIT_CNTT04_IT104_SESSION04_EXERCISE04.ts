function handleUnionType(value:string | number): string | number{
    if(typeof value === "string"){
        return value.length;
    }
    if(typeof value === "number"){
        if(value %2 == 0){
            return "Đây là số chẵn";
        }else{
            return "Đây là số lẻ";
        }
    }
    return "Giá trị không hợp lệ";
}
console.log(handleUnionType("Hello"));
console.log(handleUnionType(10));

