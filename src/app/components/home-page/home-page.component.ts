import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  url: string="https://angular.io/guide/"
  imgSrc1="../assets/img1.png";
  imgSrc2="../assets/img2.png";
  imgSrc3="../assets/img3.png";
  imgSrc4="../assets/img4.webp";
center: any;
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  addProperty(){
this.router.navigate(["/addproperty"])
  }

  viewAllPolicies(){
    this.router.navigate(["admin/displaypolicy"])
      }

}
