import { Component, OnInit } from '@angular/core';
import { OrderService } from '../services/order.service';
import { Order } from '../models/order.model';
import { DomSanitizer } from '@angular/platform-browser'
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-update-order',
  templateUrl: './update-order.component.html',
  styleUrls: ['./update-order.component.css']
})
export class UpdateOrderComponent implements OnInit {

  orders:Order[]=[];
  showTable:boolean = false;
  msg:string = "pending";
  orderRef = new FormGroup({
    pid : new FormControl,
    status : new FormControl
  });

  constructor(public orderSer:OrderService, public sanitizer: DomSanitizer) { }

  ngOnInit(): void {
  }

  showOrders() {
    this.orderSer.getOrders()
      .subscribe(result => {
        console.log(result);
        this.orders = result;
      })
    this.showTable = true;
  }

  updateOrder(){
    let order = this.orderRef.value;
    this.orderSer.updateStatus(order).subscribe((result:string)=> {
      this.msg=result;
    });
    this.orderRef.reset();
  }

}
