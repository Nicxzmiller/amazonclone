import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {deleteProduct, listProducts, saveProduct} from "../actions/productActions";

function ProductsScreen(props) {

    const [modalVisible, setModalVisible] = useState(false);
    const [id, setId] = useState('');
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [image, setImage] = useState('');
    const [brand, setBrand] = useState('');
    const [category, setCategory] = useState('');
    const [countInStock, setCountInSock] = useState('');
    const [description, setDescription] = useState('');
    const productList = useSelector(state => state.productList);
    const {loading, products, error} = productList;

    const productSave = useSelector(state => state.productSave);
    const {loading: loadingSave, success: successSave, error: errorSave } = productSave;

    const productDelete = useSelector(state => state.productDelete);
    const {loading: loadingDelete, success: successDelete, error: errorDelete } = productDelete;

    const dispatch = useDispatch();

    useEffect(() => {
        if(successSave){
            setModalVisible(false);
        }
        dispatch(listProducts());
        return () => {
            //
        };
    }, [successSave, successDelete]);

    const openModal = (product) => {
        setModalVisible(true);
        setId(product._id);
        setName(product.name);
        setPrice(product.price);
        setImage(product.image);
        setBrand(product.brand);
        setCategory(product.category);
        setDescription(product.description);
        setCountInSock(product.countInStock);
    };

    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(saveProduct({
            _id:id,
            name, price,
            image, brand,
            category,
            countInStock,
            description
        }));
    };

    const deleteHandler = (product) => {
        dispatch(deleteProduct(product._id));
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
                                <input type="text" name="name" id="name" value={name} onChange={(e) => setName(e.target.value)}>
                                </input>
                            </li>
                            <li>
                                <label htmlFor="price">Price</label>
                                <input type="number" name="price" id="price" value={price} onChange={(e) => setPrice(e.target.value)}>
                                </input>
                            </li>
                            <li>
                                <label htmlFor="image">Image</label>
                                <input type="text" name="image" id="image" value={image} onChange={(e) => setImage(e.target.value)}>
                                </input>
                            </li>
                            <li>
                                <label htmlFor="brand">Brand</label>
                                <input type="text" name="brand" id="brand" value={brand} onChange={(e) => setBrand(e.target.value)}>
                                </input>
                            </li>
                            <li>
                                <label htmlFor="category">Category</label>
                                <input type="text" name="category" id="category" value={category}
                                       onChange={(e) => setCategory(e.target.value)}>
                                </input>
                            </li>
                            <li>
                                <label htmlFor="countInStock">Number in Stock</label>
                                <input type="text" name="countInStock" id="countInStock" value={countInStock}
                                       onChange={(e) => setCountInSock(e.target.value)}>
                                </input>
                            </li>
                            <li>
                                <label htmlFor="description">Description</label>
                                <textarea name="description" id="description" value={description}
                                          onChange={(e) => setDescription(e.target.value)}>
                            </textarea>
                            </li>
                            <li>
                                <button type="submit" className="button primary">{id ? "Update":"Create" }</button>
                            </li>
                            <li>
                                <button type="button" onClick={() => setModalVisible(false)} className="button secondary">Cancel</button>
                            </li>
                        </ul>
                    </form>
                </div>
                }

                <div className="product-list">
                    <table className="table">
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
                                <tr key={product._id}>
                                    <td>{product._id}</td>
                                    <td>{product.name}</td>
                                    <td>{product.price}</td>
                                    <td>{product.category}</td>
                                    <td>{product.brand}</td>
                                    <td>
                                        <button className="edit-button" onClick={() => openModal(product)}>Edit</button>
                                        {' '}
                                        <button className="delete-button" onClick={() => deleteHandler(product)}>Delete</button>
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