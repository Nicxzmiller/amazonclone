import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {listProducts, saveProduct} from "../actions/productActions";

function ProductsScreen(props) {

    const [modalVisible, setModalVisible] = useState(false);
    const [id, setId] = useState('');
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [image, setImage] = useState('');
    const [brand, setBrand] = useState('');
    const [category, setCategory] = useState('');
    const [numReviews, setNumReviews] = useState('');
    const [rating, setRating] = useState('');
    const [countInStock, setCountInSock] = useState('');
    const [description, setDescription] = useState('');

    const productList = useSelector(state => state.productList);
    const {loading, products, error} = productList;
    const productSave = useSelector(state => state.userSignin);
    const {loading: loadingSave, success: successSave, error: errorSave } = productSave;

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(listProducts());
        return () => {
            //
        };
    }, []);

    const openModal = (product) => {
        setModalVisible(true);
        setId(product._id);
        setName(product.name);
        setPrice(product.price);
        setImage(product.image);
        setBrand(product.brand);
        setCategory(product.category);
        setCountInSock(product.countInStock);
        setRating(product.rating);
        setNumReviews(product.numReviews);
    };

    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(saveProduct({name, price, image, brand, category, countInStock, description}));
    };

    return(
        <div>
            <div className="content content-margined">
                <div className="product-header">
                    <h3>Products</h3>
                    <button className="create-product-button" onClick={() => openModal({})}>Create Product</button>
                </div>
                {modalVisible &&
                <div className="form">
                    <form onSubmit={submitHandler}>
                        <ul className="form-container">
                            <li>
                                <h2 className="text-center">Create Product</h2>
                            </li>
                            <li>
                                {loadingSave && <div>Loading...</div>}
                                {errorSave && <div>{errorSave}</div>}
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
                                <input type="text" name="image" id="image" onChange={(e) => setImage(e.target.value)}>
                                </input>
                            </li>
                            <li>
                                <label htmlFor="brand">Brand</label>
                                <input type="text" name="brand" id="brand" onChange={(e) => setBrand(e.target.value)}>
                                </input>
                            </li>
                            <li>
                                <label htmlFor="category">Category</label>
                                <input type="text" name="category" id="category"
                                       onChange={(e) => setCategory(e.target.value)}>
                                </input>
                            </li>
                            <li>
                                <label htmlFor="countInStock">Number in Stock</label>
                                <input type="text" name="countInStock" id="countInStock"
                                       onChange={(e) => setCountInSock(e.target.value)}>
                                </input>
                            </li>
                            <li>
                                <label htmlFor="description">Description</label>
                                <textarea name="description" id="description"
                                          onChange={(e) => setDescription(e.target.value)}>
                            </textarea>
                            </li>
                            <li>
                                <button type="submit" className="button primary">Create</button>
                            </li>
                            <li>
                                <button type="button" onClick={() => setModalVisible(false)} className="button secondary">Cancel</button>
                            </li>
                        </ul>
                    </form>
                </div>
                }

                <div className="product-list">
                    <table>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Name</th>
                                <th>Price</th>
                                <th>Category</th>
                                <th>Brand</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {products.map(product =>(
                                <tr>
                                    <td>{product._id}</td>
                                    <td>{product.name}</td>
                                    <td>{product.price}</td>
                                    <td>{product.category}</td>
                                    <td>{product.brand}</td>
                                    <td>
                                        <button className="edit" onClick={() => openModal(product)}>Edit</button>
                                        <button className="delete">Delete</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

        </div>
    )
}

export default ProductsScreen;