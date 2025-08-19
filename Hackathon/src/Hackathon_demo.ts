class Customer {
    static autoId = 1;
    id: number;
    name: string;
    email: string;
    shippingAddress: string;

    constructor(name: string, email: string, shippingAddress: string) {
        this.id = Customer.autoId++;
        this.name = name;
        this.email = email;
        this.shippingAddress = shippingAddress;
    }

    getDetails(): string {
        return `Khách hàng [${this.id}] - ${this.name}, Email: ${this.email}, Địa chỉ: ${this.shippingAddress}`;
    }
}

abstract class Product {
    static autoId = 1;
    id: number;
    name: string;
    price: number;
    stock: number;

    constructor(name: string, price: number, stock: number) {
        this.id = Product.autoId++;
        this.name = name;
        this.price = price;
        this.stock = stock;
    }

    sell(quantity: number): void {
        if (this.stock >= quantity) {
            this.stock -= quantity;
        } else {
            console.log(`Không đủ hàng cho sản phẩm ${this.name}`);
        }
    }

    restock(quantity: number): void {
        if (quantity > 0) {
            this.stock += quantity;
        }
    }

    abstract getProductInfo(): string;
    abstract getShippingCost(distance: number): number;
    abstract getCategory(): string;
}

class ElectronicsProduct extends Product {
    warrantyPeriod: number;
    constructor(name: string, price: number, stock: number, warrantyPeriod: number) {
        super(name, price, stock);
        this.warrantyPeriod = warrantyPeriod;
    }
    getProductInfo(): string {
        return `Điện tử: ${this.name}, Giá: ${this.price}, Tồn kho: ${this.stock}, Bảo hành: ${this.warrantyPeriod} tháng`;
    }
    getShippingCost(distance: number): number {
        return 50000;
    }
    getCategory(): string {
        return "Electronics";
    }
}

class ClothingProduct extends Product {
    size: string;
    color: string;
    constructor(name: string, price: number, stock: number, size: string, color: string) {
        super(name, price, stock);
        this.size = size;
        this.color = color;
    }
    getProductInfo(): string {
        return `Quần áo: ${this.name}, Giá: ${this.price}, Tồn kho: ${this.stock}, Size: ${this.size}, Màu: ${this.color}`;
    }
    getShippingCost(distance: number): number {
        return 25000;
    }
    getCategory(): string {
        return "Clothing";
    }
}

class Order {
    static autoId = 1;
    orderId: number;
    customer: string;
    products: { product: Product, quantity: number }[];
    totalAmount: number;

    constructor(customer: string, products: { product: Product, quantity: number }[]) {
        this.orderId = Order.autoId++;
        this.customer = customer;
        this.products = products;
        this.totalAmount = this.calculateTotal();
    }

    calculateTotal(): number {
        return this.products.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
    }

    getDetails(): string {
        let productList = this.products
            .map(item => `- ${item.product.name} x${item.quantity} (${item.product.price} VND)`)
            .join("\n");
        return `Đơn hàng [${this.orderId}] của ${this.customer}:\n${productList}\nTổng: ${this.totalAmount} VND`;
    }
}

class Store {
    products: Product[] = [];
    customers: Customer[] = [];
    orders: Order[] = [];

    addProduct(product: Product): void {
        this.products.push(product);
    }

    addCustomer(name: string, email: string, address: string): void {
        this.customers.push(new Customer(name, email, address));
    }

    createOrder(customerId: number, productQuantities: { productId: number, quantity: number }[]): Order | undefined {
        let customer = this.customers.find(c => c.id === customerId);
        if (!customer) {
            console.log("Không tìm thấy khách hàng.");
            return undefined;
        }

        let orderProducts: { product: Product, quantity: number }[] = [];

        for (const pq of productQuantities) {
            let product = this.products.find(p => p.id === pq.productId);
            if (!product) {
                console.log(`Không tìm thấy sản phẩm ID ${pq.productId}`);
                return undefined;
            }
            if (product.stock < pq.quantity) {
                console.log(`Không đủ tồn kho cho sản phẩm ${product.name}`);
                return undefined;
            }
            product.sell(pq.quantity);
            orderProducts.push({ product, quantity: pq.quantity });
        }

        let order = new Order(customer.name, orderProducts);
        this.orders.push(order);
        return order;
    }

    cancelOrder(orderId: number): void {
        let index = this.orders.findIndex(o => o.orderId === orderId);
        if (index === -1) {
            console.log("Không tìm thấy đơn hàng.");
            return;
        }
        let order = this.orders[index];
        for (let item of order.products) {
            item.product.restock(item.quantity);
        }
        this.orders.splice(index, 1);
        console.log(`Đơn hàng ${orderId} đã bị hủy.`);
    }

