'use client';
import styles from "./FetchGrid.module.css";

import { useEffect, useState } from "react";
import axios from 'axios';
const FetchGrid = () => {
  const [albums, setAlbums] = useState([]);
  const [loading, setLoading] = useState(true);
  
    useEffect(()=>{//cuando se monta el componente el useeffect ejecuta la funcion
      setLoading(true);  
      const handleGetData = async () => {//funcion asincronica pq trabajamos con una api rest la cual trabaja con promesas (funciones de js que no paran el cod hasta que se resuelva esa promesa, llama a la api y espera el resultado de la misma para mostrarla)
          try {//si sale bien se ejecuta el try
            const response = await axios.get('https://ws.audioscrobbler.com/2.0/?method=artist.gettopalbums&artist=Twenty+One+Pilots&api_key=d659cc02b91f8569a8d3a3e95091db43&format=json')
            const data = response.data.topalbums.album;//en data nuestra info, nuestro array, response axios deponde un objeto que nos devuelve a
            setAlbums(data);
            setLoading(false);
            console.log(data);//get obtener la info
          }catch (error){//si falla va al catch donde nos avisa el error
            console.log('el error es', error)
          }
        }
        handleGetData() //ejecutamos la api
      },[])
    return(
        <div className={styles.container}>
          {loading && <p>Fetching data</p>}
          {!loading && 
          albums.map((album, index) => <p key={index}>{album.name}</p>)}
        </div>
    )
}

export default FetchGrid