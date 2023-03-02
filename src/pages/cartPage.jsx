import React, { useEffect } from 'react'
import Cart from '../components/Cart'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

// import { useDispatch,useSelector } from 'react-redux'
import { CHANGE_ORDER_CART,CHANGE_QUANTITY ,REMOVE_ITEM} from '../actions'
import { useDispatch, useSelector } from 'react-redux'

const CartPage = () => {
    const dispatch = useDispatch()
    const cartItems = useSelector(state => state.cart.items); //global redux store se state liya then cart liya then reducer se items le liya
    useEffect(() => {
        dispatch({ type: CHANGE_ORDER_CART, payload: cartItems })
    }, [cartItems,dispatch]) //jab bhi cartItems change hoga toh rendering ki requirement hogi toh usi waqt andar ka function use me aa jayega

    const order = useSelector(state => state.order)

    const changeQuantity = (quantity,item) =>{
        dispatch({type:CHANGE_QUANTITY, payload:{...item,quantity}})
    }
    const removeItem = (item) =>{
        dispatch({type:REMOVE_ITEM, payload:item})
    }


    return (
        <React.StrictMode>
            <Navbar cartCount={cartItems.length} />
            <Cart items={cartItems} order={order} changeQuantity={changeQuantity} removeItem={removeItem} />
            <Footer />
        </React.StrictMode>
    )
}

export default CartPage
