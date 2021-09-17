import { OrderService } from './../services/order.service';
import { Component, OnInit } from '@angular/core';

import { Order } from 'src/app/models/order.model';
@Component({
  selector: 'app-generate-reports',
  templateUrl: './generate-reports.component.html',
  styleUrls: ['./generate-reports.component.css']
})
export class GenerateReportsComponent implements OnInit {

  orders:Array<Order> = []
  constructor(public orderService:OrderService) { }

  ngOnInit(): void {
    this.orderService.getOrders().subscribe(result=>this.orders=result);
  }

}
