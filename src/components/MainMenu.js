import React, { useContext, useState } from 'react'
import { ProductContext } from '../helpers/Context'

export const MainMenu = () => {
    const { setPageState, setDetails } = useContext(ProductContext);
    const [name, setName] = useState("");
    const [mobile, setMobile] = useState("")
    const [address, setAddress] = useState("")
    const [email, setEmail] = useState("")

    const setData = () => {
        setDetails({
            "name": name,
            "mobile number": mobile,
            "address": address,
            "email":email,
        });
    }

    return (
        <div className="menu">
            <h3 className="end">Please Enter Your Details</h3>
            <input onChange={(e) => setName(e.target.value)} placeholder="Full Name"></input>
            <input onChange={(e) => setMobile(e.target.value)} placeholder="Mobile Number"></input>
            <input onChange={(e) => setAddress(e.target.value)} placeholder="Address"></input>
            <input onChange={(e) => setEmail(e.target.value)} placeholder="Email"></input>
            <button className="btn btn-info btn-lg" onClick={() => { setPageState("product"); setData(); }}>Submit</button>
        </div>
    )
}
