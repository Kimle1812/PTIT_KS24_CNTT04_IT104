class Book{
    id:number
    title:string
    author:string
    year:number
    constructor(id:number, title:string, author:string, year:number){
        this.id =id,
        this.title =title,
        this.author = author,
        this.year = year
    }

}
class Library<T extends {id:number, name:string}> {//ràng buộc (kế thừa) id kiểu number thì k bị lỗi ở item.id
    //Tạo mảng chứa các quyển sách trong thư viện
    books:T[] = [];
    //1.Thêm sách vào thư viện
    addBook(book:T) : void{
        this.books.push(book);
    }
    //2.Tìm sách theo id(nếu có trả về sách, không có trả về undefined)
    searchBookById(id:number):T|undefined{
        return this.books.find(item=>item.id == id);
    }
    removeBookById(id:number):void{
        let index = this.books.findIndex(item => item.id == id);
        if(index == -1){
            console.log(`Khong co sach trong thu vien`);
        }else{
            let confirmDelete = confirm(`Ban co muon xoa sach : ${this.books[index].name} hay khong`);
            if(confirmDelete){
                this.books.splice(index,1);
            }
        }
    }
    //Cập nhập thông tin sách
    updateBookById(id:number,update_book:T):void{
        let index = this.books.findIndex(item => item.id == id);
        if(index == -1){
            console.log(`Khong co sach trong thu vien`);
        }else{
            this.books[index] = update_book;
        }

    }
    //Lấy tất cả sách trong thư viện
    //Tìm sách theo tên hoặc theo tác giả
    findBooksByTitleOrAuthor(search:string):T[]{
        
    }
}