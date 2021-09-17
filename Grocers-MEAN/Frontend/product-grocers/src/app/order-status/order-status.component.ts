import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-order-status',
  templateUrl: './order-status.component.html',
  styleUrls: ['./order-status.component.css']
})
export class OrderStatusComponent implements OnInit {

  name = 'Order Status';
  //counts = ["pending","shipped","out for delivery","delivered", "cancelled"];
  //orderStatus = "pending"
  recentOrder?:any;
  user?: any;
  userId = JSON.parse(localStorage.getItem('userId'));
  orders?:any;

  constructor(public userService:UserService) { }
  
  ngOnInit(): void {
    this.getUser(this.userId)
    console.log(this.userId);
  }

  getUser(id: any) {
    this.userService.retrieveUserById(id).subscribe(result => {
      console.log(result);
      this.orders = result[0].orders;
      console.log(this.orders);
      //sort array to get most recent purschase
      this.orders.sort((a:any,b:any)=>{return  <any>new Date(b.date) - <any>new Date(a.date)});
      this.recentOrder = this.orders[0];
      //this.orderStatus = this.orders[0].status;
      //console.log(this.orderStatus);
    })
  }
  
} 
