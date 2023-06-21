import React from 'react';
import CartContext from '../Context/CartContext';
import { Card, Image, ImageWrapper, AddToCart, Price, Name } from '../StyledComponents/ProductStyled';
import { GrCart } from 'react-icons/gr';
import ProductDetail from '../Components/ProductDetail';
import '../Styles/Product.css';
import { Snackbar, SnackbarContent } from '@mui/material';

const Product = ({ product }) => {

	const [ popupIsOpen, setPopupIsOpen ] = React.useState(false);
	const { addToCart } = React.useContext(CartContext);
    const [ isOpen, setIsOpen ] = React.useState(false);
    const [ snackbarMessage, setSnackbarMessage ] = React.useState('');

	const api_url = 'http://localhost:3000/api';

	const openSnackbar = (message) => {
		setSnackbarMessage(message);
        setIsOpen(true);
    }

    const handleClose = () => {
        setIsOpen(false);
    }

	const togglePopup = () => {
		setPopupIsOpen(!popupIsOpen);
	}

	const add = (item) => {

		const response = addToCart(item);
		
		if (response)
			openSnackbar('¡Producto agregado al carrito!');
		else if (!response && item.stock > 0)
			openSnackbar('No hay suficiente stock');
	}

	return (
		<>
			{ popupIsOpen && 
				<ProductDetail 
					close={togglePopup} 
					product={product}

				/>
			}
			<Card>
				<ImageWrapper onClick={togglePopup}>
					<Image src={`${api_url}/files/download/${product.image_path}`} />
					{(product.stock < 6 && product.stock > 0) && <span className='low-stock'>¡Últimas unidades!</span>}
					{product.stock === 0 && <span className='no-stock'>¡Sin stock!</span>}
				</ImageWrapper>
				<Price>${product.price}</Price>
				<Name>{product.name}</Name>
				<AddToCart onClick={() => add(product)} className={product.stock === 0 ? 'disable-add-to-cart' : ''}> <GrCart className='add-to-cart'/> Agregar al carrito</AddToCart>
			</Card>
			<Snackbar
                autoHideDuration={2000}
                open={isOpen}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center'
                }}
            >
                <SnackbarContent 
                    style={{
                        backgroundColor:'var(--primary-color)',
                        justifyContent: 'center',
                        marginBottom: '10px'
                    }}
                    message={snackbarMessage}
                />
            </Snackbar>
		</>
	)
}

export default Product