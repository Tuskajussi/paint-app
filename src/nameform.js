import React, { useState } from 'react';
import Painted from "./painted";
import rooms from "./data.json";

const Form = (props) => {  

    const [form, setForm] = useState({
        name: '',
        price: '',
        adequacy: '',
        levels: ''
    });
    
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        //props.handleClick(form.name, form.price, form.adequacy, form.levels);
        setSubmitted(true);
        e.preventDefault();
    }
    
    return (
        <>
        <form onSubmit={handleSubmit}>
            <h3>Paint information:</h3>
            <label>Paint Name:</label>
            <input type="text" value={form.name} name="name" onChange={(e) => handleChange(e)} placeholder="Name" required/>
            <label>Price per litre:</label>
            <input type="number" value={form.price} name="price" onChange={(e) => handleChange(e)} placeholder="€/L" required/>                
            <label>How many square meters does it paint per liter of paint?</label>
            <input type="number" value={form.adequacy} name="adequacy" onChange={(e) => handleChange(e)} placeholder="1-3" required/>
            <label>How many levels of paint needed?</label>
            <input type="number" value={form.levels} name="levels" onChange={(e) => handleChange(e)} placeholder="1-3" required/>
            <input type="submit" value="Submit" />
        </form>
        <Painted data={rooms} form={form}/>
        </>
    );
}
export default Form;