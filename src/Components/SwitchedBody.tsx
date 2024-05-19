import Bodyy from "./Body";
import BodyTwo from "./BodyTwo";
import { CartProvider } from "./CartContext";
import ShoppingCart from "./ShopingCart";

interface SwitchedBodyProps {
    index: number;
}

export default function SwitchedBody({ index }: SwitchedBodyProps) {
    let body = null;

    switch(index){
        case 0: body = <BodyTwo/>; break;
        case 1: body = <BodyTwo/>; break;
        case 2: body = <Bodyy/>; break;
    }

    return (
        <CartProvider>
            <div style={{display:'flex', background:'blanchedalmond'}}>
                {body}
                <ShoppingCart />
            </div>
        </CartProvider>
    )
}