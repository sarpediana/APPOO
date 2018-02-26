abstract class BankAccount {
    private nr: string;
    private posesorCard: string;
    private balance: number;
    private countTrasaction: number;

    constructor(nr: string, posesorCard: string, balance: number) {
        this.nr = nr;
        this.balance = balance;
        this.posesorCard = posesorCard;
        this.countTrasaction = 0;
    }

    getBalance() {
        return this.balance;
    }
    getCountTrasaction() {
        return this.countTrasaction;
    }
    private setBalance(balance) {
        this.balance = balance;
    }
    private setCountTrasaction() {
        this.countTrasaction++;
    }

    Balance(balance: number) {
        this.setBalance(balance);
        this.setCountTrasaction();
    }
    abstract addMoney(quantity: number);
}

class Transaction extends BankAccount {
    constructor(nr, posesorCard, balance) {
        super(nr, posesorCard, balance);
    }
    addMoney(quantity) {
        let balance = this.getBalance();
        if (balance + quantity < 0) {
            console.log('Bani insuficienti');
        } else {
            balance = balance + quantity;
            this.Balance(balance);
        }
    }

}

class Economy extends BankAccount {
    constructor(nrCard, posesorCard, balance) {
        super(nrCard, posesorCard, balance);
    }
    addMoney(interestRate) {
        let balance = this.getBalance() + this.getBalance() * interestRate / 100;
        this.Balance(balance);
    }
}

let economy = new Economy('9999 9999 9999 9999', 'DIANA SARPE', 0);
economy.addMoney(2.5);
let transaction = new Transaction ('9 9 9 9 9 9 ', 'me me ', 0)
transaction.addMoney(3546546);
console.log(economy.getCountTrasaction(), economy);
console.log(transaction.getCountTrasaction(), transaction);