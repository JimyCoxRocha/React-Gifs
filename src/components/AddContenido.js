import React, { Fragment } from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs';
import "../index.css"
import {GifGrid} from './GifGrid';

export const AddContenido = ({category}) => {
    const {data: images, loading} = useFetchGifs(category);
    
    return (
        <Fragment>
            <h3>{category}</h3>
            <div className="lista_horizon">
                {loading && <p>Cargando...</p>}
                {
                    images.map((img)=>(
                        //console.log(gif);
                        <GifGrid key={img.id} 
                        img={img}/>
                        
                    ))
                }
            </div>
        </Fragment>
    )
}