class Customer {
    constructor(name, email, shippingAddress) {
        this.id = Customer.autoId++;
        this.name = name;
        this.email = email;
        this.shippingAddress = shippingAddress;
    }
    getDetails() {
        return `Khách hàng [${this.id}] - ${this.name}, Email: ${this.email}, Địa chỉ: ${this.shippingAddress}`;
    }
}
Customer.autoId = 1;
class Product {
    constructor(name, price, stock) {
        this.id = Product.autoId++;
        this.name = name;
        this.price = price;
        this.stock = stock;
    }
    sell(quantity) {
        if (this.stock >= quantity) {
            this.stock -= quantity;
        }
        else {
            console.log(`Không đủ hàng cho sản phẩm ${this.name}`);
        }
    }
    restock(quantity) {
        if (quantity > 0) {
            this.stock += quantity;
        }
    }
}
Product.autoId = 1;
class ElectronicsProduct extends Product {
    constructor(name, price, stock, warrantyPeriod) {
        super(name, price, stock);
        this.warrantyPeriod = warrantyPeriod;
    }
    getProductInfo() {
        return `Điện tử: ${this.name}, Giá: ${this.price}, Tồn kho: ${this.stock}, Bảo hành: ${this.warrantyPeriod} tháng`;
    }
    getShippingCost(distance) {
        return 50000;
    }
    getCategory() {
        return "Electronics";
    }
}
class ClothingProduct extends Product {
    constructor(name, price, stock, size, color) {
        super(name, price, stock);
        this.size = size;
        this.color = color;
    }
    getProductInfo() {
        return `Quần áo: ${this.name}, Giá: ${this.price}, Tồn kho: ${this.stock}, Size: ${this.size}, Màu: ${this.color}`;
    }
    getShippingCost(distance) {
        return 25000;
    }
    getCategory() {
        return "Clothing";
    }
}
class Order {
    constructor(customer, products) {
        this.orderId = Order.autoId++;
        this.customer = customer;
        this.products = products;
        this.totalAmount = this.calculateTotal();
    }
    calculateTotal() {
        return this.products.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
    }
    getDetails() {
        let productList = this.products
            .map(item => `- ${item.product.name} x${item.quantity} (${item.product.price} VND)`)
            .join("\n");
        return `Đơn hàng [${this.orderId}] của ${this.customer}:\n${productList}\nTổng: ${this.totalAmount} VND`;
    }
}
Order.autoId = 1;
class Store {
    constructor() {
        this.products = [];
        this.customers = [];
        this.orders = [];
    }
    addProduct(product) {
        this.products.push(product);
    }
    addCustomer(name, email, address) {
        this.customers.push(new Customer(name, email, address));
    }
    createOrder(customerId, productQuantities) {
        let customer = this.customers.find(c => c.id === customerId);
        if (!customer) {
            console.log("Không tìm thấy khách hàng.");
            return undefined;
        }
        let orderProducts = [];
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
    cancelOrder(orderId) {
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
    listAvailableProducts() {
        this.products.filter(p => p.stock > 0)
            .forEach(p => console.log(p.getProductInfo()));
    }
    listCustomerOrders(customerId) {
        let customer = this.customers.find(c => c.id === customerId);
        if (!customer) {
            console.log("Không tìm thấy khách hàng.");
            return;
        }
        this.orders.filter(o => o.customer === customer.name)
            .forEach(o => console.log(o.getDetails()));
    }
    calculateTotalRevenue() {
        return this.orders.reduce((sum, o) => sum + o.totalAmount, 0);
    }
    countProductsByCategory() {
        return this.products.reduce((acc, p) => {
            let cat = p.getCategory();
            acc[cat] = (acc[cat] || 0) + 1;
            return acc;
        }, {});
    }
    updateProductStock(productId, newStock) {
        let index = this.products.findIndex(p => p.id === productId);
        if (index !== -1) {
            this.products[index].stock = newStock;
            console.log(`Đã cập nhật tồn kho cho sản phẩm ${this.products[index].name}.`);
        }
    }
}
const store = new Store();

store.addCustomer("Nguyễn Văn A", "a@gmail.com", "Hà Nội");
store.addCustomer("Trần Thị B", "b@gmail.com", "HCM");

store.addProduct(new ElectronicsProduct("iPhone 15", 25000000, 5, 12));
store.addProduct(new ClothingProduct("Áo sơ mi", 300000, 10, "L", "Trắng"));
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
            store.addCustomer("Nguyễn Văn C", "c@gmail.com", "Đà Nẵng");
            console.log("Đã thêm khách hàng C");
            break;
        case 2:
            store.addProduct(new ElectronicsProduct("MacBook Pro", 30000000, 3, 24));
            console.log("Đã thêm MacBook Pro");
            break;
        case 3:
            store.createOrder(1, [{ productId: 1, quantity: 1 }, { productId: 2, quantity: 2 }]);
            console.log("Đã tạo đơn hàng mẫu");
            break;
        case 4:
            store.cancelOrder(1);
            break;
        case 5:
            store.listAvailableProducts();
            break;
        case 6:
            store.listCustomerOrders(1);
            break;
        case 7:
            console.log("Tổng doanh thu:", store.calculateTotalRevenue());
            break;
        case 8:
            console.log(store.countProductsByCategory());
            break;
        case 9:
            store.updateProductStock(1, 20);
            console.log("Đã cập nhật tồn kho ID=1 thành 20");
            break;
        case 0:
            console.log("Thoát chương trình");
            process.exit();
        default:
            console.log("Lựa chọn không hợp lệ");
    }
} while (choice != 12);
