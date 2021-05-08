import React, {useState} from 'react'
import PropTypes from "prop-types";

export const AddCategory = ({setCategories}) => {
    const [state, setState] = useState("")//Undefined, con comillas es un String VACIO
    const handleKeyPress = (event)=>{
        setState(event.target.value);
        console.log(event.target.value)
        
    }
    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log("Submit más hecho que que.");
        if(state.trim().length>2){
            setCategories(categorias => [state,...categorias])
            setState((estado)=> (estado =""))
        }
    }
    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="text" 
                value={state}
                onChange = {(event) => {handleKeyPress(event)}}
            />
        </form>
    )
}

AddCategory.propTypes ={
    setCategories: PropTypes.func.isRequired
};