function calculateInvoiceTotal(invoice) {
    return invoice.orders.reduce(function (total, order) {
        var orderTotal = order.items.reduce(function (sum, item) {
            return sum + item.product.price * item.quantity;
        }, 0);
        return total + orderTotal;
    }, 0);
}
function getUnpaidOrders(invoice) {
    return invoice.orders.filter(function (order) { return !order.isPaid; });
}
function printInvoice(invoice) {
    console.log("H\u00D3A \u0110\u01A0N: ".concat(invoice.invoiceId));
    console.log("Ng\u00E0y t\u1EA1o: ".concat(invoice.createdAt.toLocaleDateString()));
    invoice.orders.forEach(function (order) {
        console.log("\n\u0110\u01A1n h\u00E0ng: ".concat(order.orderId));
        console.log("Kh\u00E1ch h\u00E0ng: ".concat(order.customerName));
        console.log("\u0110\u1ECBa ch\u1EC9 giao h\u00E0ng: ".concat(order.deliveryAddress));
        console.log("Tr\u1EA1ng th\u00E1i: ".concat(order.isPaid ? "Đã thanh toán" : "Chưa thanh toán"));
        console.log("Sản phẩm:");
        order.items.forEach(function (item) {
            var itemTotal = item.product.price * item.quantity;
            console.log("- ".concat(item.product.name, " \u00D7 ").concat(item.quantity, " \u2192 ").concat(itemTotal.toLocaleString(), " VND"));
            if (item.note) {
                console.log("  Ghi ch\u00FA: ".concat(item.note));
            }
        });
    });
    var total = calculateInvoiceTotal(invoice);
    console.log("\nT\u1ED5ng ti\u1EC1n h\u00F3a \u0111\u01A1n: ".concat(total.toLocaleString(), " VND"));
}
var prodA = { id: "P01", name: "Áo sơ mi", price: 250000 };
var prodB = { id: "P02", name: "Quần jeans", price: 400000 };
var order1 = {
    orderId: "ORD001",
    customerName: "Nguyễn Doanh Tuấn",
    deliveryAddress: "Quang Trung, Hà Đông",
    isPaid: false,
    items: [
        { product: prodA, quantity: 2, note: "Size M" },
        { product: prodB, quantity: 1 }
    ]
};
var order2 = {
    orderId: "ORD002",
    customerName: "Hoàng Thái Minh",
    deliveryAddress: "Đại Mỗ, Nam Từ Liêm, Hà Nội",
    isPaid: true,
    items: [
        { product: prodB, quantity: 2, note: "Màu đen" }
    ]
};
var invoice = {
    invoiceId: "INV001",
    orders: [order1, order2],
    createdAt: new Date()
};
printInvoice(invoice);
