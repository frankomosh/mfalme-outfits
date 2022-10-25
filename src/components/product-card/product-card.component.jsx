import { useContext } from 'react';
// import './product-card.styles.jsx';
import Button from '../button/button.component';
import { CartContext } from '../../contexts/cart.context';
import { ProductCardContainer, Footer, Name, Price } from './product-card.styles';

const ProductCard =({product})=>{
    const {name, price, imageUrl}=product; 
    const {addItemToCart}=useContext(CartContext);

    const addProductToCart= ()=> addItemToCart(product)
    return(
    <ProductCardContainer>
        <img src={imageUrl} alt={`${name}`} />
        <Footer>
            <Name>{name}</Name>
            <Price>{price}</Price>

        </Footer>
        <Button buttonType='inverted' onClick={addProductToCart}>
            Add to Card
        </Button>

    </ProductCardContainer>
    )

}
export default ProductCard;