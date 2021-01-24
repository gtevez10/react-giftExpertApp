import React, { useState, useEffect } from 'react'
import { getGifs } from '../helpers/GetGifs'

export const useFetchGifs = (indexCategory) => {

    const [state, setstate] = useState({
        data: [],
        loading: true,
    });



    useEffect(() => { //TODO AQUI ADENTRO SOLO se ejecuta cuando indexCategory cambia OJO colocar  , [] 

        getGifs(indexCategory) // Helper. Peticion HTTP para obtener los Gifts
            .then(dataGifs => {
                setstate({
                    data: dataGifs,
                    loading: false,
                });
            })

    }, [indexCategory])


    return state;
}
