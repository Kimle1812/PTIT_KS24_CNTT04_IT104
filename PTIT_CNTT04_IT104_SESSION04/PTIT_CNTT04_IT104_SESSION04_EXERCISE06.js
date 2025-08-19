"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
;
let listProduct = [
    {
        id: "P001",
        name: "Áo sơ mi",
        price: 200000,
        category: {
            id: "C001",
            name: "Thời trang nam"
        },
        discount: 0.1
    },
    {
        id: "P002",
        name: "Quần jeans",
        price: 300000,
        category: {
            id: "C001",
            name: "Thời trang nam"
        },
    },
    {
        id: "P003",
        name: "Quần sooc",
        price: 400000,
        category: {
            id: "C001",
            name: "Thời trang nam"
        },
        discount: 0.3
    }
];
function getFinalPrice(product) {
    if (product.discount) {
        return product.price - (product.price * product.discount);
    }
    return product.price;
}
function printProductInfo(product) {
    console.log(`Tên: ${product.name}
        Giá gốc: ${product.price} VND
        Danh mục: ${product.category.name}
        Giá sau giảm: ${getFinalPrice(product)} VND`);
}
printProductInfo(listProduct[0]);
printProductInfo(listProduct[1]);
printProductInfo(listProduct[2]);
//# sourceMappingURL=PTIT_CNTT04_IT104_SESSION04_EXERCISE06.js.map