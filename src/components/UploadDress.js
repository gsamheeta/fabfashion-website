import React, { useState } from 'react';

const UploadDress = () => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [image, setImage] = useState(null);
    const [category, setCategory] = useState('');
    const [price, setPrice] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        const formData = new FormData();
        formData.append('name', name);
        formData.append('description', description);
        formData.append('image', image);
        formData.append('category', category);
        formData.append('price', price);

        fetch('http://localhost:8001/api/dresses/', {
            method: 'POST',
            body: formData,
        })
            .then(response => response.json())
            .then(data => {
                console.log('Success:', data);
                // Optionally, clear the form or handle success feedback
            })
            .catch(error => {
                console.error('Error:', error);
            });
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Name:
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
            </label>
            <br />
            <label>
                Description:
                <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} />
            </label>
            <br />
            <label>
                Image:
                <input type="file" onChange={(e) => setImage(e.target.files[0])} />
            </label>
            <br />
            <label>
                Category:
                <select value={category} onChange={(e) => setCategory(e.target.value)}>
                    <option value="">Select Category</option>
                    <option value="Men">Men</option>
                    <option value="Women">Women</option>
                    <option value="Kids">Kids</option>
                </select>
            </label>
            <br />
            <label>
                Price (INR):
                <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} />
            </label>
            <br />
            <button type="submit">Upload Dress</button>
        </form>
    );
};

export default UploadDress;
