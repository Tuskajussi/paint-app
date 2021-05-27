import React, { useState } from 'react';

const Form = (props) => {  
   const [form, setForm] = useState({
        name: '',
        price: '',
        adequacy: ''
    });

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }


    const handleSubmit = () => {
        props.handleClick(form.name, form.price, form.adequacy);

    }

    return (
        <form onSubmit={handleSubmit(form.name, form.price, form.adequacy)}>
            <label>Paint Name:</label>
            <input type="text" name={form.name} onChange={(e) => handleChange(e)} placeholder="Name" required/>
            <label>Price per litre:</label>
            <input type="number" name={form.price} onChange={(e) => handleChange(e)} placeholder="€/L" required/>                
            <label>How many square meters per liter of paint?</label>
            <input type="number" name={form.adequacy} onChange={(e) => handleChange(e)} placeholder="1-3" required/>
            <input type="submit" value="Submit" />
        </form>
    );
}

export default Form;