interface Product {
    id: string;
    name: string;
    price: number;
    category: {
       id: string;
       name: string;
    };
    discount?: number;

};

let listProduct: Product[] = [
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
]

function getFinalPrice(product: Product): number{
    if(product.discount) {
        return product.price - (product.price * product.discount);
    }
    return product.price;
}
function printProductInfo(product: Product): void {
    console.log(`Tên: ${product.name}
        Giá gốc: ${product.price} VND
        Danh mục: ${product.category.name}
        Giá sau giảm: ${getFinalPrice(product)} VND`
    );
    
}
printProductInfo(listProduct[0]!);
printProductInfo(listProduct[1]!);
printProductInfo(listProduct[2]!);