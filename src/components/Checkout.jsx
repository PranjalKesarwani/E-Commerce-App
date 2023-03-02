import React from 'react'
import { useState } from 'react'

const Checkout = ({ order, user, addAddress, setShipAddress ,placeOrder}) => {


    const blank_address = { first_name: '', last_name: '', phone: '', address1: '', address2: '', country: '', state: '', pin_code: '' };
    const [address, setAddress] = useState({});

    const validateAddress = (address) => {
        if (!address.first_name || !address.last_name || !address.phone || !address.address1 || !address.country || !address.state || !address.pin_code) {
            alert('Enter the required fields');
        }
        else {
            addAddress(address);
            setAddress(blank_address);
        }
    }




    return (
        <React.StrictMode>
            <div className="container mb-5">
                <main>
                    <div className="py-5 text-center">
                        <h2>Checkout</h2>
                    </div>

                    <div className="row g-3">
                        <div className="col-md-5 col-lg-4 order-md-last">
                            <h4 className="d-flex justify-content-between align-items-center mb-3">
                                <span className="text-muted">Your cart</span>
                                <span className="badge bg-secondary rounded-pill">{order.total_items}</span>
                            </h4>
                            <ul className="list-group mb-3">
                                <li className="list-group-item d-flex justify-content-between lh-sm">
                                    <div>
                                        <h6 className="my-0">Total</h6>
                                        <small className="text-muted">Cart Items</small>
                                    </div>
                                    <span className="text-muted">${order.total_cost}</span>
                                </li>
                                <li className="list-group-item d-flex justify-content-between lh-sm">
                                    <div>
                                        <h6 className="my-0">Total</h6>
                                        <small className="text-muted">Shipping Charges</small>
                                    </div>
                                    <span className="text-muted">${order.shipping_charge}</span>
                                </li>
                                <li className="list-group-item d-flex justify-content-between lh-sm">
                                    <div>
                                        <h6 className="my-0">Total</h6>
                                        <small className="text-muted">Discount ({order.discount_in_percent}%)</small>
                                    </div>
                                    <span className="text-muted">-${order.total_cost * order.discount_in_percent / 100}</span>
                                </li>

                                <li className="list-group-item d-flex justify-content-between bg-light">
                                    <div className="text-success">
                                        <h6 className="my-0">Promo code</h6>
                                        <small>EXAMPLECODE</small>
                                    </div>
                                    <span className="text-success">−$5</span>
                                </li>
                                <li className="list-group-item d-flex justify-content-between">
                                    <span>Total (USD)</span>
                                    <strong>${order.total_cost - order.total_cost * order.discount_in_percent / 100 + order.shipping_charge}</strong>
                                </li>
                            </ul>
                            {order.shipping_address?<div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">{order.shipping_address.first_name} {order.shipping_address.last_name}</h5>
                                    <h6 className="card-subtitle mb-2 text-muted ">{order.shipping_address.address1}, {order.shipping_address.address2},{order.shipping_address.state},{order.shipping_address.city}, {order.shipping_address.country}, {order.shipping_address.pin_code}</h6>
                                    <p className="card-text">{order.shipping_address.phone}</p>
                                </div>
                            </div>:null}
                            
                        </div>
                        <div className="col-md-7 col-lg-8">
                            <h4 className="mb-3">Shipping address</h4>

                            {user.map(address =>
                                <div key={user.id} className="card">
                                    <div className="card-body">
                                        <h5 className="card-title">{address.first_name} {address.last_name}</h5>
                                        <h6 className="card-subtitle mb-2 text-muted ">{address.address1}, {address.address2},{address.state},{address.city}, {address.country}, {address.pin_code}</h6>
                                        <p className="card-text">{address.phone}</p>
                                        <input type="radio" name="address" id="" onClick={e => setShipAddress(address)} /> Use this Address
                                    </div>
                                </div>)
                            }


                            <hr className="my-4" />
                            <h5>OR</h5>

                            <h4 className="mb-3">Add New Address</h4>

                            <form className="needs-validation" noValidate="" onSubmit={(e) => { e.preventDefault(); validateAddress(address); }}>
                                <div className="row g-3">
                                    <div className="col-sm-6">
                                        <label htmlFor="firstName" className="form-label">First name</label>
                                        <input type="text" className="form-control" id="firstName" placeholder="" value={address.first_name} onChange={e => setAddress({ ...address, first_name: e.target.value })} />
                                        <div className="invalid-feedback">
                                            Valid first name is required.
                                        </div>
                                    </div>

                                    <div className="col-sm-6">
                                        <label htmlFor="lastName" className="form-label">Last name</label>
                                        <input type="text" className="form-control" id="lastName" placeholder="" value={address.last_name} onChange={e => setAddress({ ...address, last_name: e.target.value })} />
                                        <div className="invalid-feedback">
                                            Valid last name is required.
                                        </div>
                                    </div>


                                    <div className="col-12">
                                        <label htmlFor="phone" className="form-label">Phone <span className="text-muted"></span></label>
                                        <input type="tel" className="form-control" id="phone" placeholder="+91-1111111111" value={address.phone} onChange={e => setAddress({ ...address, phone: e.target.value })} />
                                        <div className="invalid-feedback">
                                            Please enter a valid phone for shipping updates.
                                        </div>
                                    </div>

                                    <div className="col-12">
                                        <label htmlFor="address" className="form-label">Address</label>
                                        <input type="text" className="form-control" id="address" placeholder="1234 Main St" value={address.address1} onChange={e => setAddress({ ...address, address1: e.target.value })} />
                                        <div className="invalid-feedback">
                                            Please enter your shipping address.
                                        </div>
                                    </div>

                                    <div className="col-12">
                                        <label htmlFor="address2" className="form-label">Address 2 <span className="text-muted">(Optional)</span></label>
                                        <input type="text" className="form-control" id="address2" placeholder="Apartment or suite" value={address.address2} onChange={e => setAddress({ ...address, address2: e.target.value })} />
                                    </div>

                                    <div className="col-md-5">
                                        <label htmlFor="country" className="form-label">Country</label>
                                        <select className="form-select" id="country" value={address.country} onChange={e => setAddress({ ...address, country: e.target.value })}>
                                            <option value="">Choose...</option>
                                            <option>India</option>
                                        </select>
                                        <div className="invalid-feedback">
                                            Please select a valid country.
                                        </div>
                                    </div>

                                    <div className="col-md-4">
                                        <label htmlFor="state" className="form-label">State</label>
                                        <select className="form-select" id="state" value={address.state} onChange={e => setAddress({ ...address, state: e.target.value })}>
                                            <option value="">Choose...</option>
                                            <option>Delhi</option>
                                            <option>Uttar Pradesh</option>
                                            <option>Madhya Pradesh</option>
                                            <option>Rajasthan</option>
                                        </select>
                                        <div className="invalid-feedback">
                                            Please provide a valid state.
                                        </div>
                                    </div>

                                    <div className="col-md-3">
                                        <label htmlFor="zip" className="form-label">Zip</label>
                                        <input type="text" className="form-control" id="zip" placeholder="" value={address.pin_code} onChange={e => setAddress({ ...address, pin_code: e.target.value })} />
                                        <div className="invalid-feedback">
                                            Zip code required.
                                        </div>
                                    </div>
                                </div>

                                {/* <hr className="my-4" />


                                <h4 className="mb-3">Payment</h4>

                                <div className="my-3">
                                    <div className="form-check">
                                        <input id="credit" name="paymentMethod" type="radio" className="form-check-input" checked="" required="" />
                                        <label className="form-check-label" htmlFor="credit">Credit card</label>
                                    </div>
                                    <div className="form-check">
                                        <input id="debit" name="paymentMethod" type="radio" className="form-check-input" required="" />
                                        <label className="form-check-label" htmlFor="debit">Debit card</label>
                                    </div>
                                    <div className="form-check">
                                        <input id="paypal" name="paymentMethod" type="radio" className="form-check-input" required="" />
                                        <label className="form-check-label" htmlFor="paypal">PayPal</label>
                                    </div>
                                </div>

                                <div className="row gy-3">
                                    <div className="col-md-6">
                                        <label htmlFor="cc-name" className="form-label">Name on card</label>
                                        <input type="text" className="form-control" id="cc-name" placeholder="" required="" />
                                        <small className="text-muted">Full name as displayed on card</small>
                                        <div className="invalid-feedback">
                                            Name on card is required
                                        </div>
                                    </div>

                                    <div className="col-md-6">
                                        <label htmlFor="cc-number" className="form-label">Credit card number</label>
                                        <input type="text" className="form-control" id="cc-number" placeholder="" required="" />
                                        <div className="invalid-feedback">
                                            Credit card number is required
                                        </div>
                                    </div>

                                    <div className="col-md-3">
                                        <label htmlFor="cc-expiration" className="form-label">Expiration</label>
                                        <input type="text" className="form-control" id="cc-expiration" placeholder="" required="" />
                                        <div className="invalid-feedback">
                                            Expiration date required
                                        </div>
                                    </div>

                                    <div className="col-md-3">
                                        <label htmlFor="cc-cvv" className="form-label">CVV</label>
                                        <input type="text" className="form-control" id="cc-cvv" placeholder="" required="" />
                                        <div className="invalid-feedback">
                                            Security code required
                                        </div>
                                    </div>
                                </div> */}

                                <hr className="my-4" />

                                <button className="w-100 btn btn-success btn-lg " type="submit">Add New Address</button>
                            </form>
                            <button className="w-100 btn btn-primary btn-lg mt-5" onClick={e=>placeOrder()}>Place Order</button>
                        </div>
                    </div>
                </main>

            </div>
        </React.StrictMode>
    )
}

export default Checkout
