import { useState } from 'react';

const AddVideoLink = ({ setLink }) => {

    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setLink(inputValue);
        setInputValue('');
    };
    
    return (
        <div className="container-fluid my-2">
            <form className="d-flex" onSubmit={handleSubmit}>
            <input className="form-control me-2" type="search" 
                placeholder="Please Paste your Youtube link here" 
                value={inputValue}          
                onChange={handleInputChange}
                aria-label="view" />
                <button className="btn btn-outline-success" type="submit">View</button>
            </form>
        </div>
    );
}

export default AddVideoLink;