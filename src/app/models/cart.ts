import { CartItem } from './cartItem';
export class Cart {
    items: CartItem[] = [];

    get totalItemCount() {
        let count = 0;
        this.items.forEach(e => {
            count += e.quantity;
        });
        return count;
    }

    get totalPrice() {
        let count = 0;
        this.items.forEach(e => {
            count += e.quantity * e.price;
        });
        return count;
    }

}
