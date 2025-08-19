class __Book {
    private id: number;
    private title: string;
    private author: string;

    constructor(id: number, title: string, author: string) {
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
    setTitle(title: string) {
        this.title = title;
    }
    setAuthor(author: string) {
        this.author = author;
    }
}

class __Library {
    books: __Book[] = [];

    addBook(book: __Book) {
        this.books.push(book);
    }

    printBook() {
        for (let i = 0; i < this.books.length; i++) {
            console.log(`Tên: ${this.books[i].getTitle()} | Tác giả: ${this.books[i].getAuthor()}`);
        }
    }

    updateBook(id: number, newTitle: string, newAuthor: string) {
        for (let i = 0; i < this.books.length; i++) {
            if (this.books[i].getId() === id) {
                this.books[i].setTitle(newTitle);
                this.books[i].setAuthor(newAuthor);
                return;
            }
        }
        console.log(`Không tìm thấy sách`);
    }
    seachBook(name: string){
    let check = -1;
    for (let i = 0; i < this.books.length; i++) {
        if(this.books[i].getTitle().toLowerCase().includes(name.toLowerCase())){
               console.log(`ID : ${this.books[i].getId()} Ten: ${this.books[i].getTitle()} Ten tac gia :${this.books[i].getAuthor()}`);
               check++;
        }
    }
    if (check == -1) {
        console.log(`Không tìm thấy sách`);
        
    }
}
}

let book11 = new __Book (11, "Lập trình C cơ bản", "Nguyễn Văn A");
let book12 = new __Book (12, "JavaScript nâng cao", "Trần Thị B");
let book13 = new __Book (13, "Python cho người mới bắt đầu", "Lê Văn C");
let book14 = new __Book (14, "Thuật toán và cấu trúc dữ liệu", "Phạm Thị D");
let book15 = new __Book (15, "Lập trình hướng đối tượng với Java", "Hoàng Văn E");

let library1 = new __Library();
library1.addBook(book11);
library1.addBook(book12);
library1.addBook(book13);
library1.addBook(book14);
library1.addBook(book15);

console.log("Danh sách ban đầu:");
library1.printBook();

library1.updateBook(12, "JavaScript Pro", "Trần Thị Bích");
console.log("Sau cập nhật:");
library1.printBook();

console.log("Kết quả tìm kiếm:");
library1.seachBook("Lập trình");
