class ___Book {
    private id: number;
    private title: string;
    private author: string;
    private year: number;

    constructor(id: number, title: string, author: string, year: number) {
        this.id = id;
        this.title = title;
        this.author = author;
        this.year = year;
    }
    getId() {
        return this.id;
    }
    getTitle() {
        return this.title;
    }
    getAuthor() {
        return this.author;
    }
    getYear() {
        return this.year;
    }
    setTitle(title: string) {
        this.title = title;
    }
    setAuthor(author: string) {
        this.author = author;
    }
    setYear(year: number) {
        this.year = year;
    }
}

class ___Library {
    books: ___Book[] = [];

    addBook(book: ___Book) {
        this.books.push(book);
    }
    printBook() {
        for (let book of this.books) {
            console.log(`ID: ${book.getId()} | Tên: ${book.getTitle()} | Tác giả: ${book.getAuthor()} | Năm: ${book.getYear()}`);
        }
    }
    updateBook(id: number, newTitle: string, newAuthor: string) {
        for (let book of this.books) {
            if (book.getId() === id) {
                book.setTitle(newTitle);
                book.setAuthor(newAuthor);
                return;
            }
        }
        console.log(`Không tìm thấy sách`);
    }
    updateBookById(id: number, newTitle: string, newAuthor: string, newYear: number) {
        for (let book of this.books) {
            if (book.getId() === id) {
                book.setTitle(newTitle);
                book.setAuthor(newAuthor);
                book.setYear(newYear);
                return;
            }
        }
        console.log(`Không tìm thấy sách để cập nhật`);
    }
    deleteBookById(id: number) {
        const index = this.books.findIndex(book => book.getId() === id);
        if (index !== -1) {
            this.books.splice(index, 1);
            console.log(`Đã xóa sách có ID: ${id}`);
        } else {
            console.log(`Không tìm thấy sách để xóa`);
        }
    }
    seachBook(name: string) {
        let found = false;
        for (let book of this.books) {
            if (book.getTitle().toLowerCase().includes(name.toLowerCase())) {
                console.log(`ID: ${book.getId()} | Tên: ${book.getTitle()} | Tác giả: ${book.getAuthor()} | Năm: ${book.getYear()}`);
                found = true;
            }
        }
        if (!found) {
            console.log(`Không tìm thấy sách`);
        }
    }
}

let book16 = new ___Book(16, "Lập trình C cơ bản", "Nguyễn Văn A", 2010);
let book17 = new ___Book(17, "JavaScript nâng cao", "Trần Thị B", 2015);
let book18 = new ___Book(18, "Python cho người mới bắt đầu", "Lê Văn C", 2018);
let book19 = new ___Book(19, "Thuật toán và cấu trúc dữ liệu", "Phạm Thị D", 2021);
let book20 = new ___Book(20, "Lập trình hướng đối tượng với Java", "Hoàng Văn E", 2022);

let library2 = new ___Library();
library2.addBook(book16);
library2.addBook(book17);
library2.addBook(book18);
library2.addBook(book19);
library2.addBook(book20);

console.log("Danh sách ban đầu:");
library2.printBook();

library2.updateBook(16, "Lập trình C cơ bản - Phiên bản mới", "Nguyễn Văn A+");
console.log("Sau cập nhật:");
library2.printBook();

console.log("Kết quả tìm kiếm:");
library2.seachBook("Lập trình");

library2.updateBookById(17, "JavaScript Pro", "Trần Thị Bích", 2024);
console.log("Sau cập nhật năm xuất bản:");
library2.printBook();

library2.deleteBookById(18);
console.log("Sau khi xóa:");
library2.printBook();
