import React from 'react';
import { Card, Wrapper, Image, ImageWrapper, Info, Name, Price, Description, Brand } from '../StyledComponents/ProductDetailStyled';
import '../Styles/ProductDetail.css';
import CartContext from '../Context/CartContext';
import { GrClose, GrCart } from 'react-icons/gr';
import { HiOutlineMinusSmall, HiPlusSmall } from 'react-icons/hi2';
import { Link } from 'react-router-dom';

const ProductDetail = ({product, close}) => {

    const { getItemQuantityInCart, substractQuantity, addQuantity} = React.useContext(CartContext);

	const api_url = 'http://localhost:3000/api';

    const closeModal = () => {
        const modalWrapper = document.getElementById('modal-wrapper');
        const modalCard = document.getElementById('modal-card');
        modalWrapper.style.opacity = '0';
        modalCard.style.opacity = '0';
        modalCard.style.transform = 'scale(0)';

        setTimeout(() => {
            close();
        }, 200);
    }

    return (
        <Wrapper id="modal-wrapper">
            <Card id="modal-card">
                <GrClose onClick={closeModal} className='close-modal'/>
                <ImageWrapper>
                    <Image src={`${api_url}/files/download/${product.image_path}`}/>
                </ImageWrapper>
                <Info>
                    <Name>{product.name}</Name>
                    <div className='modal-price-brand-wrapper'>
                        <Price>${product.price}</Price>
                        <Brand>{product.brand.name}</Brand>
                    </div>
                    <Description>{product.description}</Description>
                    <div className='modal-cart-quantity'>
                        <span>Cantidad en carrito:</span>

                        <span onClick={() => substractQuantity(product.id)}>
                            <HiOutlineMinusSmall className='item-quantity-icon'/>
                        </span>
                        <span>{getItemQuantityInCart(product.id)}</span>
                        <span onClick={() => addQuantity(product)}>
                            <HiPlusSmall className='item-quantity-icon'/>
                        </span>
                    </div>
					{(product.stock < 6 && product.stock > 0) && <span className='low-stock'>¡Últimas unidades!</span>}
					{product.stock === 0 && <span className='no-stock'>¡Sin stock!</span>}
                    {getItemQuantityInCart(product.id) > 0 && 
                    <button className='btn-go-to-cart'> <GrCart className='add-to-cart'/> <Link to='/cart'>Ir al carrito</Link> </button>}
                </Info>
            </Card>
        </Wrapper>
    )
}

export default ProductDetail