    listAvailableProducts(): void {
        this.products.filter(p => p.stock > 0)
            .forEach(p => console.log(p.getProductInfo()));
    }

    listCustomerOrders(customerId: number) {
        let customer = this.customers.find(c => c.id === customerId);
        if (!customer) {
            console.log("Không tìm thấy khách hàng.");
            return;
        }
        this.orders.filter(o => o.customer === customer.name)
            .forEach(o => console.log(o.getDetails()));
    }

    calculateTotalRevenue(): number {
        return this.orders.reduce((sum, o) => sum + o.totalAmount, 0);
    }

    countProductsByCategory() {
        return this.products.reduce((acc, p) => {
            let cat = p.getCategory();
            acc[cat] = (acc[cat] || 0) + 1;
            return acc;
        }, {} as Record<string, number>);
    }

    updateProductStock(productId: number, newStock: number) {
        let index = this.products.findIndex(p => p.id === productId);
        if (index !== -1) {
            this.products[index].stock = newStock;
            console.log(`Đã cập nhật tồn kho cho sản phẩm ${this.products[index].name}.`);
        }
    }
}

let store = new Store();
let choice;
do {
    choice = +prompt(`
1. Thêm khách hàng mới
2. Thêm sản phẩm mới (cho chọn loại: Đồ điện tử, Quần áo) 
3. Tạo đơn hàng mới
4. Hủy đơn hàng
5. Hiển thị danh sách sản phẩm còn hàng
6. Hiển thị danh sách đơn hàng của một khách hàng
7. Tính tổng doanh thu
8. Thống kê sản phẩm theo danh mục
9. Cập nhật tồn kho sản phẩm
10. Tìm kiếm thông tin bằng ID (Customer hoặc Product)
11. Xem thông tin chi tiết sản phẩm
12. Thoát
`);

    switch (choice) {
        case 1:
            let name = prompt("Nhập tên khách hàng:");
            let email = prompt("Nhập email:");
            let address = prompt("Nhập địa chỉ:");
            store.addCustomer(name!, email!, address!);
            break;
        case 2:
            let type = prompt("Chọn loại (1: Điện tử, 2: Quần áo):");
            let pname = prompt("Tên sản phẩm:");
            let price = +prompt("Giá:");
            let stock = +prompt("Tồn kho:");
            if (type === "1") {
                let warranty = +prompt("Bảo hành (tháng):");
                store.addProduct(new ElectronicsProduct(pname!, price, stock, warranty));
            } else {
                let size = prompt("Size:");
                let color = prompt("Màu:");
                store.addProduct(new ClothingProduct(pname!, price, stock, size!, color!));
            }
            break;
        case 3:
            let cid = +prompt("Nhập ID khách hàng:");
            let n = +prompt("Nhập số lượng loại sản phẩm:");
            let items: { productId: number, quantity: number }[] = [];
            for (let i = 0; i < n; i++) {
                let pid = +prompt(`ID sản phẩm ${i + 1}:`);
                let qty = +prompt(`Số lượng:`);
                items.push({ productId: pid, quantity: qty });
            }
            let order = store.createOrder(cid, items);
            if (order) console.log("Tạo đơn thành công:", order.getDetails());
            break;
        case 4:
            let oid = +prompt("Nhập ID đơn hàng:");
            store.cancelOrder(oid);
            break;
        case 5:
            store.listAvailableProducts();
            break;
        case 6:
            let cid2 = +prompt("Nhập ID khách hàng:");
            store.listCustomerOrders(cid2);
            break;
        case 7:
            console.log("Tổng doanh thu:", store.calculateTotalRevenue());
            break;
        case 8:
            console.log("Thống kê:", store.countProductsByCategory());
            break;
        case 9:
            let pid2 = +prompt("Nhập ID sản phẩm:");
            let newStock = +prompt("Nhập tồn kho mới:");
            store.updateProductStock(pid2, newStock);
            break;
        case 10:
            let typeSearch = prompt("Tìm (c: Customer, p: Product):");
            let idSearch = +prompt("Nhập ID:");
            if (typeSearch === "c") {
                let c = store.customers.find(c => c.id === idSearch);
                console.log(c ? c.getDetails() : "Không tìm thấy");
            } else {
                let p = store.products.find(p => p.id === idSearch);
                console.log(p ? p.getProductInfo() : "Không tìm thấy");
            }
            break;
        case 11:
            let pid3 = +prompt("Nhập ID sản phẩm:");
            let prod = store.products.find(p => p.id === pid3);
            console.log(prod ? prod.getProductInfo() : "Không tìm thấy");
            break;
        case 12:
            console.log("Thoát chương trình.");
            break;
        default:
            console.log("Lựa chọn không hợp lệ!");
            break;
    }
} while (choice != 12);
