import React, { useState } from 'react'
import PropTypes from 'prop-types'

export const AddCategory = ({ setCategories }) => {

    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e) => [
        setInputValue(e.target.value)

    ]

    const handleSubmit = e => {
        e.preventDefault();
        if( inputValue.trim().length > 2 ){

            setCategories(estadoAnterior => [ inputValue, ...estadoAnterior]); //Genero una copia del estado anterior y le agrego inputValue que contiene lo digitado en los campos de texto 
            setInputValue(''); //Limpio el estado inputValue y limpio el campo de texto 

        }
    }

    return (
        <>
            <form onSubmit ={ handleSubmit }>

                <h2>Add Category </h2>
                <input
                    type='text'
                    value={ inputValue }
                    onChange={ handleInputChange }
                />

            </form>
        </>
    )
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}
