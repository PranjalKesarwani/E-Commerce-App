import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Orders from '../components/Orders'
import { useSelector } from 'react-redux'



const OrdersPage = () => {
    const cartItems = useSelector(state => state.cart.items); //global redux store se state liya then cart liya then reducer se items le liya
    // const order = useSelector(state => state.order);
    const user = useSelector(state => state.user);

    
    return (
        <React.StrictMode>
            <Navbar cartCount={cartItems.length} />
            <h2>My Orders</h2>
            {user.orders.map(order => <Orders items={order.items} order={order} />)}

            <Footer />
        </React.StrictMode>
    )
}

export default OrdersPage;
