import { useState, useEffect } from 'react';
import { getGifs } from '../helpers/getGifs';

export const useFetchGifs = (category) => {
    const [state, setState] = useState({
        images: [],
        isLoading: true
    });

    const getImages = async () => {
        const newImages = await getGifs(category);
        setState({
            images: newImages,
            isLoading: false
        });
    }

    useEffect(() => {
        getImages();
    }, []);

    return state;
}