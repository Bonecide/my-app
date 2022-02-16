import { useContext, useEffect, useState } from "react"
import { useParams } from 'react-router-dom';
import { Grid } from '@mui/material';
import { ThemeContext } from './../theme';

export default function AlbumDetailsPage (){
    const [photos,setPhoto] = useState([{title: 'Данные загружаются...'}])
    const { albumId } = useParams()

    const fetchPhoto = async () => {
        const response = await fetch(
            `https://jsonplaceholder.typicode.com/photos?albumId=${albumId}`
        )
        const result = await response.json()
        setPhoto(result)
    }
    const {theme} = useContext(ThemeContext)

  useEffect  (()=> {
      fetchPhoto()
  },[])

  return (
      <div>
      {photos.map((photo) =>(
      <div className={`c-${theme}`} key={photo.id}>
        <Grid container>
            <Grid item direction='columns'>
                <Grid container alignItems="center">
                <h3>{photo.title}</h3> <br/>
                <img style={{width: '100px',height:'100px',marginLeft: '20px'}} src={photo.url} alt={photo.id} /> 
                </Grid>
            </Grid>
        </Grid>
      </div> ))}
      </div>
  )
}
