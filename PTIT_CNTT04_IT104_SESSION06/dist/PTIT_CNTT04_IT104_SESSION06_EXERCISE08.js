class Book {
    constructor(id, title, author, stock, status) {
        this.id = id;
        this.title = title;
        this.author = author;
        this.stock = stock;
        this.status = status;
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
    getStock() {
        return this.stock;
    }
    getStatus() {
        return this.status;
    }
}
class Member {
    constructor(idMember, nameMember, contactMember, statusMember) {
        this.borrowedBooks = []; // Danh sách sách đã mượn
        this.idMember = idMember;
        this.nameMember = nameMember;
        this.contactMember = contactMember;
        this.statusMember = statusMember;
    }
    getIdMember() {
        return this.idMember;
    }
    getNameMember() {
        return this.nameMember;
    }
}
class LendedBook {
    constructor(memberId, bookId, dueDate) {
        this.memberId = memberId;
        this.bookId = bookId;
        this.dueDate = dueDate;
    }
    getMemberId() {
        return this.memberId;
    }
}
class Library {
    constructor() {
        this.books = [];
        this.members = [];
    }
    addBook(book) {
        this.books.push(book);
    }
    showBooks() {
        if (this.books.length === 0) {
            console.log("Không có sách nào trong thư viện.");
            return;
        }
        console.log("Danh sách sách trong thư viện:");
        this.books.forEach(book => {
            console.log(`ID: ${book.getId()}, Tiêu đề: ${book.getTitle()}, Tác giả: ${book.getAuthor()}, Số lượng: ${book.getStock()}, Trạng thái: ${book.getStatus()}`);
        });
    }
}
let library = new Library();
library.addBook(new Book(1, "Lập trình TypeScript", "Nguyễn Văn A", 10, "Có sẵn"));
library.addBook(new Book(2, "Cấu trúc dữ liệu", "Trần Thị B", 5, "Không có sẵn"));
library.showBooks();
