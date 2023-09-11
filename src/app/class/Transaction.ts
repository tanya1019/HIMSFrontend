export class Transaction{
     amount : number ;
     transactionId: string;

     constructor(amount : number, transactionId: string){
        this.amount = amount
        this.transactionId = transactionId
     }
}