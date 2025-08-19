class _Book {
    constructor(id, title, author) {
        this.id = id;
        this.title = title;
        this.author = author;
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
    setTitle(title) {
        this.title = title;
    }
    setAuthor(author) {
        this.author = author;
    }
}
class _Library {
    constructor() {
        this.books = [];
    }
    addBook(book) {
        this.books.push(book);
    }
    printBook() {
        for (let i = 0; i < this.books.length; i++) {
            console.log(`Tên: ${this.books[i].getTitle()} | Tác giả: ${this.books[i].getAuthor()}`);
        }
    }
    updateBook(id, newTitle, newAuthor) {
        for (let i = 0; i < this.books.length; i++) {
            if (this.books[i].getId() === id) {
                this.books[i].setTitle(newTitle);
                this.books[i].setAuthor(newAuthor);
                return;
            }
        }
        console.log(`Không tìm thấy sách`);
    }
}
let book6 = new _Book(6, "Lập trình C cơ bản", "Nguyễn Văn A");
let book7 = new _Book(7, "JavaScript nâng cao", "Trần Thị B");
let book8 = new _Book(8, "Python cho người mới bắt đầu", "Lê Văn C");
let book9 = new _Book(9, "Thuật toán và cấu trúc dữ liệu", "Phạm Thị D");
let book10 = new _Book(10, "Lập trình hướng đối tượng với Java", "Hoàng Văn E");
let _library = new _Library();
_library.addBook(book6);
_library.addBook(book7);
_library.addBook(book8);
_library.addBook(book9);
_library.addBook(book10);
console.log("Danh sách ban đầu:");
_library.printBook();
_library.updateBook(7, "JavaScript Pro", "Trần Thị Bích");
console.log("Sau cập nhật:");
_library.printBook();
