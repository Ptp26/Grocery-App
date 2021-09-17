import { Products } from "./product";
import { User } from "./user.model";

export class Cart{
    productId: Number;
    userId: Number;
    productName: string;
    qty: Number;
    price: Number;
    _id: Number;
    id:Number;

    constructor(id: Number, product: Products, quantity: Number, user: User){
        this._id = id;
        this.userId = user._id
        this.productId = product._id;
        this.productName = product.name;
        this.price = product.price;
        this.qty = quantity;
    }
}
