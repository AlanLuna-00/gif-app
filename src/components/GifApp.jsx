import React, { useState } from 'react'
import AddCategory from './AddCategory'
import GifCard from './GifCard'

const GifApp = () => {
    const [categories, setCategories] = useState([])

    // Add new category
    const onAddCategory = (newCategory) => {
        const checkRepeat = categories.includes(newCategory)
        if (checkRepeat) return;
        setCategories([newCategory, ...categories])
        console.log(categories)
    }

    // Delete a category
    const onDeleteCategory = (category) => {
        const newCategories = categories.filter(cat => cat !== category)
        setCategories(newCategories)
    }

    // Delete all categories
    const onDeleteAllCategories = () => {
        setCategories([])
    }

    return (
        <div>
            <h1>GifApp</h1>

            <AddCategory onNewCategory={onAddCategory} onDeleteAllCategories={onDeleteAllCategories} />

            {categories.map(category => {
                return (
                    <div key={category}>
                        <GifCard key={category} category={category} />
                        <button onClick={() => onDeleteCategory(category)} className='delete'>DELETE</button>
                    </div>
                )
            })}

        </div>
    )
}

export default GifApp