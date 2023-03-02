import ProductList from '../components/Product-list';
import { useSelector, useDispatch } from 'react-redux';
import Navbar from '../components/Navbar';
import React from 'react';
import Carrousel from '../components/Carrousel';
import Footer from '../components/Footer';
import { ADD_TO_CART } from '../actions';
import '../App.css';

const Home = () => {

    const dispatch = useDispatch()
    const products = useSelector(state => state.product.products); //useSelector gives you the state
    const cartItems = useSelector(state => state.cart.items)
    const addToCart = (product) => {
        dispatch({ type: ADD_TO_CART, payload: product })
    }


    return (
        <React.StrictMode>

            <Navbar cartCount={cartItems.length} />
            <Carrousel />
            <ProductList products={products} addToCart={addToCart} />
            <Footer />

        </React.StrictMode>
    );
}

export default Home;