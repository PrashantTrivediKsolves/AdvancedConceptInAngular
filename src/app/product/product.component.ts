import { Component, OnInit } from '@angular/core';
import { MessageServiceService } from '../message-service.service';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  productData:unknown;
  constructor(private msgservice:MessageServiceService) {
    // here we are subscribing the data
    this.msgservice.sharingdata.subscribe((msg)=>
    {
      this.productData=msg;
    })
}

  ngOnInit(): void {
  }
  onSubmit(data:any)
  {
   this.msgservice.sharingdata.next(data.value); // here we are sending the data
  }
}
