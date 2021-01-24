import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';


export const GifGrid = ({ indexCategory }) => {

    const { loading, data:dataGifs } = useFetchGifs(indexCategory);


    return (
        <>
            <h3>{ indexCategory }</h3>
            { loading && <p> Loading... </p>}
                <div className='divCard'>
                    <ol>
                        {
                            dataGifs.map(indexGifs => (
                                <GifGridItem
                                    key={indexGifs.id}
                                    {...indexGifs} //DE ESTA MANERA le paso cada una de las propiedades individualmente 

                                />
                            ))
                        }
                    </ol>
                </div>
        </>
    )
}

