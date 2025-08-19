class Account3{
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
        if (this.status && this.balance >= amount) {
            this.balance -= amount;
            this.history.push(`Rút: ${amount}`);
            console.log(`Rút tiền thành công.`);
        }else if (this.status && this.balance < amount) {
            console.log(`Số dư trong tài khoản không đủ`);
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
class SavingsAccount extends Account3 {
    interestRate: number;
    constructor(accountNumber: string, balance: number, history: string[], status: boolean, interestRate: number) {
        super(accountNumber, balance, history, status);
        this.interestRate = interestRate;
    }

}
let savingsAccount = new SavingsAccount("123456789", 1000, [], true, 0.05);
savingsAccount.deposit(500);
savingsAccount.withdraw(200);
savingsAccount.showHistory();
savingsAccount.withdraw(1500);
let savingsAccount2 = new SavingsAccount("987654321", 2000, [], false, 0.03);
savingsAccount2.deposit(300);
savingsAccount2.withdraw(100);
savingsAccount2.showHistory();
savingsAccount2.withdraw(500);