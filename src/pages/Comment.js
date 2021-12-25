import React from 'react'

export default function Comment({comment}) {
    return (
        <div className='border border-dark m-3 text-start p-2'>
            <div className='text-dark'> 
            <div className='badge bg-success text-wrap my-1'>{comment.author}</div>
            <br></br>
             {comment.body} </div>  
        </div>
    )
    }
