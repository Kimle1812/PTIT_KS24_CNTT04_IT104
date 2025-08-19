class Book1 {
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

class Member1 {
    private idMember: number;
    private nameMember: string;
    private contactMember: string;
    private borrowedBooks: Book1[] = []; // Danh sách sách đã mượn
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
    getstatusMember(): boolean {
        return this.statusMember;
    }
    setstatusMember(status: boolean): void {
        this.statusMember = status;
    }
}

class LendedBook1 {
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

class Library1 {
    private books: Book1[] = [];
    private members: Member1[] = [];

    addBook(book: Book1): void {
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
    registerMember(member: Member1): void {
        this.members.push(member);
    }
    blockMemBer(id: number): void {
        const member = this.members.find(m => m.getIdMember() === id);
        if (member) {
            member.setstatusMember(false);
        } else {
            console.log("Không tìm thấy thành viên với ID này.");
        }
    }
    showMember(): void {
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


