import React from 'react'
import { GifItem } from './GifItem'
import { useFetchGifs } from '../hooks/useFetchGifs' // <--- Custom Hook



const GifGrid = ({ category }) => {

    const { images, isLoading } = useFetchGifs(category)

    return (
        <>
            <div className="title">
                <h3>{category}</h3>
            </div>
            { isLoading && <p>Loading...</p> }
            <div className="card-grid">
                {
                    images.map( img => (
                        <GifItem key={img.id} { ...img } />
                    ))
                }
            </div>
        </>
    )
}

export default GifGrid