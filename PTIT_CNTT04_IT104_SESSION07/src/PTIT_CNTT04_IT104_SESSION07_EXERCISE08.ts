class Account4{
    public accountNumber: string;
    protected balance: number;
    protected history: string[];
    protected status: boolean;

    constructor(accountNumber: string, balance: number, history: string[], status: boolean) {
        this.accountNumber = accountNumber;
        this.balance = balance;
        this.history = history;
        this.status = status;
    }
    deposit(amount: number): void {
        if (this.status) {
            this.balance += amount;
            this.history.push(`Gửi: ${amount}`);
            console.log(`Gửi tiền thành công.`);
        }else{
            console.log(`Tài khoản bị khóa`);
        }
    }
    withdraw(amount: number): void {
        if (this.status ){
            this.balance -= amount;
            this.history.push(`Rút: ${amount}`);
            console.log(`Rút tiền thành công.`);
        }else{
            console.log(`Tài khoản bị khóa`);
        }
    }
    showHistory(): void {
        if (this.status) {
            console.log(`Lịch sử giao dịch:`);
            this.history.forEach((transaction, index) => {
                console.log(`${index + 1}. ${transaction}`);
            })
        }else{
            console.log(`Tài khoản bị khóa`);
        }
    }
}
class CheckingAccount extends Account4 {
    overdraftLimit: number;
    constructor(accountNumber: string, balance: number, history: string[], status: boolean, overdraftLimit: number) {
        super(accountNumber, balance, history, status);
        this.overdraftLimit = overdraftLimit;
    }
    withdraw(amount: number): void {

        if (this.status && (this.balance + this.overdraftLimit) >= amount) {
            this.balance -= amount;
            this.history.push(`Rút: ${amount}`);
            console.log(`Rút tiền thành công.`);
        } else if (this.status && (this.balance + this.overdraftLimit) < amount) {
            console.log(`Số dư trong tài khoản không đủ`);
        } else {
            console.log(`Tài khoản bị khóa`);
        }
    }
}
let checkingAccount = new CheckingAccount("123456789", 1000, [], true, 500);
checkingAccount.deposit(500);
checkingAccount.withdraw(1200);
checkingAccount.showHistory();
checkingAccount.withdraw(1500);