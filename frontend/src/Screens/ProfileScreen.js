import React, {useEffect, useState} from "react";
import {logout, update } from "../actions/userActions";
import {listMyOrders } from "../actions/orderActions";
import {useDispatch, useSelector} from "react-redux";
import { Link } from "react-router-dom";

function ProfileScreen(props) {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();

    const userSignin = useSelector( state => state.userSignin);
    const {userInfo } = userSignin;

    const handleLogout = () => {
        dispatch(logout());
        props.history.push("/signin");
    };

    const submitHandler = (e) =>{
        e.preventDefault();
        dispatch(update({userId:userInfo._id, email, name, password}))
    };

    const userUpdate = useSelector(state => state.userUpdate);
    const {loading, success, error} = userUpdate;

    const myOrderList = useSelector(state => state.myOrderList);
    const {loading:loadingOrders, orders, error:errorOrders} = myOrderList;

    useEffect(() => {
        if(userInfo){
            setEmail(userInfo.email);
            setName(userInfo.name);
            setPassword(userInfo.password);
        }
        dispatch(listMyOrders());
        return () => {

        }
    }, [userInfo]);

    return <div className="profile">
        <div className="profile-info">
            <div className="form">
                <form action="" onSubmit={submitHandler}>
                    <ul className="form-container">
                        <li>
                            <h2 className="text-center">User Profile</h2>
                        </li>
                        <li>
                            {loading && <div>Loading...</div>}
                            {error && <div>{error}</div>}
                            {success && <div>Profile Updated Successfully</div>}
                        </li>
                        <li>
                            <label htmlFor="name">Name</label>
                            <input value={name} type="text" name="name" id="name" onChange={(e) => setName(e.target.value)}>
                            </input>
                        </li>
                        <li>
                            <label htmlFor="email">Email</label>
                            <input value={email} type="email" name="email" id="email" onChange={(e) => setEmail(e.target.value)}>
                            </input>
                        </li>
                        <li>
                            <label htmlFor="password">Password</label>
                            <input value={password} type="password" name="password" id="password" onChange={(e) => setPassword(e.target.value)}>
                            </input>
                        </li>
                        <li>
                            <button type="submit" className="button primary">Update</button>
                        </li>
                        <p>
                            By updating your account, you agree to Amazonclone's Conditions of Use and Privacy Notice.
                        </p>
                        <li>
                            <button type="button" onClick={handleLogout} className="button secondary full-width">Logout</button>
                        </li>

                    </ul>
                </form>
            </div>
        </div>

        <div className="profile-orders">
            {
                loadingOrders ? <div>Loading...</div>: errorOrders ? <div>{errorOrders}</div>:
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>DATE</th>
                            <th>TOTAL</th>
                            <th>PAID</th>
                            <th>ACTION</th>
                        </tr>
                    </thead>
                    <tbody>
                        {orders.map(order => <tr key={order._id}>
                            <td>{order._id}</td>
                            <td>{order.createdAt}</td>
                            <td>{order.totalPrice}</td>
                            <td>{order.isPaid}</td>
                            <td>
                                <Link to={"/order/" + order._id}>DETAILS</Link>
                            </td>
                        </tr>)}
                    </tbody>
                </table>
            }
        </div>
    </div>
}

export default ProfileScreen;