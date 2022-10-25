// import './cart-item.styles.jsx'
import { CartItemContainer, ItemDetails } from "./cart-item.styles";


const CartItem=({cartItem})=>{
    const {name, imageUrl, price, quantity}= cartItem;
    return (
        <CartItemContainer>
            <img src={imageUrl} alt={`${name}`}/>
            <ItemDetails>
              <span className='name'>{name}</span>
                <span className='price'>
                {quantity} x ${price}
              </span>

            </ItemDetails>
            {/* <h2>{name}</h2>
            <span>{quantity}</span> */}
        </CartItemContainer>
    );

};
export default CartItem;