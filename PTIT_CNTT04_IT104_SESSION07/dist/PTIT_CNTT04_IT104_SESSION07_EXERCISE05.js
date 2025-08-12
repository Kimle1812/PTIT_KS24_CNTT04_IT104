class Account {
    constructor(id, userName, password, isLogin, role) {
        this.isLogin = false;
        this.id = id;
        this.userName = userName;
        this.password = password;
        this.isLogin = isLogin;
        this.role = role;
    }
    login(password) {
        if (this.password === password) {
            this.isLogin = true;
            console.log(`Đăng nhập thành công`);
        }
    }
    logout() {
        if (this.isLogin) {
            this.isLogin = false;
            console.log(`Đăng xuất thành công`);
        }
    }
}
class UserAcc extends Account {
    constructor(id, userName, password, isLogin, role, status) {
        super(id, userName, password, isLogin, role);
        this.status = status;
    }
    login(password) {
        if (this.status == "active") {
            super.login(password);
        }
        else if (this.status == "banned") {
            console.log(`Tài khoản bị khóa`);
        }
        else {
            console.log(`Trạng thái không hợp lệ`);
        }
    }
}
let user1 = new UserAcc(1, "user1", "password123", false, "user", "active");
user1.login("password123");
user1.logout();
let user2 = new UserAcc(2, "user2", "password456", false, "user", "banned");
user2.login("password456");
user2.logout();
let user3 = new UserAcc(3, "user3", "password789", false, "user", "inactive");
user3.login("password789");
user3.logout();
