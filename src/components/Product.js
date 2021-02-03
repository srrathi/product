import React, { useContext } from 'react'
import { ProductContext } from '../helpers/Context';
import { Products } from '../helpers/ProductList';

export const Product = () => {
    const { setProduct, setPageState } = useContext(ProductContext)
    return (
        <div className="item-row">
            <h2 className="end">Select your desired Product</h2>
            <div className="products">
                {Products.map(prod => {
                    return (<div className="options">
                        <img className="prod-image" alt={prod.name} src={prod.thumb}></img>
                        <h2>{prod.name}</h2>
                        <p className="text-justify">{prod.description}</p>
                        <h5>Price: $ {prod.price}</h5>
                        <button className="btn btn-light" onClick={() => { setProduct(Products.indexOf(prod)); setPageState("endScreen")}}>Buy Now</button>
                    </div>)
                })}
            </div>

        </div>
    )
}
