import React from 'react';
import { CartItem, ImageWrapper, Image } from '../StyledComponents/CartStyled';
import { HiOutlineMinusSmall, HiPlusSmall } from 'react-icons/hi2';
import { RiDeleteBin5Line } from 'react-icons/ri';
import '../Styles/Item.css';
import CartContext from '../Context/CartContext';
import ProductDetail from '../Components/ProductDetail';

const Item = ({item}) => {
    
	const { addQuantity, substractQuantity, removeItem } = React.useContext(CartContext);
	const [ popupIsOpen, setPopupIsOpen ] = React.useState(false);

	const api_url = 'http://localhost:3000/api';
    
    const togglePopup = () => {
		setPopupIsOpen(!popupIsOpen);
	}

    return (
        <>
            { 
                popupIsOpen && 
                <ProductDetail 
                    close={togglePopup} 
                    product={item}
                />
			}
            <CartItem>
                <div onClick={togglePopup}>
                    <ImageWrapper>
                        <Image src={`${api_url}/files/download/${item.image_path}`}/>
                    </ImageWrapper>
                    <span className='item-name'>{item.name}</span>
                    <span className='item-price'>${item.price}</span>
                </div>
                <div>
                    <span onClick={() => substractQuantity(item.id)}>
                        <HiOutlineMinusSmall className='item-quantity-icon'/>
                    </span>
                    <span>{item.quantity}</span>
                    <span onClick={() => addQuantity(item)}>
                        <HiPlusSmall className='item-quantity-icon'/>
                    </span>
                </div>
                <div>
                    <span className='item-total-price'>${item.price * item.quantity}</span>
                    <span onClick={() => removeItem(item.id)}>
                        <RiDeleteBin5Line className='item-delete-icon'/>
                    </span>
                </div>
            </CartItem>
        </>
    )
}

export default Item