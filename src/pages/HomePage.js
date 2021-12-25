import React, {useContext, useEffect, useState} from 'react'
import PostContext from '../context/PostContext'
import useAxios from '../utils/useAxios'
import PostDetail from './PostDetail'


export default function HomePage() {
    let {posts} = useContext(PostContext)

    return (
        <div>
            <h1> Home Page </h1>


            <ul>
            <div className='border border-dark'>
            
                
                {posts.map(post => (
                    
                    <li key={post.id}>
                        <PostDetail post = {post} />
                    </li>
                ))}

</div>
            </ul>
            
            
            
        </div>
    )
}


{/* <li key={note.id} >{note.content}</li> */}
