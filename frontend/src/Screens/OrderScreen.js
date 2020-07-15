import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {Link} from "react-router-dom";


function OrderScreen(props) {

    useEffect(() => {
        detailsOrder(props.match.params.id)
        return () => {
            cleanup
        };
    }, []);

    const orderDetails = useSelector(state => state.orderDetails);
    const {loading, order, error} = orderDetails;

    return (
        <div>
            loading ? <div>Loading...</div>: error ? <div>{error}</div>:
            <div className="placeorder">
                <div className="placeorder-info">
                    <div>
                        <h3>Shipping</h3>
                        <div>
                            {cart.shipping.address}, {cart.shipping.city},
                            {cart.shipping.postalCode}, {cart.shipping.country}
                        </div>
                        <div>
                            {order.isDelivered?"Delivered at " + order.deliveredAt : "Not delivered"}
                        </div>
                    </div>
                    <div>
                        <h3>Payment</h3>
                        <div>
                            Payment Method: {cart.payment.paymentMethod}
                        </div>
                        <div>
                            {order.isPaid ?"Paid at " + order.paidAt : "Not yet paid"}
                        </div>
                    </div>
                    <div>
                        <ul className="cart-list-container">
                            <li>
                                <h3>
                                    Shopping Cart
                                </h3>
                                <div>
                                    Price
                                </div>
                            </li>
                            {
                                order.orderItems.length === 0 ?
                                    <div>
                                        Cart is empty
                                    </div>
                                    :
                                    cartItems.map(item =>
                                        <li>
                                            <div className="cart-image">
                                                <img src={item.image} alt="product" />
                                            </div>
                                            <div className="cart-name">
                                                <div>
                                                    <Link to={"/product/" + item.product}>
                                                        {item.name}
                                                    </Link>

                                                </div>
                                                <div>
                                                    Qty: {item.qty}
                                                </div>
                                            </div>
                                            <div className="cart-price">
                                                ${item.price}
                                            </div>
                                        </li>
                                    )
                            }
                        </ul>
                    </div>

                </div>
                <div className="placeorder-action">
                    <ul>
                        <li>
                            <button className="button primary full-width" onClick={placeOrderHandler}> Place Order</button>
                        </li>
                        <li>
                            <h3>Order Summary</h3>
                        </li>
                        <li>
                            <div>Items</div>
                            <div>${itemsPrice}</div>
                        </li>
                        <li>
                            <div>Shipping</div>
                            <div>${shippingPrice}</div>
                        </li>
                        <li>
                            <div>Tax</div>
                            <div>${taxPrice}</div>
                        </li>
                        <li>
                            <div>Order Total</div>
                            <div>${totalPrice}</div>
                        </li>
                    </ul>


                </div>

            </div>

        </div>
    )
}

export default OrderScreen;