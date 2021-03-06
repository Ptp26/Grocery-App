import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Order } from '../models/order.model';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(public http: HttpClient) { }
  getOrders(): Observable<Order[]> {
    return this.http.get<Order[]>("http://localhost:9090/order/allOrderDetails")
  }


  getOrderbyId(id:any):Observable<Order[]>{
    return this.http.get<Order[]>("http://localhost:9090/order/getOrderById/"+id)    
 }

 getOrderbyUserId(id:any):Observable<Order[]>{
    return this.http.get<Order[]>("http://localhost:9090/order/getOrderByUserId/"+id)    
 }

  updateStatus(orderRef: any): any {
    return this.http.put("http://localhost:9090/order/updateOrderStatus", orderRef, { responseType: 'text' })
  }
}
