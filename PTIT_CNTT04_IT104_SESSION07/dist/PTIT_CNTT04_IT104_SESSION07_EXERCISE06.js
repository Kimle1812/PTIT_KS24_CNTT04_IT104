class Account1 {
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
class UserAcc1 extends Account1 {
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
class AdminAcc extends Account1 {
    constructor(id, userName, password, isLogin, role) {
        super(id, userName, password, isLogin, role);
    }
    banUser(banId, user) {
        if (this.id === banId) {
            console.log(`Không thể ban admin`);
            return;
        }
        let bannedUserId = user.find(user => user.id === banId);
        if (bannedUserId) {
            bannedUserId.status = "banned";
            console.log(`Người dùng với ID ${banId} đã bị cấm`);
        }
        else {
            console.log(`Không tìm thấy người dùng với ID`);
        }
    }
}
let user4 = new UserAcc1(1, "user1", "password123", false, "user", "active");
user4.login("password123");
user4.logout();
let user5 = new UserAcc1(2, "user2", "password456", false, "user", "banned");
user5.login("password456");
user5.logout();
let admin = new AdminAcc(3, "admin", "adminpass", false, "admin");
admin.banUser(1, [user4, user5]);
admin.banUser(4, [user4, user5]);
