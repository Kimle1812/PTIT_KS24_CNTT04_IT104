var order = {
    orderId: "ORD001",
    customerName: "Nguyễn Văn A",
    items: [
        {
            product: { id: "P001", name: "Áo sơ mi", price: 250000 },
            quantity: 2
        },
        {
            product: { id: "P002", name: "Quần tây", price: 400000 },
            quantity: 1
        }
    ],
    note: "Giao sau 18h"
};
function calculateOrderTotal(order) {
    var total = order.items.reduce(function (sum, item) { return sum + (item.product.price * item.quantity); }, 0);
    return total;
}
function printOrderDetails(order) {
    console.log("\u0110\u01A1n h\u00E0ng ID: ".concat(order.orderId));
    console.log("Kh\u00E1ch h\u00E0ng: ".concat(order.customerName));
    console.log("Chi tiết sản phẩm:");
    order.items.forEach(function (item) {
        var _a = item.product, name = _a.name, price = _a.price;
        var quantity = item.quantity;
        var lineTotal = price * quantity;
        console.log("- ".concat(name, " \u00D7 ").concat(quantity, " \u2192 ").concat(lineTotal.toLocaleString(), " VND"));
    });
    var total = calculateOrderTotal(order);
    console.log("T\u1ED5ng c\u1ED9ng: ".concat(total.toLocaleString(), " VND"));
    if (order.note) {
        console.log("Ghi ch\u00FA: ".concat(order.note));
    }
}
printOrderDetails(order);
