import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch']) // el segundo argumetno del useState contiene guardado el estado anterior 

    /*const handleAdd = () => {
        
      setCategories([...categories, 'Naruto'])  PARA ANADIR UN ELEMENTO A categories

    }*/


    return (
        <>
            <h2> GifExpertApp</h2>
            <AddCategory setCategories={ setCategories } />
            <hr />


            <ol>
                {
                    categories.map(indexCategory => (
                        <GifGrid
                            key={ indexCategory } 
                            indexCategory={ indexCategory }
                        />
                    ))
                
                }

            </ol>

            <button > Agregar </button>
        </>


    );

};


export default GifExpertApp;