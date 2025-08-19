class Book {
    constructor(id, title, author, year) {
        this.id = id,
            this.title = title,
            this.author = author,
            this.year = year;
    }
}
class Library {
    constructor() {
        //Tạo mảng chứa các quyển sách trong thư viện
        this.books = [];
    }
    //1.Thêm sách vào thư viện
    addBook(book) {
        this.books.push(book);
    }
    //2.Tìm sách theo id(nếu có trả về sách, không có trả về undefined)
    searchBookById(id) {
        return this.books.find(item => item.id == id);
    }
    removeBookById(id) {
        let index = this.books.findIndex(item => item.id == id);
        if (index == -1) {
            console.log(`Khong co sach trong thu vien`);
        }
        else {
            let confirmDelete = confirm(`Ban co muon xoa sach : ${this.books[index].name} hay khong`);
            if (confirmDelete) {
                this.books.splice(index, 1);
            }
        }
    }
    //Cập nhập thông tin sách
    updateBookById(id, update_book) {
        let index = this.books.findIndex(item => item.id == id);
        if (index == -1) {
            console.log(`Khong co sach trong thu vien`);
        }
        else {
            this.books[index] = update_book;
        }
    }
    //Lấy tất cả sách trong thư viện
    //Tìm sách theo tên hoặc theo tác giả
    findBooksByTitleOrAuthor(search) {
    }
}
