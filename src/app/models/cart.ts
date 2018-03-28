import { CartItem } from './cartItem';
export class Cart {
    items: CartItem[] = [];

    get totalItemCount() {
        let count = 0;
        if (!this.items) { return 0; }
        Object.keys(this.items).forEach(e => {
            count += this.items[e].quantity;
        });
        return count;
    }

}
