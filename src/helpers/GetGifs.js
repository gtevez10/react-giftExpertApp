
// PETICION PARA OBTENER LOS GIFTS 

export const getGifs = async ( indexCategory ) => {   //encodeURI SIRVE para reemplazar los espacios con que venga indexCategory por %20 y troas cosas de URLS validas

    const url = ` https://api.giphy.com/v1/gifs/search?q=${ encodeURI( indexCategory )  }&limit=10&api_key=SaGgLbKvq7zTXOkrWbLiaziKSr8TA0cF `; //DEBO AGREGARLE https:// ademas los espacios generados los relleno con + 
    const resp = await fetch(url);
    const { data } = await resp.json(); // hago desestructuracion de data ya que solo me interesa eso 
    const gifs = data.map(index => { // Busco las propiedades de data que me interesan 
        return {
            id: index.id,
            title: index.title,
            url: index.images?.downsized_medium.url, //utilo ? para preguntar que si vienen las imagenes entonces la utilice , si no existe me devulve undefined y no error
        }
    })

    
    return( gifs ) ; // me devuelve una promesa (NO lo gifs) que resuelve mi peticion a la coleccion de las imagenes 

}