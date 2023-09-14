import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Transaction } from '../../class/Transaction';
import { BackendTransactionService } from '../../services/backend-transaction.service';
import { ActivatedRoute, Router } from '@angular/router';
import { BackendPolicyService } from 'src/app/services/backend-policy.service';



declare var Razorpay: any
@Component({
  selector: 'app-policy-payments',
  templateUrl: './policy-payments.component.html',
  styleUrls: ['./policy-payments.component.css']
})
export class PolicyPaymentsComponent implements OnInit {

  

  premiumAmount :number = 0;

  transaction :Transaction = {
    amount:0,
    transactionId:''
  }
  isLoaded : Boolean = false;

 
  Name:string=JSON.parse(String(localStorage.getItem("user"))).name;


  constructor(private route: ActivatedRoute, private backendTransactionService : BackendTransactionService, private router:Router, private backendPolicyService: BackendPolicyService) { }

  ngOnInit(): void {

    this.route.params.subscribe(
      {
        next:(params)=>{
            this.transaction.amount = +params["premiumamount"];
            console.log("Premium amount---------->",this.transaction.amount)
          },
          error:(err)=>{
            console.log(err);
          }
      }
  )
}

  createTansactionAndBuyPolicy(orderForm : NgForm){

    this.backendTransactionService.createTransaction(this.transaction.amount).subscribe({
      next:(data)=>{
        console.log(data)
        // console.log(this.transaction.amount)
        this.openTransactionModel(data,orderForm)
      },
      error:(err)=>{console.log(err)}
    })
  }


  openTransactionModel(response : any, orderForm : NgForm){
    var options = {
      order_id : response.orderId,
      key : response.key,
      amount : response.premiumAmount,
      currency : response.currency, 
      name : JSON.parse(String(localStorage.getItem("user"))).name,
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
        name : JSON.parse(String(localStorage.getItem("user"))).name,
        email : JSON.parse(String(localStorage.getItem("user"))).email,
        contact : JSON.parse(String(localStorage.getItem("user"))).contactNumber,
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
    this.router.navigate(["/mypolicies"])

  }
}
