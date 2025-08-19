class Audience {
    static autoId = 1;
    id:number;
    name:string;
    email:string;
    phone:string;
    constructor(name:string,email:string, phone:string){
        this.id = Audience.autoId++;
        this.name = name;
        this.email = email;
        this.phone = phone;
    }
    getDetails(){
        return `KH: ${this.id} | ${this.name} | ${this.email} | ${this.phone}`
    }
}

abstract class Movie {
    static autoId = 1;
    id:number;
    title:string;
    genre:string;
    ticketPrice:number;
    isShowing:boolean
    constructor(title:string, genre:string, ticketPrice:number, isShowing:boolean){
        this.id = Movie.autoId++;
        this.title = title;
        this.genre = genre;
        this.ticketPrice = ticketPrice;
        this.isShowing = isShowing;
    }
    startShow():void{
        this.isShowing = true;
    }
    stopShow():void{
        this.isShowing = false
    }
    abstract calculateTicketCost(quantity: number): number;
    abstract getSpecialOffers(): string[];
    abstract getMovieInfo(): string;
}
abstract class ActionMovie extends Movie{
    calculateTicketCost(quantity: number): number{
        return this.ticketPrice * quantity;
    }
    getSpecialOffers(): string[]{
        return ["Miễn phí bắp rang", "Tặng poster"]
    }
    getMovieInfo(): string{
        return `Tên phim: ${this.title} Giá vé: ${this.ticketPrice} Thể loại: "Phim hành động gay cấn, kỹ xảo hoành tráng"`
    }
}
abstract class ComedyMovie extends Movie{
    calculateTicketCost(quantity: number): number{
        return quantity > 4 ? this.ticketPrice* 0.9 * quantity: this.ticketPrice* quantity;
    }
    getSpecialOffers(): string[]{
        return ["Giảm 10% cho nhóm trên 4 người"]
    }
    getMovieInfo(): string{
        return `Tên phim: ${this.title} Giá vé: ${this.ticketPrice} Thể loại: "Phim hài nhẹ nhàng, vui nhộn"`
    }
}
abstract class AnimationMovie extends Movie{
    calculateTicketCost(quantity: number): number{
        return this.ticketPrice * quantity;
    }
    getSpecialOffers(): string[]{
        return ["Giảm giá cho trẻ em dưới 12 tuổi"]
    }
    getMovieInfo(): string{
        return `Tên phim: ${this.title} Giá vé: ${this.ticketPrice} Thể loại: "Phim hoạt hình với hình ảnh sống động"`
    }
}
class TicketBooking{
    static autoId = 1;
    bookingId:number;
    audience:Audience;
    movie:Movie;
    quantity:number;
    totalPrice:number;
    constructor(audience:Audience, movie:Movie, quantity:number, totalPrice:number){
        this.bookingId = TicketBooking.autoId++;
        this.audience = audience;
        this.movie = movie;
        this.quantity = quantity;
        this.totalPrice = totalPrice;
    }
    getDetails():string{
        return `${this.bookingId} | ${this.audience} | ${this.movie} | ${this.quantity} | ${this.totalPrice}`
    }
}
class Cinema{
    movies:Movie[] = [];
    audiences:Audience[] = [];
    bookings: TicketBooking[] = [];
    addMovie(movie: Movie): void {
        this.movies.push(movie);
    }
    addAudience(name: string, email: string, phone: string): Audience{
        let newAudience = new Audience(name,email,phone);
        this.audiences.push(newAudience);
        return newAudience;
    }
    bookTickets(audienceId: number, movieId: number, quantity: number): TicketBooking | null{
        let findAudience = this.audiences.find(item => item.id == audienceId);
        let findMovie = this.movies.find(item=> item.id == movieId);
        if( findAudience && findMovie && quantity > 0 && findMovie.isShowing){
            let newBooking = new TicketBooking(findAudience,findMovie,quantity,findMovie.calculateTicketCost(quantity));
            this.bookings.push(newBooking);
            return newBooking;
        }
        return null;
    }
    cancelMovie(movieId: number): void{
        let findMovie = this.movies.find(item=> item.id == movieId);
        if(findMovie){
            findMovie.isShowing = false;
            return;
        }
    }
    listShowingMovies(): void{
        let result = this.movies.filter(item => item.isShowing);
        for(let i = 0; i < result.length; i++){
            console.log(`Phim đang chiếu thứ ${i+1}: Tên: `);
            
        }
    }
}
let choice;
do{
    choice = +prompt(`
        1. Thêm khán giả mới
        2. Thêm phim mới
        3. Đặt vé
        4. Ngừng chiếu phim
        5. Hiển thị danh sách phim đang chiếu
        6. Hiển thị các vé đã đặt của khán giả
        7. Tính và hiển thị tổng doanh thu
        8. Đếm số lượng từng thể loại phim
        9. Tìm kiếm và hiển thị thông tin bằng mã định danh
        10. Hiển thị ưu đãi của một phim
        11. Thoát chương trình
        `)!;
}while(choice!=11);