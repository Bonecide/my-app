import { useContext, useEffect, useRef, useState } from 'react';
import ReactSelect from 'react-select';
import { ThemeContext } from '../theme';
import PostList from './../PostList';
import TextField from '@mui/material/TextField';;


export default function HomePage() {
  const InputStyle = {
    width: '99%',
    height: '25px',
    marginLeft : '5px',
    border: 'none'
  }
  
    const [post,setPost]= useState([ 
    ]) 
    const fetchPost = async () => {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts')
       const posts = await response.json()
       setPost(posts)
    }
    useEffect(() => {
      fetchPost()
    },[])
  
  const {theme}  = useContext (ThemeContext)
  const selectRef = useRef(null)
  
  // useEffect(() => {
  //   selectRef.current.controlRef.childNodes[1].className = 'custom-arrow'
  // }, [])
  const [value,setValue] = useState('')

  return (
      <div >
        {/* <ReactSelect ref={selectRef} onChange = {event => setValue(event.target.value) }  /> */}
        <input placeholder='Поиск...' style={InputStyle} 
     onChange = {event => setValue(event.target.value)}/>
        <div id="app" className={` header c-${theme}`} style={{width: '100%', height: '100%'}} >
          <PostList value={value} post={post} title = 'Список Постов'/>
        </div>
      </div>
  );
} 