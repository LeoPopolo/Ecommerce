import React from 'react';
import '../Styles/Cart.css';
import CartContext from '../Context/CartContext';
import Item from '../Components/Item';
import { Link } from 'react-router-dom';
import { ImFileEmpty } from 'react-icons/im';
 
const Cart = () => {
    const { cart, getTotal, emptyCart } = React.useContext(CartContext);

    return (
        <>
            {cart.length > 0 && 
                <>
                    <h1 className='cart-title'>Carrito</h1>
                    <div className='cart-container'>
                        {cart.map(item => (
                            <Item
                                item={item}
                                key={item.id}
                            />
                        ))}
                    </div>
                    <div className='cart-total'>
                        <div>
                            <button className='btn-empty-cart' onClick={() => emptyCart()}> <ImFileEmpty className='empty-cart-icon'/> Vaciar carrito</button>
                        </div>
                        <div>
                            <span>Total: ${getTotal()}</span>
                            <button className='btn-go-to-checkout'> <Link to='/checkout'>Ir al checkout</Link> </button>
                        </div>
                    </div>
                </>
            }
            {cart.length === 0 && 
                <>
                    <h2 className='cart-empty-title'>Carrito vacío</h2>
                    <div className='cart-empty-button'><button><Link to='/'>Ir a la tienda</Link></button></div>
                </>
            }
        </>
    )
}

export default Cart