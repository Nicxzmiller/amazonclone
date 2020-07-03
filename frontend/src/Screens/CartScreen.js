import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {addToCart} from "../actions/cartActions";


function CartScreen(props) {

    const cart = useSelector(state => state.cart);

    const {cartItems } = cart;

    const productId = props.match.params.id;
    const qty = props.location.search? Number(props.location.search.split("=")[1]):1;
    const dispatch = useDispatch();
    useEffect(() => {
        if(productId){
            dispatch(addToCart(productId, qty))
        }
    }, []);

    return (
        <div className="cart">
            <div className="cart-list">
                <ul className="cart-list-container">
                   <li>
                       <h3>Shopping Cart</h3>
                       <div>Price</div>
                   </li>
                    { cartItems === 0 ?
                        <div>Cart is empty</div>:
                        cartItems.map(item =>
                        <div>
                            <img src={item.image} alt="product"/>
                            <div className="cart-name">
                                <div>
                                    {item.name}
                                </div>
                                <div>
                                    Qty:
                                    <select name="" id="">
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                    </select>
                                </div>
                            </div>
                            <div>
                                {item.currency}{item.price}
                            </div>
                        </div>
                        )
                    }
                </ul>
            </div>
            <div className="cart-action">
                <h3>Subtotal ({cartItems.reduce((a,c) => a + c.qty, 0)} items): £
                    {cartItems.reduce((a, c) => a + c.price * c.qty, 0)}
                </h3>
                <button style={{fontWeight: 'bold',
                    fontSize: '14px',
                    outline: 'none',
                    padding: '10px',
                    borderRadius: '10px',
                    backgroundColor: 'orange',
                    border:' 1px #808080 solid',
                    cursor: 'pointer'}} disabled={cartItems.length === 0}>Proceed to Checkout</button>
            </div>
        </div>
    )
}

export default CartScreen;