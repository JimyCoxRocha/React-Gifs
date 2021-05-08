import React, { Fragment, useState } from "react"
import { AddCategory } from "./components/AddCategory"
import { AddContenido } from "./components/AddContenido"


const GifExpertApp = ()=>{
    //const categories = ["One Punch", "Samurai X", "Dragon Ball"]
    const [categories, setCategories] = useState(["One Punch"/* , "Samurai X", "Dragon Ball" */])
    /* const handleAdd = (serie)=>{
        setCategories([serie,...categories])
    } */
    
    return (
        <Fragment>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories = {setCategories}/>
            <hr/>
            {/* <button onClick={()=>{handleAdd("Holaa")}}>Agregar</button> */}
            
            <div>
                {categories.map((category) =>{
                    return <AddContenido category={category} key={category} />
                })}
            </div>
        </Fragment>
    )
}

export default GifExpertApp;