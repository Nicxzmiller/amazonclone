import React, {useEffect, useState} from "react";
import {logout, update } from "../actions/userActions";
import {useDispatch, useSelector} from "react-redux";

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

    useEffect(() => {
        if(userInfo){
            setEmail(userInfo.email);
            setName(userInfo.name);
            setPassword(userInfo.password);
        }
        return () => {

        }
    }, []);

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

        </div>
    </div>
}

export default ProfileScreen;