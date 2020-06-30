import React from "react";
import data from "../data";
import { Link } from "react-router-dom";

function ProductScreen(props) {
    console.log(props.match.params.id);
    const product = data.products.find(x => x._id === props.match.params.id);
    return(
        <div>
            <div>
                <Link to="/">
                    <button style={{fontSize:'14px', cursor:'pointer', border: '1px #808080 solid', fontWeight:'bold', padding:'10px', margin:'5px', backgroundColor:'darkblue', color:'#ffffff', borderRadius: '10px', outline:'none'}}>Back to Result</button>
                </Link>
            </div>
            <div className="details">
                <div className="details-image">
                    <img src={product.image} alt="Product"/>
                </div>
                <div className="details-info">
                    <ul>
                        <li><h4>{product.name}</h4></li>
                        <li>{product.rating} Stars {product.numReviews} reviews</li>
                        <li>Price:<b> {product.currency}{product.price}</b></li>
                        <li>
                            Description:
                            <div>{product.description}</div>
                        </li>
                    </ul>
                </div>
                <div className="details-action">
                    <ul>
                        <li>Price: <b>{product.currency}{product.price}</b></li>
                        <li>Status: </li>
                        <li>Qty:{' '}
                            <select name="" id="">
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                            </select>
                        </li>
                        <br/>
                        <li>
                            <button>Add to Cart</button>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default ProductScreen;