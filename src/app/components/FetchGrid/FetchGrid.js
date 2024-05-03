'use client';

import { useEffect } from "react";
import axios from 'axios';
const FetchGrid = () => {
    useEffect(()=>{
        const handleGetData = async () => {
          try {
            const response = await axios.get('https://ws.audioscrobbler.com/2.0/?method=artist.gettopalbums&artist=Twenty+One+Pilots&api_key=d659cc02b91f8569a8d3a3e95091db43&format=json')
            const data = response.data.topalbums.album;//en data nuestra info, nuestro array
            console.log(data);
          }catch (error){
            console.log('el error es', error)
          }
        }
        handleGetData() 
      },[])
    return(
        <div>
            <p>Fetching data</p>
        </div>
    )
}

export default FetchGrid