class CardBank {
    protected nrCard: number;
    protected posesorCard: string;
    protected balance: number;

    constructor(nrCard: number, posesorCard: string, balance: number) {
        this.nrCard = nrCard;
        this.balance = balance;
        this.posesorCard = posesorCard;
    }
}

class Transaction extends CardBank {
    protected countTrasaction: number;
    protected sumTransaction: number;

    constructor(nrCard, posesorCard, balance, sumTranstation: number) {
        super(nrCard, posesorCard, balance);
        this.sumTransaction = sumTranstation;
    }
}


class Economy extends CardBank {
    protected interestRate : number;

    constructor(nrCard, posesorCard, balance, interestRate: number) {
        super(nrCard, posesorCard, balance);
        this.interestRate = interestRate;
    }
}

let cardBank = new CardBank(2000355456, "SARPE DIANA", 2000);
console.log(cardBank);

let cardBank1 = new Transaction(20001313, "Diana Sarpe", 200, 12);
console.log(cardBank1);