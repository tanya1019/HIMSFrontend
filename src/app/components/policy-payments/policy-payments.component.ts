import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Transaction } from '../../class/Transaction';
import { BackendTransactionService } from '../../services/backend-transaction.service';



declare var Razorpay: any
@Component({
  selector: 'app-policy-payments',
  templateUrl: './policy-payments.component.html',
  styleUrls: ['./policy-payments.component.css']
})
export class PolicyPaymentsComponent implements OnInit {

  transaction :Transaction = {
    amount : 0,
    transactionId:''
  }
  constructor(private backendTransactionService : BackendTransactionService) { }

  ngOnInit(): void {
  }

  createTansactionAndBuyPolicy(orderForm : NgForm){

    this.backendTransactionService.createTransaction(this.transaction.amount).subscribe({
      next:(data)=>{
        console.log(data)
        this.openTransactionModel(data,orderForm)
      },
      error:(err)=>{console.log(err)}
    })

  }

  openTransactionModel(response : any, orderForm : NgForm){
    var options = {
      order_id : response.orderId,
      key : response.key,
      amount : response.amount,
      currency : response.currency, 
      name : "Tanya",
      description  : "Buy Policy",
      image : 'https://img.freepik.com/premium-vector/online-payment-concept_118813-2685.jpg?w=2000',
      handler : (response : any) =>{
        if(response!=null && response.razorpay_payment_id!=null){
          this.processResponse(response,orderForm)

        } else{
          alert("Payment Failed...")
        }


      },
      prefill:{
        name : "Tanya",
        email : "tanya@gmail.com",
        contact : '923456789'
      },
      notes:{
        address:"Policy"
      },
      theme:{
        color:"#F37254"
      }
    
    };
    var razorPayObject = new Razorpay(options);
    razorPayObject.open()
  }
  processResponse(resp:any,orderForm:NgForm) {
   console.log(resp)
    // this.transaction.transactionId = resp.razorpay_payment_id
  }
}
