
import Post from './Post';
import { ThemeContext } from './../theme';
import { useContext, useEffect, useState } from "react"


export default function ClassComponentik (){
    const[before,after] = useState ([]);


    async function fetchPosts() {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts')
        const posts = await response.json()
        after (posts)
    }
    useEffect (() => {
        fetchPosts()
    },[])
    const { theme } = useContext(ThemeContext)
    const styles = {
        light: {
            color: 'white',
        },
        dark: {
            color: 'black',
        }
    }
    return (
<div>
    {before.map((post) => {
        return (
            <Post styles={styles[theme]} id = {post.id} title = {post.title} body = {post.body}/>
        )
    })}
</div>)}