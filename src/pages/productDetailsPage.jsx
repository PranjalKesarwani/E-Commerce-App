import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer';
import ProductDetails from '../components/Product-details';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { ADD_TO_CART } from '../actions';


const ProductDetailsPage = () => {
    const dispatch = useDispatch();
    const cartItems = useSelector(state => state.cart.items);
    const { productId } = useParams();
    console.log(typeof (productId));
    const products = useSelector(state => state.product.products);
    console.log(products[0].id);
    const product = products.find(p => p.id === parseInt(productId));
    console.log(product);
    const addToCart = () => {
        dispatch({type:ADD_TO_CART,payload:product});
    }


    return (
        <React.StrictMode>
            <Navbar cartCount={cartItems.length} />
            <ProductDetails product={product} addToCart={addToCart} />
            <Footer />

        </React.StrictMode>
    )
}

export default ProductDetailsPage
