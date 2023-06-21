import { useEffect, useState } from 'react';
import '../Styles/Home.css';
import Product from '../Components/Product';
import { getProducts } from '../Utils/apiRequest';
import { HiOutlineSearch } from 'react-icons/hi';

const Home = () => {
    const [ products, setProducts ] = useState([]);

    const getProductList = (e) => {
        getProducts(e).then(resp => resp.json())
        .then(data => {
            setProducts(data.data);
        })
        .catch(err => {
            console.log(err);
        });
    }

    useEffect(() => {
        getProductList();
    }, []);

	return (
        <>
            <h1 className='home-title'>Tienda</h1>
            <div className='input-search-container'>
                <span className='ec-input-wrapper'>
                    <HiOutlineSearch className='ec-input-icon'/>
                    <input type='text' className='ec-icon-input' placeholder='Buscar...' onChange={e => getProductList(e.target.value)}/>
                </span>
            </div>
            <div className='container'>
                {products?.map(product => (
                    <Product
                        product={product}
                        key={product.id}
                    />
                ))}
            </div>
        </>
	)
}

export default Home;