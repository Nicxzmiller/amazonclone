import React, {useEffect, useState} from "react";
import { Link } from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {signin} from "../actions/userActions";

function ProductsScreen(props) {

    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [image, setImage] = useState('');
    const [brand, setBrand] = useState('');
    const [category, setCategory] = useState('');
    const [countInStock, setCountInSock] = useState('');
    const [description, setDescription] = useState('');
    const [rating, setRating] = useState('');
    const [numReviews, setNumReviews] = useState('');
    const productSave = useSelector(state => state.userSignin);
    const {loading: loadingSave, success: successSave, error: errorSave } = productSave;

    const dispatch = useDispatch();

    useEffect(() => {

        return () => {
            //
        };
    }, [userInfo]);

    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(saveProduct({name, price}));
    };

    return(
        <div className="form">
            <form action="" onSubmit={submitHandler}>
                <ul className="form-container">
                    <li>
                        <h2 className="text-center">Create Product</h2>
                    </li>
                    <li>
                        {loading && <div>Loading...</div>}
                        {error && <div>{error}</div>}
                    </li>
                    <li>
                        <label htmlFor="name">Name</label>
                        <input type="text" name="name" id="name" onChange={(e) => setName(e.target.value)}>
                        </input>
                    </li>
                    <li>
                        <label htmlFor="price">Price</label>
                        <input type="number" name="price" id="price" onChange={(e) => setPrice(e.target.value)}>
                        </input>
                    </li>
                    <li>
                        <label htmlFor="image">Image</label>
                        <input type="text" name="name" id="name" onChange={(e) => setImage(e.target.value)}>
                        </input>
                    </li>
                    <li>
                        <label htmlFor="brand">Brand</label>
                        <input type="text" name="brand" id="brand" onChange={(e) => setBrand(e.target.value)}>
                        </input>
                    </li>
                    <li>
                        <label htmlFor="category">Category</label>
                        <input type="text" name="category" id="category" onChange={(e) => setCategory(e.target.value)}>
                        </input>
                    </li>
                    <li>
                        <label htmlFor="countInStock">Number in Stock</label>
                        <input type="text" name="countInStock" id="countInStock" onChange={(e) => setCountInSock(e.target.value)}>
                        </input>
                    </li>
                    <li>
                        <label htmlFor="description">Description</label>
                        <textarea name="description" id="description" onChange={(e) => setDescription(e.target.value)}>
                        </textarea>
                    </li>
                    <li>
                        <label htmlFor="rating">Rating</label>
                        <input type="text" name="rating" id="rating" onChange={(e) => setRating(e.target.value)}>
                        </input>
                    </li>
                    <li>
                        <label htmlFor="numReviews">Reviews</label>
                        <input type="text" name="numReviews" id="numReviews" onChange={(e) => setNumReviews(e.target.value)}>
                        </input>
                    </li>
                    <li>
                        <button type="submit" className="button primary">Create</button>
                    </li>
                </ul>
            </form>
        </div>
    )
}

export default ProductsScreen;