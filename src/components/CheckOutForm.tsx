import React, { useState } from 'react';

const CheckOutForm: React.FC = () => {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');

    const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setName(event.target.value);
    };

    const handlePhoneChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPhone(event.target.value);
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        // Handle form submission logic here
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" value={name} onChange={handleNameChange} />
            </div>
            <div>
                <label htmlFor="phone">Phone:</label>
                <input type="tel" id="phone" value={phone} onChange={handlePhoneChange} />
            </div>
            <button type="submit">Submit</button>
        </form>
    );
};

export default CheckOutForm;