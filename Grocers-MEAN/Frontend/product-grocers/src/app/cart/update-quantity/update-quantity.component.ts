import { Component, OnInit } from '@angular/core';
import { CartItem } from 'src/app/models/cart-item.model';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-update-quantity',
  templateUrl: './update-quantity.component.html',
  styleUrls: ['./update-quantity.component.css']
})
export class UpdateQuantityComponent implements OnInit {
  updateMsg?:string;

  constructor(public cartService:CartService) { }

  ngOnInit(): void {
  }

  updateQuantity(cartRef:any){
    this.cartService.updateItemQuantity(cartRef).subscribe((result:string)=> {
      this.updateMsg=result;
    });
  }
}
