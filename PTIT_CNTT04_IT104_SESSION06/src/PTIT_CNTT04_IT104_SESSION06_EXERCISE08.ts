class Book {
    private id: number;
    private title: string;
    private author: string;
    private stock: number; // Số lượng sách trong kho
    private status: string; // Trạng thái sách

    constructor(id: number, title: string, author: string, stock: number, status: string) {
        this.id = id;
        this.title = title;
        this.author = author;
        this.stock = stock;
        this.status = status;
    }

    getId(): number {
        return this.id;
    }
    getTitle(): string {
        return this.title;
    }
    getAuthor(): string {
        return this.author;
    }
    getStock(): number {
        return this.stock;
    }
    getStatus(): string {
        return this.status;
    }
}

class Member {
    private idMember: number;
    private nameMember: string;
    private contactMember: string;
    private borrowedBooks: Book[] = []; // Danh sách sách đã mượn
    private statusMember: boolean; // Đang hoạt động hay bị khóa

    constructor(idMember: number, nameMember: string, contactMember: string, statusMember: boolean) {
        this.idMember = idMember;
        this.nameMember = nameMember;
        this.contactMember = contactMember;
        this.statusMember = statusMember;
    }

    getIdMember(): number {
        return this.idMember;
    }
    getNameMember(): string {
        return this.nameMember;
    }
}

class LendedBook {
    private memberId: number; // Thành viên mượn sách
    private bookId: number;   // Sách đã mượn
    private dueDate: Date;    // Ngày trả sách

    constructor(memberId: number, bookId: number, dueDate: Date) {
        this.memberId = memberId;
        this.bookId = bookId;
        this.dueDate = dueDate;
    }

    getMemberId(): number {
        return this.memberId;
    }
}

class Library {
    private books: Book[] = [];
    private members: Member[] = [];

    addBook(book: Book): void {
        this.books.push(book);
    }

    showBooks(): void {
        if (this.books.length === 0) {
            console.log("Không có sách nào trong thư viện.");
            return;
        }
        console.log("Danh sách sách trong thư viện:");
        this.books.forEach(book => {
            console.log(
                `ID: ${book.getId()}, Tiêu đề: ${book.getTitle()}, Tác giả: ${book.getAuthor()}, Số lượng: ${book.getStock()}, Trạng thái: ${book.getStatus()}`
            );
        });
    }
}

let library = new Library();
library.addBook(new Book(1, "Lập trình TypeScript", "Nguyễn Văn A", 10, "Có sẵn"));
library.addBook(new Book(2, "Cấu trúc dữ liệu", "Trần Thị B", 5, "Không có sẵn"));

library.showBooks();
