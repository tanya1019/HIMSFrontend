import { Component, OnInit } from '@angular/core';
import { Claim } from 'src/app/class/Claim';

@Component({
  selector: 'app-user-claim',
  templateUrl: './user-claim.component.html',
  styleUrls: ['./user-claim.component.css']
})
export class UserClaimComponent implements OnInit {
  claim : Claim={
    id : 0,
    claimedDate: new Date(),
    documentProof:'',
    

    
  }

  constructor() { }

  ngOnInit(): void {
  }

}
