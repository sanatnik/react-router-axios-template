import React, {useContext, useState, useEffect} from 'react'
import PostProvider from '../context/PostProvider'
import {Modal} from 'react-bootstrap'
import AuthContext from '../context/AuthContext';
import { useParams } from "react-router-dom";
import useAxios from '../utils/useAxios';

export default function AddComment({setComments, comments, params, notecontent }) {
    // let { comments, setComments} = useContext(PostProvider)
    let [modalc, setModalc] = useState(false)
    let [commentfield, setCommentfield] = useState('')
    // let myparams = useParams()
    let api = useAxios()
    let {ShowAlert, user} = useContext(AuthContext)
    



    const AddComment = async(e) => {
        e.preventDefault()
        if (commentfield.length === 0){
            alert('Enter some data')
        }
        else if (commentfield.length > 600){
            alert('Max Lenght = 600 character only')
        }
        else{
        try{
            let response = await api.post(`/comments/comment/`, {'body': commentfield, 'post': notecontent.id})
            setComments([...comments, response.data])
            console.log(response.data)
            setCommentfield('')
            setModalc(false)
            ShowAlert('Comment Added ', "success") 
        }
        catch(error) {
            console.log(error)
        }
    }

    }

    return (
        <div>
        <button type="button" className="btn btn-primary btn-sm" onClick={() => setModalc(true)}>
           Add Comment
        </button>
        <Modal show={modalc} onHide={() => setModalc(false)}> {/* () => setModal(false) */}
            <Modal.Header closeButton>
                <Modal.Title>Add Post</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <form onSubmit={AddComment} >
                    <div className="form-group">
                        <div className = 'my-3'>
                        <textarea
                            type="text"
                            className="form-control"
                            name="body"
                            rows="3"
                            value = {commentfield}
                            onChange={(e) => setCommentfield(e.target.value)}
                        >
                        </textarea>
                        </div>
                    </div>
                    <p className="text-muted">
                        {commentfield.length} /600
                    </p>
                    <div className="form-group">
                        <button type="submit" className="btn btn-primary my-3">
                            Submit
                        </button>
                    </div>
                </form>
            </Modal.Body>
        </Modal>
        
    </div>
    )
}
