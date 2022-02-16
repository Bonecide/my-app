import React, { useState } from "react"
import PostItem from "./PostItem"
export default function PostList({post , title, value}){

  const filterPost = post.filter((item => (
    item.title.includes(value) || item.body.includes(value)
  ))) 

  return (
    
    <div>
      <h1 style={{textAlign: 'center'}}>
        {title}
      </h1>
      {filterPost.map((posts) =>
        <PostItem post = {posts} key={posts.id}/>
      )}
      
    </div>
    
  );

}