import React from 'react';
import CartContext from './CartContext';

const StateCartContext = ({ children }) => {

    const [cart, setCart] = React.useState([]);

    const addToCart = (item) => {

        let tmp_cart = [...cart];
        let add_ok = false;

        const product_idx = tmp_cart.findIndex(product => product.id === item.id);

        if (product_idx !== -1 && (tmp_cart[product_idx].quantity < item.stock)) {
            tmp_cart[product_idx].quantity ++;
            add_ok = true;
        }
        else if (product_idx === -1 && item.stock > 0) {
            item.quantity = 1;
            tmp_cart.push(item);
            add_ok = true;
        } else {
            add_ok = false;
        }

        setCart(tmp_cart);
        return add_ok;
    }

    const emptyCart = () => {
        setCart([]);
    }

    const getItemQuantityInCart = (item_id) => {
        const product = cart.find(item => item.id === item_id);

        if (!product)
            return 0;
        return product.quantity;
    }

    const getQuantity = () => {
        let quantity = 0;
        cart.forEach(item => quantity += item.quantity);
        return quantity;
    }

    const removeItem = (item_id) => {
        const product_idx = cart.findIndex(item => item.id === item_id);
        let tmp_cart = [...cart];

        if (product_idx !== -1) {
            tmp_cart.splice(product_idx, 1);
        }

        setCart(tmp_cart);
    }

    const getTotal = () => {
        let total = 0;
        cart.forEach(item => {
            total += item.price * item.quantity;
        });

        return total;
    }

    const addQuantity = (item) => {

        const product_in_cart = getItemQuantityInCart(item.id) > 0;

        if (!product_in_cart && item.stock > 0) {
            addToCart(item);
            return;
        }

        const tmp_cart = cart.map(product => {
            if (product.id === item.id && product.quantity < item.stock)
                product.quantity ++;
            return product;
        });

        setCart(tmp_cart);
    }

    const substractQuantity = (item_id) => {
        const tmp_cart = cart.map(item => {
            if (item.id === item_id && item.quantity > 1)
                item.quantity --;
            return item;
        });

        setCart(tmp_cart);
    }

    return (
        <CartContext.Provider
            value={{cart,
                    addToCart,
                    getQuantity,
                    addQuantity,
                    substractQuantity,
                    removeItem,
                    getTotal,
                    getItemQuantityInCart,
                    emptyCart}}
        >
            { children }
        </CartContext.Provider>
    )
}

export default StateCartContext