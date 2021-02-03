import React, { useContext } from 'react'
import { ProductContext } from '../helpers/Context';
import { Products } from '../helpers/ProductList';
import emailjs from 'emailjs-com'
export const EndScreen = () => {
    const { product, setPageState, details } = useContext(ProductContext)
    const sendEmail = () => {
        const obj = {
            "subject": "Product Ordered",
            "name": details.name,
            "email": details.email,
            "address": details.address,
            "number": details["mobile number"],
            "time": new Date().toString(),
            "pName": Products[product].name,
            "pDesc": Products[product].description,
            "pPrice": `$ ${Products[product].price}`,
        };
        emailjs.send('service_3t4e54m', 'template_loxffzy', obj, 'user_oEw2cikLTaeEqL7mw9kv1')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        alert("Your order has been Placed");
        setPageState("menu");
    }

    return (
        <div className="item-row">
            <div className="options">
                <h1 className="end">Confirm Order</h1>
                <img className="prod-image" alt={Products[product].name} src={Products[product].thumb}></img>
                <h2>{Products[product].name}</h2>
                <p>{Products[product].description}</p>
                <h5>Price: $ {Products[product].price}</h5>
                <button className="btn btn-light" onClick={() => sendEmail()}>Place Order</button>
            </div>
        </div>
    )
}
