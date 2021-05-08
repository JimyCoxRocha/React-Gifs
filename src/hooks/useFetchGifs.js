import {useState, useEffect} from 'react'
import {getGifs} from "../helpers/getGifs";

export const useFetchGifs = (category) =>{
    const [images, setImages] = useState({data: [], loading: true}/* [{"url": "hola", "id":"Cox"},{"url": "chao", "id":"Helen"}] */);
    
    useEffect(()=>{
        getGifs(category)
        .then((gifs) => {
            setImages(
                {
                    data: gifs,
                    loading: false
                }
            );
        })
        
        /* getGifs({setImages, category}); */
    }, [category])/* // eslint-disable-line react-hooks/exhaustive-deps */

    return images;
}
