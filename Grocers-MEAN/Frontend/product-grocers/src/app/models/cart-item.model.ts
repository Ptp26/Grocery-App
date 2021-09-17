export class CartItem {
    constructor(
        public _id: Number, 
        public userId: Number, 
        public productId: Number, 
        public name: String, 
        public quantity: Number, 
        public imageUrl: String){}
}
