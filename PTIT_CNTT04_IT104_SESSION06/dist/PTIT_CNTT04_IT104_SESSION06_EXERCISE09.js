class Book1 {
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
class Member1 {
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
    getstatusMember() {
        return this.statusMember;
    }
    setstatusMember(status) {
        this.statusMember = status;
    }
}
class LendedBook1 {
    constructor(memberId, bookId, dueDate) {
        this.memberId = memberId;
        this.bookId = bookId;
        this.dueDate = dueDate;
    }
    getMemberId() {
        return this.memberId;
    }
}
class Library1 {
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
    registerMember(member) {
        this.members.push(member);
    }
    blockMemBer(id) {
        const member = this.members.find(m => m.getIdMember() === id);
        if (member) {
            member.setstatusMember(false);
        }
        else {
            console.log("Không tìm thấy thành viên với ID này.");
        }
    }
    showMember() {
        if (this.members.length === 0) {
            console.log("Không có thành viên nào trong thư viện.");
            return;
        }
        console.log("Danh sách thành viên trong thư viện:");
        this.members.forEach(member => {
            console.log(`ID: ${member.getIdMember()}, Tên: ${member.getNameMember()}, Trạng thái: ${member.getstatusMember() ? "Đang hoạt động" : "Bị khóa"}`);
        });
    }
}
let library1 = new Library1();
library1.registerMember(new Member1(1, "Nguyễn Văn A", "0123456789", true));
library1.registerMember(new Member1(2, "Trần Thị B", "0987654321", true));
library1.blockMemBer(1);
library1.showMember();
