import { SafeUrl } from "@angular/platform-browser";

export class Order {
    constructor(public _id: number, public total: number, public userId: number, public products: Array<any>, public status:string, public link: SafeUrl) { }
}