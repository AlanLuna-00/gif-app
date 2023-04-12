import React, {useState} from "react";


const AddCategory = ({ onNewCategory, onDeleteAllCategories}) => {
    const [inputValue, setInputValue] = useState()
    const handleInputChange = (e) => {
        setInputValue(e.target.value)
    }

    const capitalize = (str) => {
        return str.toLowerCase().split(' ').map(function(word) {
            return (word.charAt(0).toUpperCase() + word.slice(1));
        }).join(' ');
    }

    const onSubmit = (e) => {
        e.preventDefault()
        const newInputValue = capitalize(inputValue)
        setInputValue('')
        if ( newInputValue.length <= 1) return;
        onNewCategory(newInputValue)
        newInputValue == 'Exit' ? alert('Bye') : null
    }

    return (
        <div>
            <form onSubmit={ onSubmit}>
                <input
                    type="text"
                    placeholder="Search Gif"
                    value={inputValue}
                    onChange={handleInputChange}
                />

            </form>
            <button onClick={onDeleteAllCategories} className='delete'>DELETE ALL</button>
        </div>
    )
}

export default AddCategory

