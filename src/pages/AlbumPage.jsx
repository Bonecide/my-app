import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
export default function AlbumPage(){
const [albums,setAlbum] = useState([])


const FetchAlbum = async () => {
    const response = await fetch ('https://jsonplaceholder.typicode.com/photos')
    const result =  await response.json()
    setAlbum(result)
}
useEffect(()=> {
    FetchAlbum()
}, [])


return (
    <div>
    {albums.map((album) =>(
        <Link key={album.id} to={`/album/${album.albumId}`}>
        <p>{`Номер Альбома:${album.albumId}`}</p> <br/>
        <h3>{`Название:${album.title}`}</h3> 
        </Link> ))}
    </div>
)
}