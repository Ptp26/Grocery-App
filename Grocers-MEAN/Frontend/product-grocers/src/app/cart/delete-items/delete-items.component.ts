import { Component, OnInit } from '@angular/core';
import { CartItem } from 'src/app/models/cart-item.model';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-delete-items',
  templateUrl: './delete-items.component.html',
  styleUrls: ['./delete-items.component.css']
})
export class DeleteItemsComponent implements OnInit {
  deleteMsg?:string;
  cart?:Array<CartItem>;
  uid = localStorage.getItem("userId") || '';
  
  
  constructor(public cartService:CartService) { }

  ngOnInit(): void {
    
    console.log();
    console.log();
    
    this.cartService.viewCartItems(JSON.parse(this.uid)).subscribe(result=>this.cart=result)
  }

  deleteById(pid:any){
    this.cartService.deleteCartItems(JSON.parse(this.uid),pid).subscribe((result:string)=> {
      this.deleteMsg=result;
  })
  }
}
