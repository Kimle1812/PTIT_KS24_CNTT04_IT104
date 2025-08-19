class MenuItem {
    public id: number;
    public name: string;
    public price: number;
    constructor(id: number, name: string, price: number) {
        this.id = id;
        this.name = name;
        this.price = price;
    }
}

class Table {
    public id: number;
    public capacity: number;
    public available: boolean;
    constructor(id: number, capacity: number, available: boolean) {
        this.id = id;
        this.capacity = capacity;
        this.available = available;
    }
}

class Reservation {
    public id: number;
    public customerName: string;
    public tableId: number;
    constructor(id: number, customerName: string, tableId: number) {
        this.id = id;
        this.customerName = customerName;
        this.tableId = tableId;
    }
}

class Order {
    public id: number;
    public tableId: number;
    public items: MenuItem[];
    constructor(id: number, tableId: number, items: MenuItem[]) {
        this.id = id;
        this.tableId = tableId;
        this.items = items;
    }
    getTotal(): number {
        return this.items.reduce((total, item) => total + item.price, 0);
    }
}

class Restaurant {
    public menu: MenuItem[] = [];
    public tables: Table[] = [];
    public reservations: Reservation[] = [];
    public orders: Order[] = [];

    addMenuItem(item: MenuItem): void {
        this.menu.push(item);
    }

    addTable(table: Table): void {
        this.tables.push(table);
    }

    makeReservation(customerName: string, tableId: number): void {
        const table = this.tables.find(t => t.id === tableId);
        if (!table || !table.available) return;
        table.available = false;
        this.reservations.push(new Reservation(this.reservations.length + 1, customerName, tableId));
    }

    placeOrder(tableId: number, items: MenuItem[]): void {
        this.orders.push(new Order(this.orders.length + 1, tableId, items));
    }

    generateBill(tableId: number): number {
        const tableOrders = this.orders.filter(order => order.tableId === tableId);
        const total = tableOrders.reduce((sum, order) => sum + order.getTotal(), 0);
        const table = this.tables.find(t => t.id === tableId);
        if (table) table.available = true;
        return total;
    }
}

const restaurant = new Restaurant();
restaurant.addMenuItem(new MenuItem(1, "Phở bò", 50000));
restaurant.addMenuItem(new MenuItem(2, "Bún chả", 45000));
restaurant.addTable(new Table(1, 4, true));
restaurant.makeReservation("Nguyễn Văn A", 1);
restaurant.placeOrder(1, [restaurant.menu[0], restaurant.menu[1]]);
console.log(restaurant.generateBill(1));
