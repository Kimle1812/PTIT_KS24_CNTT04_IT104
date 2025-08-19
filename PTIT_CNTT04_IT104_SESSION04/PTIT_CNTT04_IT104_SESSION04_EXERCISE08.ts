type Product = {
  readonly id: string;
  name: string;
  price: number;
};
type OrderItem = {
  product: Product;
  quantity: number;
};
type Order = {
  orderId: string;
  customerName: string;
  items: OrderItem[];
  note?: string;
};
let order: Order = {
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
function calculateOrderTotal(order: Order): number{
    let total : number = order.items.reduce((sum,item) => sum + (item.product.price * item.quantity), 0);
    return total;
}

function printOrderDetails(order: Order): void {
    console.log(`Đơn hàng ID: ${order.orderId}`);
    console.log(`Khách hàng: ${order.customerName}`);
    console.log("Sản phẩm:");
    order.items.forEach(item => {
    const { name, price } = item.product;
    const quantity = item.quantity;
    const lineTotal = price * quantity;
    console.log(`- ${name} × ${quantity} → ${lineTotal.toLocaleString()} VND`);});
    const total = calculateOrderTotal(order);
    console.log(`Tổng cộng: ${total.toLocaleString()} VND`);

    if (order.note) {
        console.log(`Ghi chú: ${order.note}`);
    }
}
printOrderDetails(order);