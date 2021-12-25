import React, {useState, useEffect, useContext} from 'react'
import { useParams } from "react-router-dom";
import useAxios from '../utils/useAxios'
import Comment from './Comment';
import PostContext from '../context/PostContext';
import AddComment from '../components/AddComment';
import { Link } from 'react-router-dom'

export default function PostLogic() {
    let [notecontent, setNotecontent] = useState([])
    let api = useAxios()
    let [comments, setComments] = useState([])
    let params = useParams()
    
    
    useEffect(()=> {
        getPost()
    }, [])

    useEffect(()=> {
        getComment()
    }, [])

    let getPost = async() =>{
        let response = await api.get(`/post/post/${params.id}`)
        
        if(response.status === 200){
            setNotecontent(response.data)
            console.log(response.data)
        }        
    }
    
    let getComment = async() => {
        let response = await api.get(`comments/comment/?id=${params.id}`)
        if (response.status === 200){
            setComments(response.data)
            console.log(response.data)
        }
    }



    return (
        <div>
            <Link to="/" className='btn btn-secondary my-3 align-baseline'>Back</Link>

            <div className='border border-dark m-3 text-start p-2'>
            <div className='badge bg-primary text-wrap my-1'>{notecontent.author}</div>
                <br></br>
                    {notecontent.content}             
            </div>

        <h1>Comments</h1>

        < AddComment setComments= {setComments} comments= {comments} params = {params} notecontent = {notecontent}/>

         <ul>                
         {comments.length === 0 ?     
            'No Comments to display' : comments.map( (comment) => (
             <li key={comment.id}>
                 <Comment comment = {comment} />
             </li>
         ))}
        </ul>


        </div>
        
     
    )
}
