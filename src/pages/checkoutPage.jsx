import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Checkout from '../components/Checkout'

// import { useDispatch,useSelector } from 'react-redux'
import { ADD_ADDRESS,SET_SHIP_ADDRESS ,PLACE_ORDER,EMPTY_CART} from '../actions'
import { useSelector, useDispatch } from 'react-redux'

const CheckoutPage = () => {
    const dispatch = useDispatch();
    const cartItems = useSelector(state => state.cart.items); //global redux store se state liya then cart liya then reducer se items le liya


    const order = useSelector(state => state.order);
    const user = useSelector(state => state.user.addresses);

    const addAddress = (address) => {
        dispatch({ type: ADD_ADDRESS, payload: address })
    }
    const setShipAddress = (address) => {
        dispatch({ type: SET_SHIP_ADDRESS, payload: address })
    }
    const placeOrder = () => {
        if(order.shipping_address){

            dispatch({ type: PLACE_ORDER, payload: order });
            dispatch({ type: EMPTY_CART});
        }
        else{
            alert('Choose a shipping address')
        }
    }


    return (
        <React.StrictMode>
            <Navbar cartCount={cartItems.length} />
            <Checkout order={order} user={user} addAddress={addAddress} setShipAddress={setShipAddress} placeOrder={placeOrder} />
            <Footer />
        </React.StrictMode>
    )
}

export default CheckoutPage;

