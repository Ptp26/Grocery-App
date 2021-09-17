import { Component, OnInit } from '@angular/core';
import { CartItem } from 'src/app/models/cart-item.model';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-store-items',
  templateUrl: './store-items.component.html',
  styleUrls: ['./store-items.component.css']
})
export class StoreItemsComponent implements OnInit {

  constructor(public cartService:CartService) { }

  ngOnInit(): void {
  }

  storeItems(cartRef:any){
    this.cartService.storeItem(cartRef);
  }

}
