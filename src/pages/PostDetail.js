import React from 'react'
import { Link } from 'react-router-dom'

export default function PostDetail({post}) {
    return (
        <div className='border border-dark m-3 text-start p-2'>
        
            
        <Link to = {"/posts/" + post.id} style={{ textDecoration: 'none' }}> 
            <div className='text-dark'>
                <div className='badge bg-info text-wrap my-1'>{post.author}</div>
                <br></br>
                 {post.content}
            </div> 
                <br></br>
                
             </Link> 
        </div>
    )
}



