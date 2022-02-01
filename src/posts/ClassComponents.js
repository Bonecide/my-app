
import { useState } from 'react';
import { useEffect } from 'react';
import Post from './Post';


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
    return (
<div>
    {before.map((post) => {
        return (
            <Post id = {post.id} title = {post.title} body = {post.body}/>
        )
    })}
</div>)}