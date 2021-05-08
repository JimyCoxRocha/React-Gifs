import React from 'react'

export const GifGrid = ({img:{id, title, url}}) =>/* {title, id, url} */ {
    //console.log(id);
    return (
        <div className="lista animate__animated animate__tada">
            <img src={url} alt={title}></img>
            <p>{title}</p>
        </div>
    )
}
