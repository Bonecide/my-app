import { useContext, useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import { ThemeContext } from '../theme';
export default function AlbumPage(){
const [albums,setAlbum] = useState([{title: 'Данные загружаются...'}])


const FetchAlbum = async () => {
    const response = await fetch ('https://jsonplaceholder.typicode.com/photos')
    const result =  await response.json()
    setAlbum(result)
}
const {theme}  = useContext (ThemeContext)
useEffect(()=> {
    FetchAlbum()
}, [])


return (
    <div>
    {albums.map((album) =>(
        <div className={`c-${theme}`} key={album.id}>
        <Link to={`/album/${album.albumId}`}>
        <p>{`Номер Альбома:${album.albumId}`}</p> <br/>
        </Link>
        <h3>{album.title}</h3> 
        </div>
         ))}
    </div>
)
}