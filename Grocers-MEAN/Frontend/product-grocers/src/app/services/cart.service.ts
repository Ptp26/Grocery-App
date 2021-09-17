import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http'
import { CartItem } from '../models/cart-item.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(public http:HttpClient) { }

  viewCartItems(uid:any):any{
     return this.http.get("http://localhost:9090/cart/userItemDetails/" + uid)
  }

  deleteCartItems(uid:any, pid:any):any{
    return this.http.delete("http://localhost:9090/cart/deleteItem/"+uid+"/"+pid);
  }
  
  updateItemQuantity(cartRef:any):any{
    return this.http.put("http://localhost:9090/cart/updateQuantity", cartRef);
  }

  storeItem(cartRef:any):any{
    return this.http.post("http://localhost:9090/cart/storeItems", cartRef);
  }
}
