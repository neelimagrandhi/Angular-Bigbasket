import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent {
      public input:any;
      public constructor() {
        this.input={
          "cardname" : "",
          "cardnumber" : "",
          "expmonth" : "",
          "expyear" : "",
          "cvv" : ""
        }
      }
  pro(){
    if(this.input.cardname&&this.input.cardnumber&&this.input.expmonth&&this.input.expyear&&this.input.cvv){
    alert("success")
  }
}
}
